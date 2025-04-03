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

    // Verify the token
    const decoded = verify(token, process.env.JWT_SECRET || '') as JwtPayload;
    req.userId = decoded.userId;
    return next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
