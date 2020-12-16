import React,{Component} from 'react';
import { withRouter } from "react-router-dom";

class Register extends Component{

    register=()=>{
        this.props.history.push("/");
    }

    render()
    {
        return(
            <div>
            <div>
            <h1>REGISTRATION</h1>
                <div>
                    <table>
                        <tr>
                            <td>USERNAME : </td>
                            <td><input type="text" placeholder ="ENTER USERNAME" onChange={(e)=>{this.setState({email: e.target.value})}}/></td>
                        </tr>
                        <tr>
                            <td>PASSWORD  : </td>
                            <td><input type="password" placeholder="ENTER PASSWORD" onChange={(e)=>{this.setState({password: e.target.value})}} /></td>
                        </tr>
                        <tr>
                            <td>MAIL ID : </td>
                            <td><input type="text" placeholder="ENTER MAIL ID" onChange={(e)=>{this.setState({mail: e.target.value})}} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button onClick={this.register}>REGISTER</button></td>
                            </tr>
                    </table>                                  
                </div>
            </div>
            </div>
            
        );
        
    }
}
export default withRouter(Register);