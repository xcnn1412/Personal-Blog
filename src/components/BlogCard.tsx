// app/components/BlogCard.tsx

import Image from 'next/image';
import Link from 'next/link';

// สร้าง Interface สำหรับกำหนดประเภทของ props (Best Practice สำหรับ TypeScript)
interface BlogCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const BlogCard = ({ id, image, category, title, description, author="Anonymous", date }: BlogCardProps) => {
  return (
    // Link ครอบการ์ดทั้งหมดเพื่อให้คลิกได้
    <Link href={`/blog/${id}`} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transform transition-all hover:-translate-y-1 duration-300">
        {/* Blog Image */}
        <div className="relative w-full h-48">
          {image ? ( // 👈 1. ตรวจสอบว่า image มีค่าหรือไม่
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            // 👈 2. ถ้าไม่มี ให้แสดง div สีเทาแทน
            <div className="w-full h-full bg-gray-200"></div>
          )}
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {category}
          </span>
          <h2 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
          <p className="mt-2 text-gray-600 text-sm line-clamp-3">
            {description}
          </p>

          {/* Author and Date */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                {/* Placeholder for author image */}
                <Image
                  src={`https://ui-avatars.com/api/?name=${author.replace(' ', '+')}&background=random`}
                  alt={author}
                  fill
                  sizes="32px"
                />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-700">{author}</span>
            </div>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;