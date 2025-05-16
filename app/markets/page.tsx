"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import axios from "axios";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  sparkline_in_7d?: { price: number[] };
}

const MarketsPage = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [allCoins, setAllCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  // Fetch all coins for global search
  useEffect(() => {
    const fetchAllCoins = async () => {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true`
      );
      setAllCoins(res.data);
    };
    fetchAllCoins();
  }, []);

  // Fetch paginated coins for normal view
  useEffect(() => {
    if (search) return; // Don't fetch paginated coins if searching
    const fetchCoins = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=true`
      );
      setCoins(res.data);
      setLoading(false);
      setTotalPages(13);
    };
    fetchCoins();
  }, [page, search]);

  // Filter coins by search query (name or symbol)
  const filteredCoins = search
    ? allCoins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
      )
    : coins;

  return (
    <div className="overflow-x-auto w-full mx-auto mt-20">
      <Container>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-center flex-1">
            All Crypto Markets
          </h2>
        </div>
        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search coin name or symbol..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f98c1]"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
          </div>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Coin</th>
              <th className="py-2 px-4 text-left">Symbol</th>
              <th className="py-2 px-4 text-right">Price (USD)</th>
              <th className="py-2 px-4 text-right">24h Change</th>
              <th className="py-2 px-4 text-center">7d Chart</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-10">
                  Loading...
                </td>
              </tr>
            ) : (
              filteredCoins.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4 flex items-center gap-2">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={10}
                      height={10}
                      className="w-6 h-6"
                    />
                    <span>{coin.name}</span>
                  </td>
                  <td className="py-2 px-4 uppercase">{coin.symbol}</td>
                  <td className="py-2 px-4 text-right font-mono">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  <td
                    className={`py-2 px-4 text-right font-mono ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className="py-2 px-4 text-center align-middle ">
                    {/* Simple sparkline using inline SVG */}
                    {coin.sparkline_in_7d && (
                      <svg
                        width="80"
                        height="24"
                        viewBox="0 0 80 24"
                        className="mx-auto"
                      >
                        <polyline
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          points={coin.sparkline_in_7d.price
                            .map((p, i, arr) => {
                              const x = (i / (arr.length - 1)) * 80;
                              // Normalize y to fit SVG height
                              const min = Math.min(...arr);
                              const max = Math.max(...arr);
                              const y =
                                24 - ((p - min) / (max - min || 1)) * 20 - 2;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                        />
                      </svg>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {/* Pagination Controls (hide if searching or loading) */}
        {!search && !loading && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              className="px-3 py-1 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`px-3 py-1 rounded border font-semibold text-sm transition-colors duration-150
                  ${
                    p === page
                      ? "bg-[#0f98c1] text-white border-[#0f98c1]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MarketsPage;
