import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to='/'>Watch list
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Watch list</Link>
                        </li>
                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link to="/add" className='btn'>+ Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
