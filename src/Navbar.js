import { Link } from "@reach/router";
import React from "react";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Navbar = () => {
    const options = [
        'one', 'two', 'three'
      ];
    return (
        <div>
            <nav className="searchBar">
                <li>
                    Piep Piper
                </li>
            </nav>
        </div>
    )
}

export default Navbar;