# 1xchange

A modern, responsive cryptocurrency exchange dashboard built with Next.js, React, and Tailwind CSS.

## Features

- **Real-time Crypto Market Table**: Live prices, 24h change, and 7-day sparkline charts for top cryptocurrencies (via CoinGecko API).
- **Market Pagination**: View all coins with pagination (20 per page) and global search.
- **Gainers/Losers/All Filter**: Easily filter coins by 24h performance.
- **Crypto News**: Latest cryptocurrency news headlines and images (via NewsAPI.org).
- **News Pagination**: See more news on a dedicated `/news` page.
- **Responsive UI**: Mobile-first, beautiful design with Tailwind CSS.
- **Framer Motion Animations**: Smooth fade-in and interactive effects.

## APIs Used

- [CoinGecko API](https://www.coingecko.com/en/api): For real-time crypto prices and charts (no API key required).
- [NewsAPI.org](https://newsapi.org/): For latest crypto news (API key required).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/1xchange.git
cd 1xchange
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your NewsAPI key:

```
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key_here
```

- Get a free API key from [newsapi.org](https://newsapi.org/).

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `components/hero/crypto-market.tsx` — Crypto market table, filters, pagination, and search
- `components/hero/crypto-news.tsx` — Latest crypto news (4 headlines, see more button)
- `app/markets/page.tsx` — Full market page with pagination and global search
- `app/news/page.tsx` — (To be implemented) Full news page with pagination
- `components/ui/container.tsx` — Responsive container wrapper

## Customization

- Update the color scheme in Tailwind config or component classes.
- Add more features (e.g., user authentication, trading, etc.) as needed.

## License

MIT
