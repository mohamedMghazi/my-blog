"use client";

import Loading from "@/app/loading";
import BlogsContainer from "@/app/components/BlogsContainer";
import Search from "@/app/components/Search";
import {useEffect, useMemo, useState} from "react";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function fetchBlogs() {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => setBlogs(data))
                .finally(() => setLoading(false));
        }

        fetchBlogs();
    }, []);

    const handleGetSearchResults = useMemo(() => {
        return (value) => {
            if (!value) return setSearchResults([]);

            const searchResults = blogs.filter(blog => blog.title.toLowerCase().includes(value?.toLowerCase()));
            setSearchResults(searchResults);
        };
    }, [blogs]);

    return (
        <div className="h-screen">
            <h1 className="m-1 ml-9 font-bold dark:text-slate-200 text-4xl">Blogs</h1>
            <p className="m-1 ml-9 dark:text-slate-300 text-lg">A collection of blog posts.</p>
            <hr className="m-1 ml-9 mt-4 dark:border-slate-600 border-slate-300" />

            {loading ? <Loading /> : (
                <>
                    <Search getSearchValue={(value) => handleGetSearchResults(value)} searched={!!searchResults.length} />
                    <BlogsContainer blogs={searchResults.length ? searchResults : blogs} />
                </>
            )}
        </div>
    );
}
