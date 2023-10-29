import NewsList from "@/Components/Homepage/NewsLists";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center p-4">
                <Paginator meta={props.news.meta} />
            </div>
            {/* Mapping Neews
            {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 m-2 bg-white text-black shadow-md border round-md"
                            >
                                <p className="text-2xl">{data.title}</p>
                                <p className="text-sm">{data.description}</p>
                                <i>{data.category}</i>
                                <i>{data.author}</i>
                            </div>
                        );
                    })
                ) : (
                    <p>news none</p>
                )} */}
        </div>
    );
}
