import React from "react";
import { Link } from "@inertiajs/react";

function Pagination({ meta }) {
    const current = meta.current_page;
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;

    return (
        <div className="join bg-base-100">
            {prev ? (
                <Link href={prev} className="join-item btn btn-outline">
                    «
                </Link>
            ) : (
                <Link
                    href={prev}
                    className="join-item btn btn-outline btn-disabled"
                >
                    «
                </Link>
            )}
            <div className="join-item btn btn-outline">{current}</div>
            {next ? (
                <Link href={next} className="join-item btn btn-outline">
                    »
                </Link>
            ) : (
                <Link
                    href={next}
                    className="join-item btn btn-outline btn-disabled"
                >
                    »
                </Link>
            )}
        </div>
    );
}

export default Pagination;
