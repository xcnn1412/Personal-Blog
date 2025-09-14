"use client";

import { blogPosts } from "@/data/blogPost.js"; // 1. Import ข้อมูล
import BlogCard from "./BlogCard";               // 2. Import BlogCard

const MapBlogPost = () => {

  console.log("Data: being rendered", blogPosts);
  return (
    // 3. ส่วนของ Grid Layout และการ map ข้อมูลจะอยู่ในนี้ทั้งหมด
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          id={post.id}
          image={post.image}
          category={post.category}
          title={post.title}
          description={post.description}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default MapBlogPost;