import React, {Component} from 'react'
import classes from './TicketCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import { connect } from 'react-redux'
import { createTiket, fetchTiket, deleteTiket } from '../../store/actions/tiket'

const STATUS = {
    DONE: 'DONE',
    INPROGRESS: 'INPROGRESS',
    TODO: 'TODO'
}

class TicketCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            organisationId: "806fb7b1-64fb-4ec1-853b-f4ac7554cc64",
            name: "",
            description: "",
            status: STATUS.TODO,
            visible: true,
            createdAt: "",
            updatedAt: "",
            board: {
              name: ""
            }
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props.tiket === prevProps.tiket) {
            return
        }
    }
    createTiketHandler = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.createTiket(this.state);
    }
    selectChangeHandler = (event, controlName)=> {
        this.setState({
            [controlName]: event.target.value
        })
        if(controlName == 'visible') {
            let value = event.target.value == 1 ? true : false
            this.setState({
                [controlName]: value
            })
        }
    }
    changeHandler = (value, controlName) => {
        const formElement = { ...this.state }
        if(controlName == 'board') {
            formElement[controlName].name = value
        } else {
            formElement[controlName] = value
        }
        this.setState(formElement)
    }
    render() {
        const cls = [
            classes.TicketCreator,
            "row"
        ]
        const selectStatus = <Select
            label="Select status"
            value={this.state.status}
            onChange={e => this.selectChangeHandler(e, 'status')}
            options={[
                {text: STATUS.TODO, value: STATUS.TODO},
                {text: STATUS.INPROGRESS, value: STATUS.INPROGRESS},
                {text: STATUS.DONE, value: STATUS.DONE},
            ]}
        />
        const selectVisible = <Select
        label="Visible"
        value={this.state.visible}
        onChange={e => this.selectChangeHandler(e, 'visible')}
        options={[
            {text: "No", value: 'false'},
            {text: "Yes", value: 'true'}
        ]}
    />
        return (
            <div className={cls.join(' ')}>
            <div className={"col-12"}>
                <h1>Tiket Creator</h1>
                <hr/>
                <form onSubmit={this.submitHandler}>
                    <Input
                        label='Input Tiket name'
                        onChange={event => this.changeHandler(event.target.value, 'name')}
                    />
                    <Input
                        label='Input Tiket description'
                        onChange={event => this.changeHandler(event.target.value, 'description')}
                    />
                    <Input
                        label='Input Board name'
                        onChange={event => this.changeHandler(event.target.value, 'board')}
                    />
                    { selectStatus }
                    { selectVisible }

                    <Button
                        type="primary"
                        onClick={this.createTiketHandler}
                    >
                        Create Tiket
                    </Button>
                    </form>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tikets: state.tikets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createTiket: item => dispatch(createTiket(item)),
        // finishCreateTiket: () => dispatch(finishCreateTiket())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketCreator)
