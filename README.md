# Vibe Dashboard

A modern, professional SaaS dashboard built with Next.js, Tailwind CSS, and Express. Features top 1% UI design quality with glassmorphism, refined typography, and intelligent error handling.

## 🎨 Design Philosophy

This project follows design principles from industry leaders like Linear, Vercel, and Stripe:
- **Controlled color use**: Slate for 95%, accent colors for 5%
- **Precise typography**: Custom font weights (450, 500, 600, 650)
- **Subtle effects**: Light glassmorphism, soft shadows (4-6% opacity)
- **Professional spacing**: 8px rhythm throughout
- **Fast transitions**: 200ms for snappy interactions

## 🚀 Features

### Frontend
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Axios** for API calls
- **Debounced search** (300ms)
- **Responsive design** (mobile-first)
- **Glassmorphism UI** (light, refined)
- **Error handling** (network, search, server errors)
- **Loading states** with animations
- **Empty states** with helpful tips

### Backend
- **Express.js** REST API
- **CORS** enabled
- **Environment variables** via dotenv
- **Clean architecture** (routes, controllers, data)
- **Search functionality** (name and category)
- **Error handling** middleware

## 📁 Project Structure

```
the_vibe_dashboard/
├── backend/
│   └── src/
│       ├── controllers/      # Business logic
│       ├── routes/           # API routes
│       ├── data/             # Mock data
│       ├── middlewares/      # Error handling
│       └── index.js          # Server entry
│
└── frontend/
    ├── app/
    │   ├── page.tsx          # Main dashboard
    │   ├── layout.tsx        # Root layout
    │   ├── globals.css       # Global styles
    │   └── design-system.css # Design tokens
    ├── components/
    │   ├── SearchBar.tsx     # Search input
    │   ├── ItemCard.tsx      # Product card
    │   ├── LoadingSpinner.tsx
    │   ├── ErrorMessage.tsx
    │   └── EmptyState.tsx
    ├── services/
    │   ├── api.ts            # Axios instance
    │   └── itemService.ts    # API functions
    └── types/
        └── item.ts           # TypeScript types
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs on `http://localhost:3000`

## 🎯 Environment Variables

### Backend
```env
PORT=5000
```

### Frontend
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 📖 API Endpoints

### GET /api/items
Fetch all items or search by query

**Query Parameters:**
- `q` (optional): Search term for name or category

**Response:**
```json
{
  "success": true,
  "count": 15,
  "query": "electronics",
  "data": [...]
}
```

## 🎨 Design System

### Color Palette
- **Primary**: slate-900 (text)
- **Secondary**: slate-600 (descriptions)
- **Accent**: violet-500 (focus states, 5% max)
- **Background**: #fafbfc (cool off-white)

### Typography Scale
- **Display**: 42-62px, font-[650], tracking-tight
- **Heading**: 18-32px, font-[600]
- **Body**: 13-16px, font-[450]
- **Label**: 12-14px, font-[500]

### Spacing (8px base)
- xs: 4px, sm: 8px, md: 12px, lg: 16px
- xl: 20px, 2xl: 24px, 3xl: 32px, 4xl: 40px

### Shadows
- Subtle: `0 1px 2px rgba(0,0,0,0.04)`
- Soft: `0 4px 16px rgba(0,0,0,0.04)`
- Medium: `0 8px 32px rgba(0,0,0,0.04)`

See `frontend/DESIGN_SYSTEM.md` for complete guidelines.

## 🔧 Error Handling

The app handles three error types:

1. **Network Error**: Backend unreachable
   - Shows troubleshooting steps
   - "Retry Connection" button

2. **Search Error**: 404 Not Found
   - Clear error message
   - "Try Again" button

3. **Server Error**: 500+ status
   - Generic error message
   - "Try Again" button

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

## 🚀 Deployment

### Backend
Deploy to any Node.js hosting:
- Heroku
- Railway
- Render
- DigitalOcean

### Frontend
Deploy to Vercel (recommended):
```bash
vercel deploy
```

Or other platforms:
- Netlify
- Cloudflare Pages
- AWS Amplify

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
