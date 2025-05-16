"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@/components/ui/container";
import Link from "next/link";

interface NewsItem {
  title: string;
  url: string;
  publishedAt: string;
  source: { name: string };
  description: string;
  urlToImage: string;
  content: string;
}

const NewsPage = () => {
  const params = useParams();
  const id = params?.id;
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    if (!id) return;
    const url = atob(decodeURIComponent(id as string));
    axios.get("/api/news").then((res) => {
      const found = res.data.articles.find((a: NewsItem) => a.url === url);
      setArticle(found || null);
      setNews(res.data.articles);
    });
  }, [id]);

  if (!article) return <div>Loading...</div>;

  const relatedNews = news.filter((item) => item.url !== article.url).slice(0, 4);

  return (
    <div className="">
      <div className="bg-[#0d7fa3] pt-40 pb-20">
        <h1 className="text-white text-4xl font-bold container">
          Blog Details
        </h1>
        <p className="text-white text-lg container">
          Investing in crypto is exciting, but it&apos;s essential to have all
          news and on goings in the crypto world
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
        <h1 className="md:text-2xl text-xl font-bold">{article.title}</h1>
        <img src={article.urlToImage} alt={article.title} />
        <div className="flex gap-2 items-center mt-5">
          <h1 className="text-white text-sm border border-[#0f98c1]/20 bg-[#0f98c1]/50 px-2 py-1">
            {article.source?.name}
          </h1>
          <div className="border h-5 border-amber-500" />
          <span className="text-gray-500 text-sm flex gap-2 items-center">
            {/* <Calendar className="w-4 h-4" /> */}
            {new Date(article.publishedAt).toLocaleString()}
          </span>
        </div>
        <p className="pt-5">{(article.content || "").split("[")[0]}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read Full Article
        </a>

        <div className="py-10">
          <h1 className="text-center text-2xl font-bold">More Blog News</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 py-10">
          {relatedNews.map((item, idx) => (
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
        </div>
       </div>
      </Container>
    </div>
  );
};

export default NewsPage;
