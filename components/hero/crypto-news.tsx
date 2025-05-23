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
      const res = await axios.get("/api/news");
      setNews(res.data.articles);
      setLoading(false);
    };
    fetchNews();
  }, [NEWS_API_KEY]);

  const newsBlog = news.slice(0, 4);

  return (
    <div className="w-full py-20 bg-gray-100/50">
      <Container>
        <h2 className="text-xl font-bold mb-4 text-center">
          Latest Crypto News
        </h2>
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <>
            <ul
              className="space-y-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  md:gap-6 gap-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-easing="ease-in-sine"
              //   data-aos-anchor-placement="top-center"
              data-aos-once="false"
            >
              {newsBlog.map((item, idx) => (
                <li
                  key={item.url + idx}
                  className="bg-white p-4 shadow border border-gray-100 flex flex-col  h-full"
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
                    className="block hover:underline mt-3"
                  >
                    <h3 className="font-semibold md:text-lg mb-1 text-sm">
                      {item.title.slice(0, 20)}...
                    </h3>
                  </a>
                  <div className="text-xs text-gray-500 mb-1">
                    {item.source.name} &middot;{" "}
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </div>
                  <p className="text-gray-600 text-sm text-ellipsis">
                    {item.description.slice(0, 100)}...
                  </p>
                  <Link
                    href={`/news/${encodeURIComponent(btoa(item.url))}`}
                    className="text-xs text-blue-600 mt-auto font-semibold hover:underline"
                  >
                    Read More
                  </Link>
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
