import { Link } from "@inertiajs/react";

export default function Paginator({ meta }) {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="join">
            {/* f prev page exist then */}
            {prev && (
                <Link href={prev} className="join-item btn btn-outline">
                    «
                </Link>
            )}
            <Link className="join-item btn btn-outline">Page {current}</Link>
            {/* If next page exist then */}
            {next && (
                <Link href={next} className="join-item btn btn-outline">
                    »
                </Link>
            )}
        </div>
    );
}
