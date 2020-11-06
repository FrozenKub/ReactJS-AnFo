import React from "react";

const TrueCode = "123";

class redeemCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {code: ""}
    }


    handleSubmit(props) {
        if (props == TrueCode)
        {
            alert('We accepted your code: ' + this.state.code);
        }
        else alert('No, wrong code, bruh')
    }

    render() {
        return (

            <div className="login-page">
                <img src="/public/AnFoLogo.png" className="logo"/>

                <div className="login">
                    <div>
                        <input type="text" onChange={e=>{this.setState({code: e.target.value})}} name="code" placeholder="Code"/>
                    </div>

                </div>
                <div><input type="submit" onClick={e=>{e.preventDefault(); this.handleSubmit(this.state.code)} } className="loginbutton" value="REDEEM"/></div>
            </div>
        );
    }
}

export default redeemCode;