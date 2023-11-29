import NewsCard from "@/Components/Homepage/NewsCard";
import Pagination from "@/Components/Homepage/Pagination";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Homepage({ title, auth, newsportals }) {
    return (
        <div className="min-h-screen bg-slate-900">
            <Head title={title} />
            <Navbar user={auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-5 p-5">
                <NewsCard newsportals={newsportals.data} />
            </div>

            <div className="flex justify-center items-center">
                <Pagination meta={newsportals.meta} />
            </div>
        </div>
    );
}
