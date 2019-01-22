import React from 'react';

import strings from 'strings';

import './styles.scss';

import {Link} from 'react-router-dom';

import client from 'services/client';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <h1>My Website</h1>
                <ul>
                    <Link to="/">
                        <li>{strings.MENU_HOME}</li>
                    </Link>
                    <Link to="/galleries">
                        <li>{strings.MENU_GALLERIES}</li>
                    </Link>
                    <Link to="/about">
                        <li>{strings.MENU_ABOUT}</li>
                    </Link>
                    <Link to="/contact">
                        <li>{strings.MENU_CONTACT}</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Menu;