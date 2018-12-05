import React from 'react';
import './MyAdminStyle.css';

class MyAdmin extends React.Component {

    constructor(props){
        super(props);
        this.state = {username:'',password:''};
        this.handleClick = this.handleClick.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        let url = "/api/login?username=" + this.state.username + "&password=" + this.state.password;
        let http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onload = function (e) {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    let res = http.response;
                    if (res === "cookie set"){
                        window.location.href="./adminui";
                    }
                }
            }
        }
    }

    handleUserChange(event){
        this.setState({username:event.target.value})
    }

    handlePassChange(event){
        this.setState({password:event.target.value})
    }

    render() {
        return(
            <div className="dstyle">
                <form className="fstyle" onSubmit={this.handleClick}>
                    <div>username</div>
                    <input type="text" value={this.state.username} onChange={this.handleUserChange} placeholder="Username..." id="username"/>
                    <br/>
                    <div>password</div>
                    <input type="password" value={this.state.password} onChange={this.handlePassChange} placeholder="Password..." id="password"/>
                    <br/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        );
    }
}

export default MyAdmin;
