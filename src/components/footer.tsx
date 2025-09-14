import Link from "next/link";
import { Linkedin, Github, Dribbble, Chromium} from "lucide-react";

const Footer = () => {
    return(
        <footer className="bg-stone-100 border-t border-stone-200">

            <div className="
            container mx-auto px-4 md:px-6 py-4">

                <div className="flex items-center justify-between text-sm
                text-stone-600">
                    
                    <div className="flex items-center gap-4">
                        <span>Get in touch</span>

                        <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="handsome_man"
                        aria-label="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4 hover:text-stone-900 transition-colors"/>
                        </Link>

                        <Link
                        href=""
                        target="_blank"
                        rel="handsome_man"
                        aria-label="GitHub"
                        >
                            <Github className="w-4 h-4 hover:text-stone-900 transition-colors"/>
                        </Link>

                        <Link
                        href=""
                        target="_blank"
                        rel="handsome"
                        aria-label="chromium"
                        >
                            <Chromium className="w-4 h-4 hover:text-stone-900 transition-colors"/>  
                        </Link>
                    </div>


                    <div className="underline hover:text-stone-900 transition-colors">
                    HomePage
                    </div>  

                </div>

              

            </div>

        </footer>
    );
};

export default Footer;