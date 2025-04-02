import type { Recipe } from '../interfaces/Recipe';

const API_BASE_URL = 'http://localhost:3001';

const getAuthToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('User not authenticated');
  }
  return token;
};

export const getRecipes = async (): Promise<Recipe[]> => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/recipes`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include'
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 401) {
        localStorage.removeItem('token');
        throw new Error('Session expired. Please log in again.');
      }
      throw new Error(errorData.message || 'Failed to fetch recipes');
    }

    return await response.json();
  } catch (err) {
    console.error('Error fetching recipes:', err);
    throw err;
  }
};

export const createRecipe = async (recipeData: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recipe> => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
      body: JSON.stringify(recipeData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 401) {
        localStorage.removeItem('token');
        throw new Error('Session expired. Please log in again.');
      }
      throw new Error(errorData.message || 'Failed to create recipe');
    }

    return await response.json();
  } catch (err) {
    console.error('Error creating recipe:', err);
    throw err;
  }
};

export const updateRecipe = async (id: number, recipeData: Partial<Recipe>): Promise<Recipe> => {
  try {
    const token = getAuthToken();
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_BASE_URL}/api/recipes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(recipeData)
    });

    if (!response.ok) {
      throw new Error('Failed to update recipe');
    }

    return await response.json();
  } catch (err) {
    console.log('Error from recipe update:', err);
    throw err;
  }
};

export const deleteRecipe = async (id: number): Promise<boolean> => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/recipes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include'
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 401) {
        localStorage.removeItem('token');
        throw new Error('Session expired. Please log in again.');
      }
      throw new Error(errorData.message || 'Failed to delete recipe');
    }

    return true;
  } catch (err) {
    console.error('Error deleting recipe:', err);
    throw err;
  }
};

export const getRecipe = async (id: number): Promise<Recipe> => {
  try {
    const token = getAuthToken();
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_BASE_URL}/api/recipes/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recipe');
    }

    return await response.json();
  } catch (err) {
    console.log('Error from recipe retrieval:', err);
    throw err;
  }
}; 