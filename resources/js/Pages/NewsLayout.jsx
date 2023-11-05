import NewsList from "@/Components/Homepage/NewsLists";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, router } from "@inertiajs/react";
import Paginator from "@/Components/Homepage/Paginator";
import NewNavbar from "@/Components/NewNavbar";
import TopTags from "@/Components/TopTags";
import MainHero from "@/Components/Homepage/MainHero";

export default function NewsLayout(props) {
    return (
        // <div className="base-container flex justify-center">
        <div className="Container mx-32 px-10 bg-base-100">
            <div>
                <NewNavbar />
            </div>
            <div>
                <TopTags />
            </div>
            <div className="my-16">
                <MainHero />
            </div>

            <div className="text-center text-2xl text-black"></div>
        </div>
        // </div>
    );
}
