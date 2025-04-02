import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const forceDatabaseRefresh = process.env.NODE_ENV === 'development';

import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import { seedUsers } from './seeds/user-seeds.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://127.0.0.1:3000',
    'https://munchmap.onrender.com',
    'https://project-2.onrender.com'  // Add your Render deployment URL
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json());

// API Routes
app.use('/api', routes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler for API routes
app.use('/api/*', (req: Request, res: Response) => {
  res.status(404).json({ message: 'API route not found' });
});

// Serves static files in the entire client's dist folder
const clientDistPath = process.env.NODE_ENV === 'production' 
  ? join(__dirname, '../client/dist')
  : join(__dirname, '../../client/dist');

app.use(express.static(clientDistPath));

// Catch-all route to handle client-side routing
app.get('*', (_req, res) => {
  res.sendFile(join(clientDistPath, 'index.html'));
});

sequelize.sync({force: forceDatabaseRefresh}).then(async () => {
  if (forceDatabaseRefresh) {
    await seedUsers();
    console.log('\n----- DATABASE SEEDED -----\n');
  }
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
