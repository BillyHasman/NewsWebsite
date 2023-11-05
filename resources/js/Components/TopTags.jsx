import { Link, Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function TopTags() {
    const tags = [
        {
            name: "#Food",
            imgUrl: "https://images2.alphacoders.com/100/1003810.jpg",
            url: "https://id.wikipedia.org/wiki/Makanan",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Animal",
            imgUrl: "https://www.10wallpaper.com/wallpaper/1366x768/1407/parrot_branch_jungle-Animal_HD_Wallpaper_1366x768.jpg",
            url: "https://id.wikipedia.org/wiki/Hewan",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Car",
            imgUrl: "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg",
            url: "https://id.wikipedia.org/wiki/Mobil",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Sport",
            imgUrl: "https://c4.wallpaperflare.com/wallpaper/971/967/737/sports-images-for-desktop-background-wallpaper-preview.jpg",
            url: "https://id.wikipedia.org/wiki/Olahraga",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Music",
            imgUrl: "https://c4.wallpaperflare.com/wallpaper/904/821/218/headset-music-purple-nice-wallpaper-preview.jpg",
            url: "https://id.wikipedia.org/wiki/Musik",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Technology",
            imgUrl: "https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.webp?b=1&s=170667a&w=0&k=20&c=c0Q8u1Y5yFJCDxltBZd0RAn1g01Se6qCjZGS5q9XLZs=",
            url: "https://id.wikipedia.org/wiki/Teknologi",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Abstract",
            imgUrl: "https://images2.alphacoders.com/100/1003810.jpg",
            url: "https://id.wikipedia.org/wiki/Abstrak",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Abstract",
            imgUrl: "https://images2.alphacoders.com/100/1003810.jpg",
            url: "https://id.wikipedia.org/wiki/Abstrak",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Abstract",
            imgUrl: "https://images2.alphacoders.com/100/1003810.jpg",
            url: "https://id.wikipedia.org/wiki/Abstrak",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Abstract",
            imgUrl: "https://images2.alphacoders.com/100/1003810.jpg",
            url: "https://id.wikipedia.org/wiki/Abstrak",
            imgAlt: "ini adalah gambar",
        },
        {
            name: "#Abstract",
            imgUrl: "https://images2.alphacoders.com/100/1003810.jpg",
            url: "https://id.wikipedia.org/wiki/Abstrak",
            imgAlt: "ini adalah gambar",
        },
    ];

    const initialVisibleTags = 6;
    const [visibleTags, setVisibleTags] = useState(initialVisibleTags);

    const totalTags = tags.length;

    const showNextTags = () => {
        if (visibleTags < totalTags - 1) {
            setVisibleTags(visibleTags + 1);
        }
    };

    const showPrevTags = () => {
        if (visibleTags > initialVisibleTags) {
            setVisibleTags(visibleTags - 1);
        }
    };

    return (
        <div className="flex overflow-x-auto p-3 gap-3 bg-gray-200 rounded-lg">
            {visibleTags > initialVisibleTags && (
                <button
                    onClick={showPrevTags}
                    className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Previous
                </button>
            )}
            {tags.slice(1, visibleTags + 1).map((tag, index) => (
                <div key={index} className="w-1/6">
                    <Link href={tag.url}>
                        <div
                            className="h-16 rounded-2xl bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${tag.imgUrl})`,
                            }}
                        >
                            <div className="flex justify-center items-center h-full w-full">
                                <p className="text-white font-bold text-2xl">
                                    {tag.name}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

            {visibleTags < totalTags && (
                <button
                    onClick={showNextTags}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Next
                </button>
            )}
        </div>
    );
}
