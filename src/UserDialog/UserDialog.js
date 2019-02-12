import React, { Component } from 'react';
import {signUp, signIn} from "../initial/leanCloud";
import './UserDialog.css';


class UserDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'signUp',
            formData: {
                username: '',
                password: '',
                email: ''
            },
        };
    }

    // 切换tab页
    togger(event) {
        let value = event.target.value;
        this.setState({
            ...this.state,
            selected: value
        });
    }

    signUpOrIn(e) {
        e.preventDefault();
        let { onSignUp, onSignIn } = this.props;

        let { formData: {username, password}, selected} = this.state;
        console.log(123)
        let success = (user)=>{
            console.log(222, selected)
            if(selected === "signUp") {
                onSignUp.call(null, user);
            }
            if(selected === "signIn") {
                onSignIn.call(null, user);
            }
        }
        let error = (error)=>{
            console.log(error)
        }
        if(selected === "signUp") {
            signUp(username, password, success, error)
        }
        if(selected === "signIn") {
            signIn(username, password, success, error)
        }
    }


    changeFormDate(value, type) {
        let { formData } = this.state;

        if(type === "username") {
            Object.assign(formData, {
                username: value
            });
            this.setState({
                ...this.state,
                formData
            });
        }
        if(type === "password") {
            Object.assign(formData, {
                password: value
            });
            this.setState({
                ...this.state,
                formData
            });
        }
    }

    render(){
        let { selected } = this.state;
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <nav className="nav">
                        <label>
                            <input type="radio" value="signUp"  checked={selected === "signUp"} onChange={this.togger.bind(this)} />注册
                        </label>
                        <label>
                            <input type="radio" value="signIn"  checked={selected === "signIn"} onChange={this.togger.bind(this)} />登录
                        </label>
                    </nav>
                    <form className="form" onSubmit={(e) => this.signUpOrIn(e)} >
                        <div className="row">
                            <label><span className="title">用户名：</span><input type="text" onChange={(event) => this.changeFormDate(event.target.value, 'username')}/></label>
                        </div>
                        <div className="row">
                            <label><span className="title">密码：</span><input type="password" onChange={(event) => this.changeFormDate(event.target.value, 'password')} /></label>
                        </div>
                        <div className="row">
                            <button type="submit">
                                {selected === "signUp" ? '注册' : '登录'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserDialog;