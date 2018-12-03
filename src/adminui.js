import React from 'react';


const fstyle = {
    margin: 'auto',
    display: 'inline-block',
    border: "1px solid #ccc",
    padding: '10px',
    backgroundColor: 'white,',
    boxShadow: '0px 0px 8px #888888',
    width: '100%'
}
const dstyle = {
    textAlign: 'center',
    margin: '40px'
}


class adminui extends React.Component {

    constructor (props){
        super(props);
        this.state = {isAuthenticated:false, new_title:'', feed:''};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleFeedChange = this.handleFeedChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.checkAuth();
    }

    handleTitleChange(event){
        this.setState({new_title:event.target.value})
    }

    handleFeedChange(event){
        this.setState({feed:event.target.value})
    }

    handleClick(event){
        event.preventDefault();
        let url = "/api/newpost";
        var params = "title=" + this.state.new_title + "&feed=" + this.state.feed;
        let http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(params);
        http.onload = function (e) {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    let res = http.response;
                    if(res=="success"){
                        this.setState({feed:''});
                        this.setState({new_title:''});
                    }
                }
            }
        }.bind(this);
    }

    checkAuth() {
        let url = "/api/auth";
        let http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onload = function (e) {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    let res = http.response;
                    if (res=="ok"){
                        this.setState({isAuthenticated:true});
                    }
                }
            }

        }.bind(this);

    }

    render() {
        return this.state.isAuthenticated
            ?  <div style={dstyle}>
                <form style={fstyle} onSubmit={this.handleClick}>
                    <div>
                        ENTER NEW ANNOUNCEMENT
                    </div>
                    <div>
                        Title
                    </div>
                    <input type="text" value={this.state.new_title} onChange={this.handleTitleChange} placeholder="Enter Title" style={{width: '70%', height: '30px'}}/>
                    <br/>
                    <div>
                        Announcement
                    </div>
                    <textarea value={this.state.feed} onChange={this.handleFeedChange} placeholder="Enter text" style={{width: '70%', height: '150px'}}/>
                    <br/>
                    <input type = "submit" value = "Add Announcement" />
                </form>
            </div>
            : null;
    }

}


export default adminui;