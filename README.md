# 🎬 MovieFinder

**MovieFinder** is a modern, responsive web application built with **Next.js** and **TypeScript** that allows users to search, filter, and rate movies. With a sleek UI, dark mode support, and smooth animations, it offers an engaging experience powered by the **OMDB API**.

---

## ✨ Features

- 🔍 **Movie Search** with debounced input
- 📅 **Year Filter** via dropdown
- 🎥 **Movie Details**: poster, rating, cast, plot & more
- ⭐ **5-Star Rating System** (stored in `localStorage`)
- 🌙 **Dark Mode Support**
- 📱 **Responsive Design**
- 🌀 **Framer Motion Animations**
- ⚠️ **Loading & Error States**

---

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data**: OMDB API
- **Hooks**: Custom React Hooks

---

## 🛠 Getting Started

### Prerequisites

- Node.js `18.x+`
- npm / yarn / pnpm

### 1. Clone the Repository

```bash
git clone <repository-url>
cd moviefinder
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
# or
pnpm install
3. Get an OMDB API Key
Visit omdbapi.com/apikey.aspx

Sign up and get a free key

Add it in lib/api.ts:

ts
Copy
Edit
const API_KEY = "YOUR_OMDB_API_KEY_HERE";
💡 For production, use environment variables instead of hardcoding.

4. Run the Dev Server
bash
Copy
Edit
npm run dev
Then visit http://localhost:3000 to explore.

💡 Usage
Search movies on the /movies page

Filter by release year

Click a movie to view details

Rate with stars (saved locally)

Toggle between light/dark mode

📁 Project Structure
graphql
Copy
Edit
moviefinder/
├── app/                    # App Router structure
│   └── movies/             # List and detail pages
├── components/             # UI components
├── hooks/                  # Custom hooks
├── lib/                    # API logic and utilities
├── types/                  # TypeScript interfaces
├── public/                 # Static assets
├── styles/                 # Tailwind config and globals
🔮 Future Enhancements
🎭 Genre filter

📄 Pagination

👤 User accounts & auth

🔍 Advanced search

📺 Movie trailers

♿ Accessibility improvements

🧪 Testing suite

📄 License
This project is open-source and available under the MIT License.

vbnet
Copy
Edit

Let me know if you'd like a version with badges, screenshots, or deployment instructions!
