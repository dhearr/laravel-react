import Navbar from "@/Components/Navbar";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function EditNews({ auth, myNews }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    console.log(myNews);

    const handleSubmit = () => {
        const data = {
            id: myNews.id,
            title,
            description,
            category,
        };
        router.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className="min-h-screen bg-slate-900">
            <Head title={title} />
            <Navbar user={auth.user} />
            <div className="p-6 bg-white border-b border-gray-200">
                <input
                    type="text"
                    placeholder="Judul"
                    className="input input-bordered w-full m-2"
                    onChange={(title) => setTitle(title.target.value)}
                    value={myNews.title}
                />
                <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-full m-2"
                    onChange={(description) =>
                        setDescription(description.target.value)
                    }
                    value={myNews.description}
                />
                <input
                    type="text"
                    placeholder="Category"
                    className="input input-bordered w-full m-2"
                    onChange={(category) => setCategory(category.target.value)}
                    value={myNews.category}
                />
                <button
                    className="btn btn-primary p-2 m-2"
                    onClick={() => handleSubmit()}
                >
                    Update
                </button>
            </div>
        </div>
    );
}
