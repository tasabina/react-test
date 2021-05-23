import React, {Component} from 'react'
import classes from './DashboardCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import { connect } from 'react-redux'
import { createDashboard, getDashboard } from '../../store/actions/dashboard'

class DashboardCreator extends Component {
    state = {
        organisationId: "806fb7b1-64fb-4ec1-853b-f4ac7554cc64",
        boardId: "0ad62ca9-7770-4988-b480-037609b87b81",
        name: "",
    }
    createDashboardHandler = event => {
        event.preventDefault()
        this.props.createDashboard(this.state)
    }
    changeHandler = (value) => {
        const formElement = { ...this.state }
        formElement['name'] = value
        this.setState(formElement)
    }
    render() {
        return (
            <div className={classes.DashboardCreator}>
                <h1>Dashboard Creator</h1>
                <hr/>
                <Input
                    label='Input Dashboard name'
                    onChange={event => this.changeHandler(event.target.value)}
                />
                <Button
                    type="primary"
                    onClick={this.createDashboardHandler}
                >
                    Create Dashboard
                </Button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createDashboard: item => dispatch(createDashboard(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCreator)