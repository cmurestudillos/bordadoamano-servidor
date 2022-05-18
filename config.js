import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://cmur85:CME022es!!@tienda-online.jylm6.mongodb.net/shop?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'palabrasupersecreta',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
