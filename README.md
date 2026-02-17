# Vibe Dashboard

A modern, professional SaaS dashboard built with Next.js, Tailwind CSS, and Express.js featuring glassmorphism design and intelligent search functionality.

## 📋 Project Overview

Vibe Dashboard is a full-stack web application that displays a catalog of items with real-time search capabilities. The project demonstrates modern web development practices with a clean, responsive UI and a RESTful API backend.

## 🏗️ Architecture

The application follows a client-server architecture:

- **Frontend**: Next.js 16 with App Router, running as a React-based SPA
- **Backend**: Express.js REST API serving JSON data
- **Communication**: Axios for HTTP requests with error handling
- **State Management**: React hooks (useState, useEffect, useCallback)
- **Styling**: Tailwind CSS 4 with custom design tokens

```
┌─────────────────┐         HTTP/REST        ┌─────────────────┐
│                 │ ◄────────────────────────►│                 │
│  Next.js Client │    GET /api/items?q=     │  Express Server │
│                 │                           │                 │
└─────────────────┘                           └─────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Geist Font** - Modern typography

### Backend
- **Express.js** - Minimal Node.js web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-reload

## 🚀 How to Run Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (or use the existing one):
```env
PORT=5000
```

4. Start the development server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Backend Scripts
- `npm run dev` - Start with nodemon (auto-reload)
- `npm start` - Start production server

## 🎨 How to Run Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (or use the existing one):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📸 Screenshots

> Add your screenshots here

## 📁 Folder Structure

```
vibe-dashboard/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── itemController.js    # Business logic for items
│   │   ├── data/
│   │   │   └── items.js             # Mock data
│   │   ├── middlewares/
│   │   │   └── errorHandler.js      # Error handling middleware
│   │   ├── routes/
│   │   │   └── itemRoutes.js        # API route definitions
│   │   └── index.js                 # Express server entry point
│   ├── .env                         # Environment variables
│   ├── .env.example                 # Environment template
│   ├── .gitignore                   # Git ignore rules
│   ├── package.json                 # Dependencies and scripts
│   └── package-lock.json
│
├── frontend/
│   ├── app/
│   │   ├── layout.tsx               # Root layout component
│   │   ├── page.tsx                 # Main dashboard page
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── Card.tsx                 # Reusable card component
│   │   ├── Container.tsx            # Layout container
│   │   ├── EmptyState.tsx           # No results state
│   │   ├── ErrorMessage.tsx         # Error display component
│   │   ├── ItemCard.tsx             # Product card component
│   │   ├── LoadingSpinner.tsx       # Loading indicator
│   │   └── SearchBar.tsx            # Search input component
│   ├── hooks/
│   │   └── useDebounce.ts           # Debounce hook for search
│   ├── services/
│   │   ├── api.ts                   # Axios instance configuration
│   │   ├── itemService.ts           # Item API functions
│   │   └── index.ts                 # Service exports
│   ├── types/
│   │   └── item.ts                  # TypeScript type definitions
│   ├── .env.local                   # Local environment variables
│   ├── .env.example                 # Environment template
│   ├── .gitignore                   # Git ignore rules
│   ├── next.config.ts               # Next.js configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tailwind.config.ts           # Tailwind CSS configuration
│   ├── postcss.config.mjs           # PostCSS configuration
│   ├── package.json                 # Dependencies and scripts
│   └── package-lock.json
│
├── .gitignore                       # Root git ignore
└── README.md                        # Project documentation
```

---

Built with Next.js, Tailwind CSS & Express.js
See `frontend/ERROR_HANDLING.md` for details.

## 🧪 Testing

### Test Network Error
1. Stop backend server
2. Refresh frontend
3. Should show "Connection Failed"

### Test Search
1. Search for "electronics"
2. Should filter items by category

### Test Empty State
1. Search for "xyz123"
2. Should show "No items found" with tips

## 📝 Scripts

### Backend
```bash
npm run dev    # Start with nodemon
npm start      # Start production
```

### Frontend
```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Start production
npm run lint   # Run ESLint
```

## 🎯 Key Features

### Search
- Debounced input (300ms)
- Filters by name or category
- Case-insensitive
- Clear button

### Item Cards
- Glassmorphism design
- Hover effects (lift + shadow)
- Category badges
- Price display
- Action buttons

### States
- Loading: Animated spinner
- Error: Type-specific messages
- Empty: Helpful search tips
- Success: Staggered grid animation


## 📚 Documentation

- `frontend/DESIGN_SYSTEM.md` - Complete design guidelines
- `frontend/ERROR_HANDLING.md` - Error handling documentation
- `backend/src/` - Inline code comments

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Acknowledgments

- Design inspiration: Linear, Vercel, Stripe
- Icons: Heroicons
- Fonts: Inter (Google Fonts)
- Framework: Next.js, Express.js

---

Built with ❤️ using Next.js, Tailwind CSS & Express
