import React, {Component} from 'react'
import classes from './Profile.module.css'
import Button from '../../components/UI/Button/Button'

class Profile extends Component {
    state = {
        test: ""
    }
    componentDidMount() {
        this.getProfile();
    }

    getProfile() {
        this.setState({test: "Test"});
        console.log(this.state)
    }

    render() {
        return (
            <div className={classes.Profile}>
                <h1>
                    PROFILE
                </h1>
                <div>
                    <Button
                        type="primary"
                        onClick={this.updateTiketHandler}
                    >
                        Update Tiket
                    </Button>
                </div>
            </div>
        )
    }
}

export default Profile