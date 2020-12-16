import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Library extends Component {

  enter=()=>{
    console.log(this.props)
    this.props.history.push("/Book");
}
          render() {
                    return (
                      <div>
                      <h1>SEARCH BOOKS</h1> 
                      <form>
                        <p>ENTER BOOK NAME</p>
                        <input type="text" placeholder="ENTER BOOK NAME" />
                        <p>ENTER AUTHOR NAME </p> 
                        <input type="text" placeholder ="ENTER AUTHOR NAME"/>
                        <p>ENTER BOOK CODE</p>
                        <input type="number" placeholder="ENTER BOOK CODE"/>
                        </form>     
                        <button onClick={this.enter}>SUBMIT</button>
                        </div>
                    );
          }
        }
export default withRouter(Library);