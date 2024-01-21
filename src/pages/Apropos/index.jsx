import React from 'react';
import {Link} from "react-router-dom";

function Apropos() {
    return (
        <div className="h-screen p-4 flex flex-col items-center justify-center bg-gray-200">
            <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
            <p className="text-lg text-gray-700 mb-8">
                Bienvenue sur notre site ! Nous sommes une entreprise dédiée à fournir des tutos de qualité
                exceptionnelle. Découvrez notre histoire, notre mission et explorez nos tutos.
            </p>
            <Link
                to="/contact"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
                Nous contacter
            </Link>
        </div>
    );
}

export default Apropos;
