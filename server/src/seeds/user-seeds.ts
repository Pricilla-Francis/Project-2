import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'Admin123', email: 'admin@gmail.com', password: 'password' },
    { username: 'daball', email: 'daball@gmail.com', password: 'password' },
  ], { individualHooks: true });
};
