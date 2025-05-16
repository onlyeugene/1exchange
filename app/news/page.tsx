"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Container from "@/components/ui/container";

// import Image from "next/image";

interface NewsItem {
  title: string;
  url: string;
  publishedAt: string;
  source: { name: string };
  description: string;
  urlToImage: string;
}

const NEWS_PER_PAGE = 20;

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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

  // Pagination logic
  const totalPages = Math.ceil(news.length / NEWS_PER_PAGE);
  const paginatedNews = news.slice(
    (page - 1) * NEWS_PER_PAGE,
    page * NEWS_PER_PAGE
  );

  return (
    <div className="">
         <div className="bg-[#0d7fa3] pt-40 pb-20">
        <h1 className="text-white text-4xl font-bold container">
          Latest Crypto News
        </h1>
        <p className="text-white text-lg container">
          Investing in crypto is exciting, but it&apos;s essential to have all
          news and on goings in the crypto world.
        </p>
        {/* <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="flex gap-4 my-2 w-full container"
            >
              <input
                className="bg-white border-gray-300 border md:px-5 px-2 md:pr-20 pr-0 md:py-3 py-2 rounded-md text-gray-500 outline-none md:text-lg text-sm"
                placeholder="Trading amount"
              />
              <button className="bg-[#0f98c1] text-white md:px-4 px-2 md:py-2 py-1 rounded-md md:text-lg text-sm ">
                Exchange
              </button>
            </div> */}
      </div>
      <Container>
        <h2 className="text-2xl font-bold mb-4 text-center">
           Crypto News
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
              {paginatedNews.map((item, idx) => (
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
            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                className="px-3 py-1 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Prev
              </button>
              <span className="font-semibold">
                Page {page} of {totalPages}
              </span>
              <button
                className="px-3 py-1 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default News;
