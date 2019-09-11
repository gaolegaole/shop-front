import React from 'react'
import loginStyle from './login.scss'
import axios from 'axios'
import store from '../../store/Login/index';
import { USER_LOGIN } from '../../store/Login/types'
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', password: '', ...store.getState()
        }
        store.subscribe(this.handleChange)

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.username} /><br />
                <input type="text" value={this.state.password} /><br />
                <button onClick={this.loginHandle}>login</button>
            </div>
        );
    }
    loginHandle = () => {
        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
            .then(response => {
                console.log(response)
                const user = { name: 'xxx', age: 123 }
                const action = { type: USER_LOGIN, user }
                store.dispatch(action);
            })
            .catch(reason => {
                console.log(reason)
            })
    }
    handleChange = () => {
        this.setState = {
            ...store.getState()
        }
    }
}