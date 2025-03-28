import { Router, Request, Response } from 'express';
import { User } from '../models/index.js';  // Fixed import path
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library
import bcrypt from 'bcrypt';  // Import the bcrypt library for password hashing

// Login function to authenticate a user
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;  // Extract username and password from request body

  console.log('Request body:', req.body);

  // Find the user in the database by username
  const user = await User.findOne({
    where: { username },
  });

  console.log('User found:', user);

  // If user is not found, send an authentication failed response
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Compare the provided password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);

  console.log('Password is valid:', passwordIsValid);

  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET || '';

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username, userId: user.id }, secretKey, { expiresIn: '1h' });
  return res.json({ token });  // Send the token as a JSON response
};

// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log('Login request received:', { username, password });

  const user = await User.findOne({ where: { username } });
  console.log('User found:', user);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed: User not found' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  console.log('Password is valid:', passwordIsValid);

  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed: Invalid password' });
  }

  const secretKey = process.env.JWT_SECRET || '';
  const token = jwt.sign({ username, userId: user.id }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
});

// POST /register - Register a new user
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    const secretKey = process.env.JWT_SECRET || '';
    const token = jwt.sign({ username, userId: newUser.id }, secretKey, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (err) {
    // Ensure 'err' is treated as an Error object
    if (err instanceof Error) {
      res.status(400).json({ message: 'Failed to register user', error: err.message });
    } else {
      res.status(400).json({ message: 'Failed to register user', error: 'Unknown error occurred' });
    }
  }
});

export default router;  // Export the router instance
