import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../models/index.js';  // Fixed import path
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library
import bcrypt from 'bcrypt';  // Import the bcrypt library for password hashing

// Extend Request type to include userId
interface AuthenticatedRequest extends Request {
  userId?: number;
}

const router = Router();

// Middleware to verify JWT token
const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as { userId: number, username: string };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Get current user data
router.get('/me', verifyToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const user = await User.findByPk(req.userId, {
      attributes: ['id', 'username', 'email']
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Error in getCurrentUser:', error);
    return res.status(500).json({ message: 'Error fetching user data' });
  }
});

// Login route
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt received:', { username, hasPassword: !!password });

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      console.log('User not found:', username);
      return res.status(401).json({ message: 'Authentication failed: User not found' });
    }

    console.log('User found:', {
      id: user.id,
      username: user.username,
      email: user.email,
      hasPassword: !!user.password
    });

    console.log('Comparing passwords...');
    const passwordIsValid = await bcrypt.compare(password, user.password);
    console.log('Password valid:', passwordIsValid);
    
    if (!passwordIsValid) {
      console.log('Password validation failed');
      return res.status(401).json({ message: 'Authentication failed: Invalid password' });
    }

    const secretKey = process.env.JWT_SECRET || 'your-secret-key';
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    console.log('Token generated successfully');
    
    return res.json({ 
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error during login' });
  }
});

// Signup route
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      where: { username }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    // Generate token
    const token = jwt.sign(
      { username: user.username, userId: user.id },
      process.env.JWT_SECRET || '',
      { expiresIn: '1h' }
    );

    return res.status(201).json({
      token,
      userId: user.id,
      username: user.username,
      email: user.email
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Error during signup' });
  }
});

export default router;  // Export the router instance
