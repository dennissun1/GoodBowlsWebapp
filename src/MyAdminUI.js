import React from 'react';
import './MyAdminStyle.css';

class MyAdminUI extends React.Component {

    constructor (props){
        super(props);
        this.state = {isAuthenticated:false, new_title:'', feed:'', id:[], title:[]};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleFeedChange = this.handleFeedChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getFeedData = this.getFeedData.bind(this);
    }

    componentWillMount() {
        this.checkAuth();
        this.getFeedData();
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
                    if(res === "success"){
                        this.setState({feed:''});
                        this.setState({new_title:''});
                        window.location.reload();
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
                    if (res === "ok"){
                        this.setState({isAuthenticated:true});
                    }
                }
            }

        }.bind(this);

    }

    getFeedData(){
        let url = "/api/posts";
        let http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onload = function (e) {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    let res = JSON.parse(http.response);
                    for(let i = 4; i < res.length; i++){
                        this.setState({id:[...this.state.id, res[i].id]});
                        this.setState({title:[...this.state.title, res[i].title]});
                    }
                }
            }
        }.bind(this);
    }


    deleteFeed(index,e){
        console.log(this.state.id[index]);
        let url = "/api/deletefeed";
        var params = "id=" + this.state.id[index];
        let http = new XMLHttpRequest();
        http.open("DELETE", url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(params);
        http.onload = function (e) {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    let res = http.response;
                    if(res="success"){
                        window.location.reload();
                    }
                }
            }
        }
    }

    render() {
        return this.state.isAuthenticated
            ?  <div className="dstyle">
                <form className="fstyle" onSubmit={this.handleClick}>
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
                <div>
                    <div ref={node => this.node = node}>
                        <h1 style={{textAlign:'center'}}>Feed</h1>
                        <div style={{textAlign:'center',display: 'block', border: "1px solid #ccc", margin:"20px"}}>
                            {this.state.title.map((item,index) => (
                               <div>
                                   {this.state.title[index]}
                                   <button onClick={(e)=>this.deleteFeed(index,e)}>
                                       delete
                                   </button>
                               </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            : null;
    }

}


export default MyAdminUI;