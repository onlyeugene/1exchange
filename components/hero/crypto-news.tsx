"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Container from "../ui/container";
// import Image from "next/image";

interface NewsItem {
  title: string;
  url: string;
  publishedAt: string;
  source: { name: string };
  description: string;
  urlToImage: string;
}

const CryptoNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY; // <-- Replace this with your NewsAPI key
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${NEWS_API_KEY}&pageSize=4&sortBy=publishedAt&language=en`
      );
      setNews(res.data.articles);
      setLoading(false);
    };
    fetchNews();
  }, [NEWS_API_KEY]);

  return (
    <div className="w-full  mt-10">
      <Container>
        <h2 className="text-xl font-bold mb-4 text-center">
          Latest Crypto News
        </h2>
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <>
            <ul className="space-y-6 grid min-[960]:grid-cols-4 grid-cols-1  md:gap-6 gap-2">
              {news.map((item, idx) => (
                <li
                  key={item.url + idx}
                  className="bg-white p-4  shadow border border-gray-100 h-[400px]"
                >
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                    width={100}
                    height={100}
                  />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  </a>
                  <div className="text-xs text-gray-500 mb-1">
                    {item.source.name} &middot;{" "}
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-6">
              <Link href="/news">
                <button className="cursor-pointer  text-black font-semibold hover:underline hover:underline-offset-8 transition-colors duration-150">
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

export default CryptoNews;
