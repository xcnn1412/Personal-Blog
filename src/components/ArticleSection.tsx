import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react"; 

import CategorySelect from "./CatagorySelect";
import MapBlogPost from "./MapBlogPost";

const ArticleSection = () => {
    return (
        <section className="
        container mx-auto px-4 md:px-6 py-8">
            
            <div className="md:hidden space-y-4 p-4">
                <h2 className="text-2xl font-bold text-stone-800">
                Latest Articles {/* แก้ไข Typo จาก Lastest */}
                </h2>

    {/* --- Search Bar --- */}
    {/* div นี้จะครอบเฉพาะ Input และไอคอน Search */}
                <div className="relative w-full">
                    <Input
                        type="search"
                        placeholder="Search"
                        className="pl-4 pr-10 rounded-lg"
                    />
                    <Search
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400"
                        size={20}
                    />
                </div>

                {/* --- Category Select --- */}
                {/* 👇 ย้าย CategorySelect ออกมาอยู่นอก div ของ Search */}
                <div>
                    <CategorySelect />
                </div>
                
            </div>

            <div className="
                hidden md:flex items-center 
                justify-between w-full bg-stone-100 p-2 rounded-xl 
                border border-stone-200
            ">
                    <div className="flex items-center gap-2">
                        <Button variant="secondary" className="rounded-lg">
                            Highlight
                        </Button>
                        <Button variant="ghost" className="rounded-lg text-stone-500">
                            Cat
                        </Button>
                        <Button variant="ghost" className="rounded-lg text-stone-500">
                            Inspiration
                        </Button>
                        <Button variant="ghost" className="rounded-lg text-stone-500">
                            General
                        </Button>
                    </div>

                    <div className="relative w-full max-w-xs">
                        <Input
                            type="search"
                            placeholder="Search"
                            className="pl-4 pr-10 rounded-lg"
                        />
                        <Search
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400"
                            size={20}
                        />
                    </div>

            </div>
        {/* <MapBlogPost /> */}
        </section>
    );
};

export default ArticleSection;



    