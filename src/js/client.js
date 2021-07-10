import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component{
    render(){
        return(
            <div>
            <h1>it works</h1>
            </div>
        );
    }
}

const dom = document.getElementById("app");
ReactDom.render(<Layout/>, dom);