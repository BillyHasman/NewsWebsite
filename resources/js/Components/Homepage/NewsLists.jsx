const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div
                key={i}
                data-theme="light"
                className="card w-full lg:w-96 bg-base-100 shadow-xl"
            >
                <figure>
                    <img
                        src="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="
                        alt="NewsLogo"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>Saat ini belum ada berita tersedia</div>;
};

export default function NewsList({ news }) {
    return !news ? noNews() : isNews(news);
    //     if (!news && !news.length) {
    //         return noNews();
    //     }
    //     return isNews(news);
}
