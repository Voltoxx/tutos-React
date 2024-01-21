import {Link} from "react-router-dom";

function Header () {
    return (
        <nav className="bg-blue-800 p-4 flex justify-between">
            <h1 className="font-bold text-white">Mon site de tuto</h1>
            <ul className="flex">
                <li className="ml-6"><Link to="/" className="text-white">Accueil</Link></li>
                <li className="ml-6"><Link to="/apropos" className="text-white">A propos</Link></li>
                <li className="ml-6"><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Header;