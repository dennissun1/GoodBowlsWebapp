import React from 'react';

class My_Feed extends React.Component {


    constructor (props){
        super(props);
        this.getFeedData = this.getFeedData.bind(this);
        this.state = {id:[], title:[], feed:[], date:[]};
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
                    for(var i=4; i<res.length; i++){
                        this.setState({id:[...this.state.id, res[i].id]});
                        this.setState({title:[...this.state.title, res[i].title]});
                        this.setState({feed:[...this.state.feed, res[i].announcement]});
                        this.setState({date:[...this.state.date, res[i].today]});
                    }
                }
            }
        }.bind(this);
    }

    componentWillMount() {
        this.getFeedData();
    }

    render() {
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Feed</h1>
                <div style={{textAlign:'center',display: 'block', border: "1px solid #ccc", margin:"20px"}}>
                    {this.state.title.map((item,index) => (
                        <div>
                            <h2 style={{fontSize:'20px'}}>{item}</h2>
                            {this.state.feed[index]}
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default My_Feed;