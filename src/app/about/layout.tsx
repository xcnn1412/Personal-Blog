export default function LayoutAboutMe( { children }: { children: React.ReactNode }) {
    return (
        <section>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            {children}
        </section>
    );
}