import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
    return (
        <>
            <h1>NewsPage</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map((newsItem) => (
                    <li key={newsItem.id}>
                        <Link href={`/news/${newsItem.slug}`}>
                            <img
                                src={`/images/news/${newsItem.image}`}
                                alt={newsItem.title}
                            />
                            <span>{newsItem.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NewsPage;
