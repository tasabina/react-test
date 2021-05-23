import React, { Component } from 'react'
import classes from './Card.module.css'
import { NavLink } from 'react-router-dom'

class Card extends Component {
    render() {
        const cls = [
            classes.Card,
            "col-sm-4"
        ]
        return (
            <div className={cls.join(' ')}>
                <div className={"card"}>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>
                        {this.props.title}
                    </h5>
                    <p className={"card-text"}>
                        {this.props.description}
                    </p>
                    <p className={"card-text"}>
                        <span className={"badge badge-secondary"}>{this.props.status}</span>
                    </p>
                    <NavLink to={'/tiket/' + this.props.id} className={"btn btn-primary"}>
                        Ditales
                    </NavLink>
                </div>
                </div>
            </div>
        )
    }
}

export default Card