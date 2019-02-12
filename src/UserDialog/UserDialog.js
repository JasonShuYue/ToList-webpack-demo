import React, { Component } from 'react';
import './UserDialog.css';


class UserDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'SignUp'
        };
    }

    togger(event) {
        let { selected } = this.state;
        let value = event.target.value;
        this.setState({
            selected: selected === "SignUp" ? 'SignIn' : 'SignUp'
        })
    }

    signUp(e) {
        
    }

    render(){
        let { selected } = this.state;
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <nav className="nav">
                        <label><input type="radio" value="signUp" checked={selected === "SignUp"} onChange={this.togger.bind(this)} />注册</label>
                        <label><input type="radio" value="signIn" checked={selected === "SignIn"} onChange={this.togger.bind(this)} />登录</label>
                    </nav>
                    <form className="form">
                        <div className="row">
                            <label><span className="title">用户名：</span><input type="text"/></label>
                        </div>
                        <div className="row">
                            <label><span className="title">密码：</span><input type="password"/></label>
                        </div>
                        <div className="row">
                            <button type="submit">{selected === "SignUp" ? '注册' : '登录'}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserDialog;