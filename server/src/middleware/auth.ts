import { Request, Response, NextFunction } from 'express';
import pkg from 'jsonwebtoken';
const { verify } = pkg;


// Define the interface for the JWT payload
interface JwtPayload {
  username: string;
  userId: number;
}

// Extend Request type to include userId
interface AuthenticatedRequest extends Request {
  userId?: number;
}

// Middleware function to authenticate JWT token
export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    // Get the authorization header from the request
    const authHeader = req.headers.authorization;

    // Check if the authorization header is present
    if (!authHeader) {
      return res.status(401).json({ message: 'No authorization header' });
    }

    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Get the secret key from the environment variables

    const secretKey = process.env.JWT_SECRET || 'your-secret-key';
    
    // Verify the JWT token
    const decoded = verify(token, secretKey) as JwtPayload;
    
    // Attach the user ID to the request object
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
