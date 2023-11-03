import NewsList from "@/Components/Homepage/NewsLists";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Paginator from "@/Components/Homepage/Paginator";

export default function NewsLayout(props) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-800">
            <div className="text-center text-2xl text-white">
                <p>Buat halaman news baru</p>
            </div>
        </div>
    );
}
