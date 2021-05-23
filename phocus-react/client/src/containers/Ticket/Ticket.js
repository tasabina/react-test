import React, {Component} from 'react'
import classes from './Ticket.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import { connect } from 'react-redux'
import { updateTiket, fetchTiket, deleteTiket } from '../../store/actions/tiket'

const STATUS = {
    DONE: 'DONE',
    INPROGRESS: 'INPROGRESS',
    TODO: 'TODO'
}

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
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
    componentDidMount() {
        this.props.fetchTiket(this.state.organisationId,this.state.id)
    }
    componentDidUpdate(prevProps) {
        if(this.props.tiket.deleteSuccess) {
            window.location.replace("/")
        }
        if(this.props.tiket === prevProps.tiket) {
            return
        }
        if(this.props.tiket.tiket != {}) {
            this.setState({
                id: this.props.tiket.tiket.id,
                name: this.props.tiket.tiket.name, 
                description: this.props.tiket.tiket.description,
                status: this.props.tiket.tiket.status,
                visible: this.props.tiket.tiket.visible,
                board: this.props.tiket.tiket.board,
                createdAt: this.props.tiket.tiket.createdAt,
                updatedAt: this.props.tiket.tiket.updatedAt,
            })
        }
    }
    updateTiketHandler = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.updateTiket(this.state);
    }
    deleteTiketHandler = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.deleteTiket(this.state.organisationId,this.state.id);
    }
    selectChangeHandler = (event, controlName)=> {
        this.setState({
            [controlName]: event.target.value
        })
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
    renderInput() {
        let tiket = this.state
        let inputBlock = []
        for(let el in tiket) {
            if(el === 'name' || el === 'description') {
                let label = `Input ${el}`;
                inputBlock.push(
                    <Input
                        key={tiket.id + el}
                        label={label}
                        value={tiket[el]}
                        onChange={event => this.changeHandler(event.target.value, el)}
                    />
                )
            }
        }
        return inputBlock
    }
    render() {

        const cls = [
            classes.Ticket,
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
        console.log(this.props.tiket)
        return (
                <div className={cls.join(' ')}>
                <div className={"col-6"}>
                <h1>Tiket { this.props.tiket.tiket.id } : { this.props.tiket.tiket.name }</h1>
                <hr/>
                <form onSubmit={this.submitHandler}>
                    {
                        <div>
                            {this.renderInput()}
                        </div>
                    }
                    { selectStatus }
                    { selectVisible }
                    {
                        
                        <div>
                            <p>Created at :{this.state.createdAt}</p>
                            <p>Updated at: {this.state.createdAt}</p>
                        </div>
                    }

                    <Button
                        type="primary"
                        onClick={this.updateTiketHandler}
                    >
                        Update Tiket
                    </Button>
                    <Button
                        type="danger"
                        onClick={this.deleteTiketHandler}
                    >
                        Remove Tiket
                    </Button>
                    </form>
                    </div>
                    </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tiket: state.tiket
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTiket: (organisationId,ticketId)  => dispatch(fetchTiket(organisationId,ticketId)),
        updateTiket: (organisationId,ticketId) => dispatch(updateTiket(organisationId,ticketId)),
        deleteTiket: (organisationId,ticketId) => dispatch(deleteTiket(organisationId,ticketId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)
