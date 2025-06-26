# Movie Search App

This is a simple movie search application built with Next.js and the OMDb API.

## Features

*   Search for movies by title.
*   View movie details.

## Technologies Used

*   Next.js
*   React
*   OMDb API

## Environment Variables

To run this application, you will need to set the following environment variables:

*   OMDB_API_KEY – Your OMDb API key (add it in the Vercel Dashboard).

## Setup

1.  Clone the repository:

    \`\`\`bash
    git clone <repository_url>
    \`\`\`

2.  Install dependencies:

    \`\`\`bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    \`\`\`

3.  Set up your environment variables. You can do this by creating a `.env.local` file in the root of your project:

    \`\`\`bash
    # Example - DO NOT INCLUDE THIS IN YOUR ACTUAL .env.local FILE
    # OMDB_API_KEY=your_omdb_api_key
    \`\`\`

    Alternatively, if you are deploying to Vercel, you can set the environment variables in the Vercel dashboard.

4.  Run the development server:

    \`\`\`bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    \`\`\`

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application can be deployed to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<repository_url>)

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
