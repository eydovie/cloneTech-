# Coinbase Clone - Backend API

Node.js + Express + MongoDB backend for the Coinbase Clone assignment.

## Setup

```bash
npm install
cp .env.example .env
# Fill in your MongoDB URI and JWT secret
npm run dev
```

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET/POST | `/register` | No | Register new user |
| GET/POST | `/login` | No | Login user |
| POST | `/logout` | No | Logout user |
| GET | `/profile` | Yes (JWT) | Get user profile |
| GET | `/crypto` | No | Get all cryptocurrencies |
| GET | `/crypto/gainers` | No | Get top gainers |
| GET | `/crypto/new` | No | Get newest listings |
| POST | `/crypto` | No | Add new cryptocurrency |

## Deployment on Render

1. Push this folder to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your repo
4. Set environment variables:
   - `MONGODB_URI` = your MongoDB Atlas connection string
   - `JWT_SECRET` = a long random string
   - `FRONTEND_URL` = your Netlify frontend URL
   - `NODE_ENV` = production
5. Build command: `npm install`
6. Start command: `npm start`
