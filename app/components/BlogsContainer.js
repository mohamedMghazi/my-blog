import Link from "next/link";

export default function BlogsContainer({ blogs }) {
    return <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        {blogs.map(blog => <li key={blog.id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200 line-clamp-1">
                    {blog.title}
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark line-clamp-2">
                    <p>{blog.body}</p>
                </div>
                <Link
                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                    href={`/blogs/${blog.id}`}
                >
                    Read more
                    <svg
                        className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                        width="3"
                        height="6"
                        viewBox="0 0 3 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M0 0L3 3L0 6"></path>
                    </svg>
                </Link>
            </div>
            <img
                src="https://placehold.co/600x400"
                alt=""
                className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                width="1216"
                height="640"
            />
        </li>)}
    </ul>
}
