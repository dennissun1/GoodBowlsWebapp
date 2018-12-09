import React from 'react';
import './MyAdminStyle.css';

class MyAdminUI extends React.Component {

    constructor (props){
        super(props);
        this.state = {isAuthenticated:false, new_title:'', feed:'', new_address:'', new_type:'', new_name:'', new_latitude:'', new_longitude:'', id:[], title:[], address:[], type:[]};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleFeedChange = this.handleFeedChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickStore = this.handleClickStore.bind(this);
        this.getFeedData = this.getFeedData.bind(this);
       // this.getStoreData = this.getStoreData.bind(this);
    }

    componentWillMount() {
        this.checkAuth();
        this.getFeedData();
        //this.getStoreData();
    }

    handleTitleChange(event){
        this.setState({new_title:event.target.value})
    }

    handleFeedChange(event){
        this.setState({feed:event.target.value})
    }

    handleAddressChange(event){
        this.setState({new_address:event.target.value})
    }
    handleNameChange(event){
        this.setState({new_name:event.target.value})
    }

    handleTypeChange(event){
        this.setState({new_type:event.target.value})
    }

    handleLatitudeChange(event){
        this.setState({new_latitude:event.target.value})
    }

    handleLongitudeChange(event){
        this.setState({new_longitude:event.target.value})
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

    handleClickStore(event){
        event.preventDefault();
        let url = "/api/newstore";
        var params = "address=" + this.state.new_address + "&name=" + this.state.new_name + "&type=" + this.state.new_type + "&latitude=" + this.state.new_latitude + "&longitude=" + this.state.new_longitude;
        let http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(params);
        http.onload = function (e) {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    let res = http.response;
                    if(res === "success"){
                        this.setState({new_address:''});
                        this.setState({new_name:''});
                        this.setState({new_type:''});
                        this.setState({new_latitude:''});
                        this.setState({new_longitude:''});
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

    // getStoreData(){
    //     let url = "/api/mapapi";
    //     let http = new XMLHttpRequest();
    //     http.open("GET", url, true);
    //     http.send();
    //     http.onload = function (e) {
    //         if (http.readyState === 4) {
    //             if (http.status === 200) {
    //                 let res = JSON.parse(http.response);
    //                 if (this.map) {
    //                     for (let row of res) {
    //                         if (row.type === "store") {
    //                             this.setState({address:[...this.state.address,row.address]});
    //
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

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
                <div className="dstyle">
                <form className="fstyle" onSubmit={this.handleClickStore}>
                    <div>
                        ENTER NEW STORE
                    </div>
                    <div>
                        Address
                    </div>
                    <input type="text" value={this.state.new_address} onChange={this.handleAddressChange} placeholder="Enter Address" style={{width: '70%', height: '30px'}}/>
                    <br/>
                    <div>
                        Name
                    </div>
                    <input type="text" value={this.state.new_name} onChange={this.handleNameChange} placeholder="Enter Name" style={{width: '70%', height: '30px'}}/>
                    <br/>
                    <div>
                        Type
                    </div>
                    <input type="text" value={this.state.new_type} onChange={this.handleTypeChange} placeholder="Enter word store" style={{width: '80%', height: '30px'}}/>
                    <br/>
                    <div>
                        Latitude
                    </div>
                    <input type="number" value={this.state.new_latitude} onChange={this.handleLatitudeChange} placeholder="Enter latitude" style={{width: '70%', height: '30px'}}/>
                    <br/>
                    <div>
                        Longitude
                    </div>
                    <input type="number" value={this.state.new_longitude} onChange={this.handleLongitudeChange} placeholder="Enter Longitude" style={{width: '70%', height: '30px'}}/>
                    <br/>
                    <input type = "submit" value = "Add Store" />
                </form>
            </div>
            </div>
            : null;
    }

}


export default MyAdminUI;