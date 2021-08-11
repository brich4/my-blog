import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="border-b-4 border-blue-900 text-center fixed top-0 w-full bg-blue-800
        font-bold text-lg text-white">
            <ul>
                <li className="inline-block pt-2 pb-2">
                    <Link to="/" className="pl-3 pr-4">
                        Home
                    </Link>
                </li>
                <li className="inline-block pt-2 pb-2">
                    <Link to="/article" className="pl-3 pr-4">
                        Article
                    </Link>
                </li>
                <li className="inline-block pt-2 pb-2">
                    <Link to="/article-list" className="pl-3 pr-4">
                        Article List
                    </Link>
                </li>
                <li className="inline-block pt-2 pb-2">
                    <Link to="/about" className="pl-3 pr-4">
                        About
                    </Link>
                </li>
                
            </ul>
            
        </nav>
    );
}

export default NavBar
