// app/blog/[id]/page.tsx

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

// Interface สำหรับข้อมูล Post ที่ดึงมา
interface Post {
  id: number;
  title: string;
  content: string; // <-- ส่วนนี้คือ Markdown ที่เราจะใช้
  image: string;
  category: string;
  author: string;
  date: string;
}

// ฟังก์ชันสำหรับดึงข้อมูล Post เดียว
async function getPost(id: string): Promise<Post | null> {
  try {
    const res = await fetch(`https://blog-post-project-api.vercel.app/posts/${id}`, {
      next: { revalidate: 3600 } // Revalidate ทุก 1 ชั่วโมง
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}


// นี่คือหน้า Component หลักของเรา
export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="mt-4">Sorry, we couldn't find the blog post you're looking for.</p>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    
    <main className="container mx-auto px-4 md:px-6 py-12">

      <article className="max-w-3xl mx-auto">

         <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

      </article>

    </main>
  );
}



// {/* <main className="container mx-auto px-4 md:px-6 py-12">
//       <article className="max-w-3xl mx-auto">
//         {/* --- ส่วนหัวของบทความ --- */}
//         <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
//           {post.title}
//         </h1>
//         <div className="flex items-center space-x-4 text-gray-500 mb-8">
//             <div className="flex items-center">
//                 <Image
//                     src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`}
//                     alt={post.author}
//                     width={40}
//                     height={40}
//                     className="rounded-full"
//                 />
//                 <span className="ml-3 font-medium text-gray-800">{post.author}</span>
//             </div>
//             <span>•</span>
//             <span>{formattedDate}</span>
//         </div>

//         {/* --- รูปภาพหลักของบทความ --- */}
//         {post.image && (
//           <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
//             <Image
//               src={post.image}
//               alt={post.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         )}

//         {/* --- เนื้อหา Markdown ที่จะถูกแปลงเป็น HTML --- */}
//         <div className="prose prose-lg max-w-none">
//           <ReactMarkdown remarkPlugins={[remarkGfm]}>
//             {post.content}
//           </ReactMarkdown>
//         </div> {/* ✅ เพิ่ม Tag ปิด div ที่ขาดไป */}
//       </article> {/* ✅ เพิ่ม Tag ปิด article ที่ขาดไป */}
//     </main> */}