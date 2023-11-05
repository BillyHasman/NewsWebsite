import NewsList from "@/Components/Homepage/NewsLists";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, router } from "@inertiajs/react";
import Paginator from "@/Components/Homepage/Paginator";
import NewNavbar from "@/Components/NewNavbar";
import TopTags from "@/Components/TopTags";

export default function NewsLayout(props) {
    return (
        <div className="Container w-full px-10 bg-base-100">
            <NewNavbar />
            <TopTags />
            <div className="text-center text-2xl text-black"></div>
        </div>
    );
}
