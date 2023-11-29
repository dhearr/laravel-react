import React from "react";

const isNews = (newsportals) => {
    return newsportals.map((newsportal, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {newsportal.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{newsportal.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {newsportal.category}
                        </div>
                        <div className="badge badge-outline">
                            {newsportal.author}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>news not found</div>;
};

const NewsCard = ({ newsportals }) => {
    return !newsportals ? noNews() : isNews(newsportals);
};

export default NewsCard;
