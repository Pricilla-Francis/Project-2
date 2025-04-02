import express from 'express';
import type { Request, Response } from 'express';
import { Recipe } from '../../models/index.js';

// Extend Request type to include userId
interface AuthenticatedRequest extends Request {
  userId?: number;
}

const router = express.Router();

// GET /recipes - Get all recipes for the logged-in user
router.get('/', async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const recipes = await Recipe.findAll({
      where: { userId: req.userId },
      order: [['createdAt', 'DESC']]
    });
    return res.json(recipes);
  } catch (error: any) {
    console.error('Error fetching recipes:', error);
    return res.status(500).json({ message: 'Error fetching recipes' });
  }
});

// GET /recipes/:id - Get a single recipe by ID
router.get('/:id', async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const { id } = req.params;
    const recipe = await Recipe.findOne({
      where: { id, userId: req.userId }
    });
    if (recipe) {
      return res.json(recipe);
    } else {
      return res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error: any) {
    console.error('Error fetching recipe:', error);
    return res.status(500).json({ message: 'Error fetching recipe' });
  }
});

// POST /recipes - Create a new recipe
router.post('/', async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const recipeData = {
      ...req.body,
      userId: req.userId
    };

    const recipe = await Recipe.create(recipeData);
    return res.status(201).json(recipe);
  } catch (error: any) {
    console.error('Error creating recipe:', error);
    return res.status(500).json({ message: 'Error creating recipe' });
  }
});

// PUT /recipes/:id - Update a recipe
router.put('/:id', async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const { id } = req.params;
    const recipe = await Recipe.findOne({
      where: { id, userId: req.userId }
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    await recipe.update(req.body);
    return res.json(recipe);
  } catch (error: any) {
    console.error('Error updating recipe:', error);
    return res.status(500).json({ message: 'Error updating recipe' });
  }
});

// DELETE /recipes/:id - Delete a recipe
router.delete('/:id', async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const { id } = req.params;
    const recipe = await Recipe.findOne({
      where: { id, userId: req.userId }
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    await recipe.destroy();
    return res.status(204).send();
  } catch (error: any) {
    console.error('Error deleting recipe:', error);
    return res.status(500).json({ message: 'Error deleting recipe' });
  }
});

export default router; 