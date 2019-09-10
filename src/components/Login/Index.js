import React from 'react'
export default class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',password:''
        }
    }
    render() {
        return (
            <div>
                login
                username:<input type="text" value={this.state.usernmae} onChange={this.onChangeUsernameHandle}/><br/>
                password:<input type="text" value={this.state.password} onChange={this.onChangePasswordHandle}/>
            </div>
        );
    }
    onChangeUsernameHandle = e =>{
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    onChangePasswordHandle = e =>{
        console.log(e.target.value)
        this.setState({
            password:e.target.value
        })
    }
}