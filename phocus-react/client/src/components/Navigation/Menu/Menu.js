import React, { Component } from 'react'
import classes from './Menu.module.css'
import {NavLink} from 'react-router-dom'

class Menu extends Component {
    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index} className={"nav-item"}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                        className ={"nav-link"}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        const cls = [
            classes.Menu,
            "nav",
            "justify-content-end"
        ]
        const links = [
            {to:'/', label: 'Dashboard', exact: true},
            {to:'/dashboard-creator/', label: 'Creat Dashboard', exact: true},
            {to:'/tiket-creator/', label: 'Creat Tiket', exact: true},
            {to:'/profile/', label: 'Profile', exact: true},
        ]

        return(
            <ul className={cls.join(' ')}>
                {this.renderLinks(links)}
            </ul>
        )
    }
}

export default Menu