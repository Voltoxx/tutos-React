import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="h-screen p-4 flex flex-col items-center justify-center bg-gray-200">
            <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre site</h1>
            <p className="text-lg text-gray-700 mb-8">Découvrez tout ce que notre site a à offrir.</p>
            <Link
                to="/"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
                Voir les tutos
            </Link>
        </div>
    );
}

export default Home;
