import NewsList from "@/Components/Homepage/NewsLists";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Paginator from "@/Components/Homepage/Paginator";
import NewNavbar from "@/Components/NewNavbar";

export default function NewsLayout(props) {
    return (
        <div className="Container w-full px-10 bg-slate-100">
            <NewNavbar />
            <div className="text-center text-2xl text-black"></div>
        </div>
    );
}
