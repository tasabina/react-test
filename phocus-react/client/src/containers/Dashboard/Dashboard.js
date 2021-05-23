import React, {Component} from 'react'
import classes from './Dashboard.module.css'
import { connect } from 'react-redux'
import {getDashboard} from '../../store/actions/dashboard'
import Card from '../../components/UI/Card/Card'

class Dashboard extends Component { 
    componentDidMount() {
        this.props.getDashboard({organisationId: "806fb7b1-64fb-4ec1-853b-f4ac7554cc64", ticketId: "0ad62ca9-7770-4988-b480-037609b87b81"})
    }
    renderTasks() {
        return this.props.dashboard.tikets.map(tiket => {
            return(
                <Card
                    key={tiket.id}
                    title={tiket.name}
                    description={tiket.description}
                    status={tiket.status}
                    id={tiket.id}
                />
            )
        })
    }
    render() {
        return (
            <div className={classes.Dashboard}>
                <div>
                    <h1>Dashboard</h1>
                    {
                        <div className={"row"}>
                            {this.renderTasks()}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDashboard: board => dispatch(getDashboard(board))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)