"use client";

import React, { useEffect, useState } from "react";
import Container from "../ui/container";
import Link from "next/link";
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

const CryptoMarket = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "gainers" | "losers">("all");

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      );
      const data = await res.data;
      setCoins(data);
      setLoading(false);
    };
    fetchCoins();
  }, []);

  let filteredCoins = coins;
  if (filter === "gainers") {
    filteredCoins = coins.filter(
      (coin) => coin.price_change_percentage_24h > 0
    );
  } else if (filter === "losers") {
    filteredCoins = coins.filter(
      (coin) => coin.price_change_percentage_24h < 0
    );
  }

  return (
    <div className="overflow-x-auto bg-gray-100 py-20">
      <Container>
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors duration-150
              ${
                filter === "all"
                  ? "bg-[#0f98c1] text-white border-[#0f98c1]"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors duration-150
              ${
                filter === "gainers"
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            onClick={() => setFilter("gainers")}
          >
            Gainers
          </button>
          <button
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors duration-150
              ${
                filter === "losers"
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            onClick={() => setFilter("losers")}
          >
            Losers
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">
          Crypto Market Prices
        </h2>
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
              <thead>
                <tr className="bg-[#0f98c1] text-white">
                  <th className="py-2 px-4 text-left">Coin</th>
                  <th className="py-2 px-4 text-left">Symbol</th>
                  <th className="py-2 px-4 text-right">Price (USD)</th>
                  <th className="py-2 px-4 text-right">24h Change</th>
                  <th className="py-2 px-4 text-center">7d Chart</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin) => (
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
                            stroke="#0f98c1"
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
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-6">
              <Link href="/markets">
                <button className="px-6 py-2 bg-[#0f98c1] text-white rounded-full font-semibold shadow hover:bg-[#117ca6] transition-colors duration-150">
                  See More
                </button>
              </Link>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default CryptoMarket;
