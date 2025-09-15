"use client";

import BlogCard from "./BlogCard";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Button } from "@/components/ui/button";

interface Post { 
  id: number; 
  image: string; 
  category: string; 
  title: string; 
  description: string; 
  author: string; 
  date: string; 
}

interface MapBlogPostProps {
  selectedCategory: string;
}

const MapBlogPost = ({ selectedCategory }: MapBlogPostProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const params = {
          page: page,
          limit: 6,
          category: selectedCategory === "highlight" ? undefined : selectedCategory,
        };

        const response = await axios.get('https://blog-post-project-api.vercel.app/posts', {
          params,
          signal: controller.signal,
        });

        const newPosts = response.data.posts;

        setPosts(prevPosts => page === 1 ? newPosts : [...prevPosts, ...newPosts]);
        setHasMore(response.data.currentPage < response.data.totalPages);

      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled");
          return;
        }
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", err);
        setError("ไม่สามารถโหลดข้อมูลได้");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();

    return () => {
      controller.abort();
    };
  }, [selectedCategory, page]);

  const handleViewMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (isLoading && page === 1) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            {...post}
            date={new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'short', day: 'numeric'
            })}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        {isLoading && page > 1 && <p>Loading...</p>}
        {!isLoading && hasMore && (
          <Button onClick={handleViewMore} variant="outline">
            View More
          </Button>
        )}
        {!isLoading && !hasMore && posts.length > 0 && (
          <p className="text-gray-500"> You're all caught up! </p>
        )}
      </div>
    </>
  );
};

export default MapBlogPost;