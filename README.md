# 🎬 MovieFinder

**MovieFinder** is a modern, responsive web application built with **Next.js**, **React**, **TypeScript**, and **Redux Toolkit**. It allows users to search for movies, view detailed information, filter by release year, and rate them — all in a sleek UI with dark mode and smooth animations. It leverages the **OMDb API** for movie data.

---

## ✨ Features

- 🔍 **Movie Search** – Real-time search with debounced input  
- 📅 **Year Filter** – Quickly filter results by release year  
- 🎞️ **Movie Details** – View poster, title, year, rating, runtime, genre, director, writer, actors, plot, language, country, awards, and IMDb rating  
- ⭐ **Client-Side Ratings** – 5-star rating stored in `localStorage`  
- ⚛️ **Redux Toolkit** – Global state for search results, loading, and errors  
- 🌙 **Dark Mode** – Toggle and persist your theme  
- 🌀 **Framer Motion Animations** – Subtle transitions and hover effects  
- 📱 **Responsive UI** – Looks great on mobile, tablet, and desktop  
- ⚠️ **Loading & Error States** – Clean and informative UX  

---

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS  
- **UI Library**: shadcn/ui  
- **State Management**: Redux Toolkit  
- **Icons**: Lucide React  
- **Animations**: Framer Motion  
- **Theme Handling**: next-themes  
- **API**: OMDb API  
- **Layout**: react-resizable-panels  
- **Hooks**: Custom React Hooks  

---

## 🛠 Getting Started

### Prerequisites

- Node.js 18+  
- Package manager: `pnpm`, `npm`, or `yarn`  

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd movie-finder
2. Install Dependencies
Using pnpm (recommended):

bash
Copy
Edit
pnpm install
Or using npm:

bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env.local file in the project root and add your OMDb API key:

env
Copy
Edit
OMDB_API_KEY=your_omdb_api_key_here
Get your API key from https://www.omdbapi.com

4. Run the Development Server
bash
Copy
Edit
pnpm run dev
# or
npm run dev
Then open http://localhost:3000 in your browser to view the app.

🧭 Usage Guide
🔍 Navigate to /movies to search for movies

📅 Use the year dropdown to filter results

🎬 Click on a movie to view full details

⭐ Rate the movie with a 5-star system (stored in localStorage)

🌙 Toggle light/dark mode with the theme switch in the header

📁 Project Structure
perl
Copy
Edit
.
├── app/
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   ├── not-found.tsx            # 404 page
│   └── movies/
│       ├── page.tsx             # Movie search page
│       ├── loading.tsx          # Loading placeholder
│       └── [id]/
│           ├── page.tsx         # Movie detail page
│           └── MovieClientPage.tsx # Client component for details
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── header.tsx               # App header
│   ├── movie-card.tsx           # Movie card
│   ├── movie-details.tsx        # Movie info section
│   ├── movie-icon.tsx           # Movie app icon
│   ├── search-bar.tsx           # Input + filter
│   ├── star-rating.tsx          # Star rating logic
│   ├── loading-spinner.tsx      # Spinner
│   └── theme-toggle.tsx         # Dark/light toggle
├── features/
│   └── movies/
│       └── moviesSlice.ts       # Redux slice for movie state
├── hooks/
│   ├── use-debounce.ts          # Debounced input
│   ├── use-movie-rating.ts      # Star rating hook
│   └── use-movie-search.ts      # Search logic
├── lib/
│   ├── api.ts                   # OMDb API handler
│   ├── store.ts                 # Redux store setup
│   ├── hooks.ts                 # Typed Redux hooks
│   ├── providers.tsx            # Redux provider for Next
│   └── utils.ts                 # Helpers
├── public/                      # Static assets
├── styles/
│   └── globals.css              # Tailwind global styles
├── tailwind.config.ts           # Tailwind config
└── tsconfig.json                # TypeScript config
🔮 Future Enhancements
🔐 User Authentication – Login/signup functionality

📑 Watchlist – Save movies to favorites

✍️ User Reviews – Leave and view ratings/reviews

🎛️ Advanced Filtering – Genre, director, language, etc.

📄 Pagination – Handle large result sets efficiently

🧪 Testing – Unit and integration tests with Vitest or Jest
