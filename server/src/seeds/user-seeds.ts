import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'Admin123', email: 'admin@gmail.com', password: 'password' },
    { username: 'len2356', email: 'len2356@gmail.com', password: 'password' },
  ], { individualHooks: true });
};
