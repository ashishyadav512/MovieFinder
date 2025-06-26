# MovieFinder

MovieFinder is a modern web application built with Next.js, React, and **Redux Toolkit** that allows users to search for movies, view detailed information, and manage their movie preferences. It leverages the OMDb API for movie data.

## Features

*   **Movie Search**: Quickly find movies by title.
*   **Detailed Movie View**: Click on any movie to see its poster, plot, cast, ratings, and more.
*   **Global State Management with Redux Toolkit**: Utilizes Redux Toolkit for efficient, predictable, and scalable state management across the application, handling movie search results, loading states, and errors.
*   **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.
*   **Dark Mode**: Toggle between light and dark themes for a personalized viewing experience.

## Tech Stack

*   **Framework**: Next.js (App Router)
*   **UI Library**: React
*   **Styling**: Tailwind CSS
*   **Components**: shadcn/ui
*   **State Management**: Redux Toolkit
*   **API**: OMDb API
*   **Other Notable Libraries**: `next-themes` for theme management, `react-resizable-panels` for UI layout.

## Setup Instructions

Follow these steps to get the MovieFinder project up and running on your local machine.

### 1. Clone the Repository

\`\`\`bash
git clone <your-repository-url>
cd movie-finder
\`\`\`

### 2. Install Dependencies

Using pnpm (recommended):

\`\`\`bash
pnpm install
\`\`\`

Or using npm:

\`\`\`bash
npm install
\`\`\`

### 3. Environment Variables

Create a `.env.local` file in the root of your project and add your OMDb API key:

\`\`\`
OMDB_API_KEY=your_omdb_api_key_here
\`\`\`

You can obtain a free API key from [OMDb API](http://www.omdbapi.com/).

### 4. Run the Development Server

\`\`\`bash
pnpm run dev
# or
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1.  **Navigate to the Home Page**: The application will automatically redirect you to the `/movies` page.
2.  **Search for Movies**: Use the search bar at the top of the `/movies` page to find movies by title.
3.  **Filter by Year**: Refine your search results by selecting a release year from the dropdown.
4.  **View Movie Details**: Click on any movie card to see its detailed information on a dedicated page.
5.  **Toggle Theme**: Use the moon/sun icon in the header to switch between light and dark modes.

## Project Structure

\`\`\`
.
├── app/
│   ├── layout.tsx             # Root layout for the application
│   ├── page.tsx               # Home page (landing page)
│   ├── movies/
│   │   ├── page.tsx           # Movie listing and search page
│   │   ├── loading.tsx        # Loading state for movie list
│   │   └── [id]/
│   │       ├── page.tsx       # Movie detail page
│   │       └── MovieClientPage.tsx # Client component for movie details
│   └── not-found.tsx          # Custom 404 page
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── header.tsx             # Application header
│   ├── movie-card.tsx         # Component for displaying individual movie cards
│   ├── movie-details.tsx      # Component for displaying movie details
│   ├── movie-icon.tsx         # SVG icon for the movie app
│   ├── search-bar.tsx         # Search input and year filter
│   ├── star-rating.tsx        # Star rating display
│   ├── loading-spinner.tsx    # Loading spinner component
│   └── theme-toggle.tsx       # Theme toggle button
├── features/
│   └── movies/
│       └── moviesSlice.ts     # Redux slice for movie-related state
├── hooks/
│   ├── use-debounce.ts        # Custom hook for debouncing values
│   ├── use-movie-rating.ts    # Custom hook for movie rating logic
│   └── use-movie-search.ts    # Custom hook for movie search logic
├── lib/
│   ├── api.ts                 # API utility for OMDb calls
│   ├── store.ts               # Redux store configuration
│   ├── hooks.ts               # Typed Redux hooks (useAppDispatch, useAppSelector)
│   ├── providers.tsx          # Redux store provider for Next.js
│   └── utils.ts               # General utility functions
├── public/                    # Static assets (images, icons)
├── styles/
│   └── globals.css            # Global Tailwind CSS styles
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
\`\`\`

## Future Enhancements

*   **User Authentication**: Implement user login/signup.
*   **Watchlist Feature**: Allow users to save movies to a personal watchlist.
*   **User Reviews**: Enable users to write and view movie reviews.
*   **Advanced Filtering**: Add more filtering options (genre, director, etc.).
*   **Pagination**: Implement pagination for search results.
