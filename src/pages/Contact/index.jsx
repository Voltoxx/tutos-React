import React from 'react';

function Contact() {
    return (
        <div className="h-screen p-4 flex flex-col items-center justify-center bg-gray-200">
            <h1 className="text-4xl font-bold mb-4 text-blue-800">Contactez-nous</h1>
            <p className="text-lg text-gray-700 mb-8">
                Pour toute question ou demande d'assistance, n'hésitez pas à nous contacter. Nous sommes là pour
                vous aider !
            </p>
            <form className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Votre nom"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Votre email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Votre message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}

export default Contact;
