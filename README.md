# 🔐 AuthApp Pro - Full-Stack Authentication System

A modern, secure, and beautifully designed full-stack authentication system built with **React**, **TypeScript**, **Node.js**, **Express**, and **Neon PostgreSQL**.

![AuthApp Pro](https://img.shields.io/badge/AuthApp-Pro-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎨 **Stunning UI/UX**
- **Modern Glassmorphism Design** with backdrop blur effects
- **Animated Gradient Backgrounds** with floating orbs
- **Professional Dashboard** with real-time stats and activity feed
- **Responsive Design** that works perfectly on all devices
- **Smooth Animations** and micro-interactions
- **Premium Visual Effects** with hover states and transitions

### 🔒 **Security First**
- **JWT Authentication** with secure token management
- **Password Hashing** using bcrypt (12 rounds)
- **Input Validation** with Zod schemas
- **Protected Routes** with automatic redirects
- **CORS Configuration** for secure API access
- **Environment Variables** for sensitive data protection

### 🚀 **Modern Tech Stack**
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS 3.3.2
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: Neon PostgreSQL (Serverless)
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod for runtime type checking
- **Icons**: Lucide React for beautiful icons
- **Styling**: Custom animations and glassmorphism effects

## 📁 Project Structure

```
AuthApp Pro/
├── 📁 Backend/                 # Node.js + Express API
│   ├── 📁 src/
│   │   ├── 📁 routes/          # API routes
│   │   ├── 📁 middleware/      # JWT authentication
│   │   ├── 📄 db.ts           # Neon database connection
│   │   └── 📄 index.ts        # Express server setup
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   └── 📄 .env               # Environment variables
├── 📁 frontend/               # React + TypeScript app
│   ├── 📁 src/
│   │   ├── 📁 components/     # Reusable components
│   │   ├── 📁 pages/         # Login, Register, Dashboard
│   │   ├── 📁 context/       # React Context for auth state
│   │   ├── 📁 services/      # API service layer
│   │   └── 📁 types/         # TypeScript interfaces
│   ├── 📄 package.json
│   ├── 📄 tailwind.config.js
│   └── 📄 .env               # Frontend environment variables
└── 📄 README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Neon Account** (for PostgreSQL database)

### 1. Clone the Repository

```bash
git clone https://github.com/alidiamond1/AuthApp-Pro.git
cd AuthApp-Pro
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Configure your `.env` file:**
```env
# Your actual Neon database connection string
DATABASE_URL='postgresql://username:password@hostname/dbname?sslmode=require&channel_binding=require'

# Generate a strong JWT secret (use a random string generator)
JWT_SECRET=your-super-secret-jwt-key-here

# Server configuration
PORT=4000
NODE_ENV=development
```

**Start the backend server:**
```bash
npm run dev
```

The backend will be available at: `http://localhost:4000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Configure your frontend `.env` file:**
```env
VITE_API_URL=http://localhost:4000
VITE_APP_NAME=AuthApp Pro
VITE_APP_VERSION=1.0.0
```

**Start the frontend development server:**
```bash
npm run dev
```

The frontend will be available at: `http://localhost:5173` or `http://localhost:5174`

## 📊 Database Schema

The application uses a simple but effective user schema:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## 🔌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/register` | Register new user | ❌ |
| `POST` | `/api/auth/login` | User login | ❌ |
| `GET` | `/api/auth/me` | Get current user | ✅ |
| `GET` | `/health` | Health check | ❌ |

### Request/Response Examples

**Register User:**
```json
POST /api/auth/register
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Login User:**
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "securepassword123"
}

Response:
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

## 🎨 UI Components

### Pages
- **Login Page**: Beautiful form with validation and loading states
- **Register Page**: Multi-step registration with password confirmation
- **Dashboard**: Premium dashboard with stats, profile, and activity feed

### Features
- **Real-time Clock**: Live time display in navigation
- **Activity Feed**: Recent user actions and system events
- **Profile Management**: User information display with edit capabilities
- **Responsive Design**: Mobile-first approach with breakpoints

## 🛠️ Development

### Backend Development

```bash
# Install dependencies
cd Backend && npm install

# Run in development mode (with auto-restart)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Frontend Development

```bash
# Install dependencies
cd frontend && npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://...    # Neon database connection
JWT_SECRET=your-secret-key       # JWT signing secret
PORT=4000                        # Server port
NODE_ENV=development             # Environment
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:4000    # Backend API URL
VITE_APP_NAME=AuthApp Pro             # App name
VITE_APP_VERSION=1.0.0                # App version
```

## 🚀 Deployment

### Backend Deployment (Recommended: Railway, Render, or Vercel)

1. **Set environment variables** in your hosting platform
2. **Build the application**: `npm run build`
3. **Start command**: `npm start`

### Frontend Deployment (Recommended: Vercel, Netlify)

1. **Build the application**: `npm run build`
2. **Deploy the `dist` folder**
3. **Set environment variables** for production API URL

### Database (Neon)

1. Create a **Neon project** at [neon.tech](https://neon.tech)
2. **Copy the connection string**
3. **Run the database initialization** (tables are created automatically)

## 🎨 Customization

### Themes and Colors

The app uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    900: '#0c4a6e',
  },
}
```

### Custom Animations

Beautiful animations are defined in `src/index.css`:
- **Float animations** for visual elements
- **Glow effects** for buttons and cards
- **Slide animations** for page transitions
- **Shimmer effects** for loading states

## 📱 Screenshots

### Login Page
- Modern glassmorphism design
- Animated background elements
- Form validation with error states
- Password visibility toggle

### Dashboard
- Real-time statistics and metrics
- Interactive activity feed
- Beautiful profile information display
- Live clock and premium branding

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Neon** for providing excellent serverless PostgreSQL
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide React** for beautiful icons
- **React Team** for the amazing framework
- **TypeScript** for type safety

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: support@authapp-pro.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/authapp-pro/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/your-username/authapp-pro/discussions)

---

## 🚀 **Made with ❤️ and cutting-edge technology**

**AuthApp Pro** - *The future of authentication systems*

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/your-username/authapp-pro)
[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/your-username/authapp-pro)
