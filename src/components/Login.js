import React,{Component} from 'react';
import { withRouter } from "react-router-dom";


class Login extends Component{

    signin=()=>{
        console.log(this.props)
        this.props.history.push("/Library");
    }

    login=()=>{
        
        this.props.history.push("/Register");
    }

    render()
    {
        return(
            <div>
            <div>            
                <h1>LOGIN FORM</h1>
                    <table>
                        <tr>
                            <td>USERNAME :</td>
                            <td><input type="text" placeholder ="ENTER USERNAME"/></td>
                        </tr>
                        <tr>
                            <td>PASSWORD :</td>
                            <td><input type="password" placeholder="ENTER PASSWORD"/></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.signin}>LOG IN</button></td>
                            <td><button onClick={this.login}>REGISTER</button></td>
                        </tr>                                  
                    </table>
              </div>
              </div>

            
        );
        
    }
}
export default withRouter(Login);