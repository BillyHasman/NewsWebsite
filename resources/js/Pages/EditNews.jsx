import Navbar from "@/Components/Navbar";
import { Link, Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function EditNews(props) {
    console.log("props: ", props);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        router.post("/news/update", data);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="lg:flex lg:justify-center">
                <div
                    data-theme="light"
                    className="card w-full lg:w-1/2 bg-base-100 shadow-xl m-3"
                >
                    <div className="p-4 text-2xl font-bold">Edit News</div>
                    <div
                        className="p-6 text-gray-900 dark:text-gray-100"
                        data-theme="light"
                    >
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered w-full m-2"
                            onChange={(title) => setTitle(title.target.value)}
                            defaultValue={props.myNews.title}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full m-2"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            defaultValue={props.myNews.description}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            className="input input-bordered w-full m-2"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            defaultValue={props.myNews.category}
                        />
                        <button
                            className="btn bg-sky-300 hover:bg-sky-500 m-2"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
