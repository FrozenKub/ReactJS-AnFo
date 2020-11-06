import React from "react";



class loginClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {login: "", password: ""}
    }


    render() {
        return (

            <div className="login-page">
            <img src="/public/AnFoLogo.png" className="logo"/>

            <div className="login">
                <div>
                    <input type="text" onChange={e=>{this.setState({login: e.target.value})}} name="username" placeholder="Username"/>
                </div>

                <div>
                    <input type="password" onChange={e=>{this.setState({password: e.target.value})}} name="password" placeholder="Password"/>
                </div>

            </div>

            <div><input type="submit" onClick={e=>{e.preventDefault(); alert(JSON.stringify(this.state))} } className="loginbutton" value="AUTHORIZE"/></div>
        </div>

        );
    }
}


export default loginClass;