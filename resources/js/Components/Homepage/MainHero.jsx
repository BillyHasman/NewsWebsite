import { Link, Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function MainHero() {
    const news = [
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

    return (
        <div className="flex p-3 gap-3 h-screen rounded-lg">
            <div className="flex items-end w-1/4 h-1/2 bg-slate-800 rounded-xl">
                <div className="w-full h-1/4 bg-gray-300 m-3 rounded-xl py-5 px-5 overflow-clip">
                    <h2 className="text-2xl mb-3">How to Drive a Car Safely</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, sequi iusto! Nobis culpa tempora
                        repudiandae. Eum officiis ducimus iste saepe.
                    </p>
                </div>
            </div>
            <div className="flex items-end  w-1/4 h-1/2 bg-slate-800 rounded-xl">
                <div className="w-full h-1/4 bg-gray-300 m-3 rounded-xl py-5 px-5 overflow-clip">
                    <h2 className="text-2xl mb-3">How to Drive a Car Safely</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, sequi iusto! Nobis culpa tempora
                        repudiandae. Eum officiis ducimus iste saepe.
                    </p>
                </div>
            </div>
            <div className="flex items-end  w-1/2 h-1/2 bg-slate-800 rounded-xl">
                <div className="w-full h-1/4 bg-gray-300 m-3 rounded-xl py-5 px-5 overflow-clip">
                    <h2 className="text-2xl mb-3">How to Drive a Car Safely</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, sequi iusto! Nobis culpa tempora
                        repudiandae. Eum officiis ducimus iste saepe.
                    </p>
                </div>
            </div>
        </div>
    );
}
