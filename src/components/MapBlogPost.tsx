// components/MapBlogPost.tsx

"use client";

import BlogCard from "./BlogCard";
import { useState, useEffect } from 'react';
import axios, { AxiosError } from "axios";

// 💡 Best Practice: ควรย้าย Interfaces เหล่านี้ไปไว้ในไฟล์กลาง เช่น `types/index.ts`
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

// ------------------- Refactored Component -------------------

const MapBlogPost = ({ selectedCategory }: MapBlogPostProps) => {
  // 1. ✨ รวม State ทั้งหมดไว้ใน Object เดียวเพื่อการจัดการที่ง่ายขึ้น
  const [state, setState] = useState<{
    posts: Post[];
    isLoading: boolean;
    error: string | null;
  }>({
    posts: [],
    isLoading: true,
    error: null,
  });

  // 2. ✨ ใช้ useEffect ที่มีการ "Cleanup" เพื่อป้องกันปัญหา Race Condition
  useEffect(() => {
    // สร้าง AbortController เพื่อยกเลิก request ที่ไม่ต้องการแล้ว (สำคัญมาก)
    const controller = new AbortController();

    const fetchPosts = async () => {
      // เริ่มต้นการโหลดใหม่ทุกครั้ง
      setState(prevState => ({ ...prevState, isLoading: true, error: null }));

      try {
        const params: { category?: string } = {};
        if (selectedCategory && selectedCategory !== "highlight") {
          params.category = selectedCategory;
        }

        const response = await axios.get('https://blog-post-project-api.vercel.app/posts', {
          params,
          signal: controller.signal, // ส่ง signal เข้าไปกับ request
        });

        // อัปเดต state เมื่อดึงข้อมูลสำเร็จ
        setState({ posts: response.data.posts, isLoading: false, error: null });

      } catch (err) {
        // ถ้า error เกิดจากการยกเลิก request ก็ไม่ต้องทำอะไร
        if (axios.isCancel(err)) {
          console.log("Request canceled");
          return;
        }
        // ถ้าเป็น error อื่นๆ ให้แสดงข้อความ
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", err);
        setState(prevState => ({ ...prevState, isLoading: false, error: "ไม่สามารถโหลดข้อมูลได้" }));
      }
    };

    fetchPosts();

    // 🏆 ฟังก์ชัน Cleanup: จะถูกเรียกใช้เมื่อ component re-render หรือ unmount
    // เพื่อยกเลิก request เก่าที่ยังค้างอยู่ทิ้งไป
    return () => {
      controller.abort();
    };
  }, [selectedCategory]); // ทำงานใหม่ทุกครั้งที่ category เปลี่ยน

  // 3. ✨ Logic การแสดงผลที่อ่านง่ายขึ้น
  if (state.isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (state.error) {
    return <div className="text-center py-10 text-red-500">{state.error}</div>;
  }

  if (state.posts.length === 0) {
    return <div className="text-center py-10">No articles found in this category.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {state.posts.map((post) => (
        <BlogCard
          key={post.id}
          {...post}
          date={new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        />
      ))}
    </div>
  );
};

export default MapBlogPost;