# MovieFinder

MovieFinder is a modern, responsive web application built with Next.js and TypeScript. It provides a seamless experience for users to search for movies, view detailed information, rate them, and filter results by release year. The application features a clean user interface, dark mode support, and subtle animations to enhance user interaction.

## ✨ Features

This application comes packed with a variety of features designed to provide a rich movie browsing experience:

*   **Comprehensive Movie Search**:
    *   A prominent search bar on the main `/movies` page allows users to search for movies by title.
    *   API calls are debounced to ensure efficient use of the OMDB API, preventing unnecessary requests as the user types.
    *   Clear loading indicators and error messages are displayed during API interactions.
*   **Year Filtering**:
    *   An intuitive dropdown filter allows users to narrow down search results by a specific release year.
    *   This filter is applied client-side to ensure precise results, even if the API returns broader matches.
*   **Detailed Movie Information Pages**:
    *   Each movie card is clickable, navigating users to a dedicated details page (`/movies/:id`).
    *   These pages display extensive information about the selected movie, including:
        *   High-resolution Poster
        *   Full Title, Release Year, MPAA Rating, Runtime
        *   Genre, Director, Writer, Main Actors
        *   Detailed Plot Summary
        *   Language, Country of Origin, Awards received
        *   IMDb Rating
*   **Client-Side Star Rating System**:
    *   On each movie's details page, users can rate the movie using an interactive 5-star system.
    *   User ratings are stored locally in the browser's `localStorage`, persisting across sessions.
*   **Dark Mode Support**:
    *   A convenient toggle in the application header allows users to switch between light and dark themes.
    *   The selected theme preference is automatically saved and applied on subsequent visits.
*   **Responsive Design**:
    *   The entire application is built with a mobile-first approach, ensuring a consistent and optimal viewing experience across all device sizes, from smartphones to large desktop monitors.
*   **Framer Motion Animations**:
    *   Subtle and smooth page transitions enhance the navigation experience between different routes.
    *   Interactive hover effects on movie cards provide visual feedback and make browsing more engaging.

## 🛠️ Tech Stack

MovieFinder is built using a robust and modern technology stack:

*   **Framework**: **Next.js** (with the **App Router**)
    *   A powerful React framework for building full-stack web applications, leveraging server-side rendering (SSR) and static site generation (SSG) for performance and SEO.
*   **Language**: **TypeScript**
    *   Provides static type checking, enhancing code quality, readability, and maintainability, especially in larger projects.
*   **Styling**: **Tailwind CSS**
    *   A utility-first CSS framework that enables rapid UI development with highly customizable and responsive designs directly in JSX.
*   **UI Components**: **shadcn/ui**
    *   A collection of beautifully designed, accessible, and customizable UI components built on top of Radix UI and Tailwind CSS, providing a consistent and polished look.
*   **Data Fetching & State Management**: **Custom React Hooks**
    *   Efficiently manages component-specific state, handles API fetching logic, and interacts with local storage for features like movie ratings.
*   **Animations**: **Framer Motion**
    *   A production-ready motion library for React, used to create fluid and engaging animations for UI elements and page transitions.
*   **Icons**: **Lucide React**
    *   A comprehensive and customizable icon library, providing a wide range of vector icons for the application's interface.
*   **Movie Data API**: **OMDB API (Open Movie Database API)**
    *   A free web service to obtain movie information, used for fetching both search results and detailed movie data.

## 🚀 Getting Started

Follow these instructions to set up and run the MovieFinder application on your local development environment.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js**: Version 18.x or higher.
*   **npm** (Node Package Manager): Comes bundled with Node.js. Alternatively, you can use `yarn` or `pnpm`.

### 1. Clone the Repository

First, clone the MovieFinder repository to your local machine:

```bash
git clone https://github.com/your-username/moviefinder.git # Replace with your actual repository URL
cd moviefinder
```

### 2. Install Dependencies

Navigate into the project directory and install all the required Node.js dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Obtain and Configure OMDB API Key

MovieFinder relies on the OMDB API to fetch movie data. You'll need to get your own API key:

1.  Visit the [OMDB API website](http://www.omdbapi.com/apikey.aspx).
2.  Sign up for a free API key.
3.  Once you have your key, open the file `lib/api.ts` in your project.
4.  Locate the `API_KEY` constant and replace `"YOUR_OMDB_API_KEY_HERE"` with your actual key:

    ```typescript
    // lib/api.ts
    const API_KEY = "YOUR_OMDB_API_KEY_HERE"; // <-- Replace this with your key (e.g., "ced1c040")
    const BASE_URL = "https://www.omdbapi.com";
    ```

    **Important Note**: For production deployments, it is highly recommended to use environment variables (e.g., `NEXT_PUBLIC_OMDB_API_KEY`) to store sensitive API keys and to proxy API requests through a Next.js API route to prevent exposing your key directly in client-side code. For this project, the key is hardcoded for simplicity in local development.

### 4. Run the Development Server

After configuring your API key, you can start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will typically start on `http://localhost:3000`. Open this URL in your web browser to access MovieFinder.

## 💡 Usage Guide

*   **Searching for Movies**:
    *   Navigate to the `/movies` page.
    *   Type the title of a movie into the search bar. Results will dynamically appear below as you type.
*   **Filtering by Year**:
    *   Next to the search bar, use the "Year" dropdown to select a specific release year. The movie list will automatically update to show only movies from that year.
*   **Viewing Movie Details**:
    *   Click on any movie card from the search results to go to its dedicated details page. Here you'll find comprehensive information about the movie.
*   **Rating Movies**:
    *   On the movie details page, click on the stars to assign a rating to the movie. Your rating will be saved locally in your browser.
*   **Toggling Dark Mode**:
    *   Click the sun/moon icon in the application header to switch between the light and dark themes.

## 📂 Project Structure

The project is organized into a logical and maintainable structure:

```
moviefinder/
├── app/
│   ├── layout.tsx             # Root layout for the entire application, including ThemeProvider.
│   ├── page.tsx               # Redirects users from the root URL to the /movies page.
│   ├── movies/
│   │   ├── page.tsx           # Main movie list and search interface.
│   │   ├── loading.tsx        # Loading UI for the movie list page.
│   │   └── [id]/              # Dynamic route for individual movie details.
│   │       ├── page.tsx       # Server Component wrapper for movie details.
│   │       └── MovieClientPage.tsx # Client Component for movie details with Framer Motion.
├── components/
│   ├── header.tsx             # Application header with navigation and theme toggle.
│   ├── movie-card.tsx         # Reusable component to display a movie's summary (poster, title, year).
│   ├── movie-details.tsx      # Component to render comprehensive movie information.
│   ├── search-bar.tsx         # Input field for movie search queries.
│   ├── star-rating.tsx        # Interactive 5-star rating component.
│   ├── loading-spinner.tsx    # Generic loading spinner component.
│   ├── theme-toggle.tsx       # Button component for switching between light/dark themes.
│   ├── theme-provider.tsx     # Context provider for managing application themes.
│   └── ui/                    # Directory containing shadcn/ui components (e.g., Button, Card, Input, Select).
├── hooks/
│   ├── use-movie-search.ts    # Custom hook to manage movie search state and API calls.
│   ├── use-debounce.ts        # Custom hook to debounce input values, used for search.
│   └── use-movie-rating.ts    # Custom hook to manage movie ratings stored in localStorage.
├── lib/
│   ├── api.ts                 # Contains functions for interacting with the OMDB API.
│   └── utils.ts               # Utility functions, including `cn` for conditional Tailwind classes.
├── public/                    # Static assets like images and favicons.
│   └── placeholder.svg        # Placeholder image for movie posters.
├── app/globals.css            # Global CSS styles, including Tailwind CSS base styles.
├── next.config.mjs            # Next.js configuration file.
├── package.json               # Project dependencies and scripts.
├── tsconfig.json              # TypeScript configuration.
└── tailwind.config.ts         # Tailwind CSS configuration file.
```

## 🔮 Future Enhancements

The MovieFinder application can be further extended with the following features:

*   **Genre Filter**: Implement additional filter options for movie genres.
*   **Pagination**: Add pagination controls to handle and display a large number of search results more effectively.
*   **User Authentication**: Introduce user accounts to enable personalized features like watchlists, favorite movies, and user reviews.
*   **Advanced Search Options**: Expand search capabilities to include filtering by director, actors, or other specific criteria.
*   **Movie Trailers**: Integrate with a video API (e.g., YouTube Data API) to display movie trailers on the details pages.
*   **Accessibility Improvements**: Continuously enhance accessibility features to ensure the application is usable by everyone.
*   **Testing Suite**: Implement comprehensive unit, integration, and end-to-end tests to ensure reliability and prevent regressions.


```
