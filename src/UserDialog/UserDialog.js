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
            error: ""
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

    // 注册/登录操作
    signUpOrIn(e) {
        e.preventDefault();
        let { onSignUp, onSignIn } = this.props;

        let { formData: {email, username, password}, selected} = this.state;
        let success = (user)=>{
            if(selected === "signUp") {
                onSignUp.call(null, user);
            }
            if(selected === "signIn") {
                onSignIn.call(null, user);
            }
        }
        let error = (error)=>{
            let temp = '';
            switch(error.code) {
                case 125:
                    temp = "电子邮箱地址无效";
                    break;
                case 200:
                    temp = "用户名或者用户名为空";
                    break;
                case 201:
                    temp = "请填写密码";
                    break;
                case 202:
                    temp = "用户名已经被占用";
                    break;
                case 210:
                    temp = "用户名和密码不匹配";
                    break;
                case 219:
                    temp = "登录失败次数超过限制，请稍候再试，或者通过忘记密码重设密码";
                    break;
                default:
                    temp = error.rawMessage;
            };
            this.setState({
                ...this.state,
                error: temp
            });
        }
        if(selected === "signUp") {
            signUp(email, username, password, success, error)
        }
        if(selected === "signIn") {
            signIn(username, password, success, error)
        }
    }


    changeFormDate(value, type) {
        let { formData } = this.state;
        formData[type] = value;
        this.setState({
            ...this.state,
            formData
        });
    }

    render(){
        let { selected, error} = this.state;
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
                        {
                            selected === "signUp" &&
                            <div className="row">
                                <label><span className="title">Email：</span><input type="text" onChange={(event) => this.changeFormDate(event.target.value, 'email')}/></label>
                            </div>
                        }
                        <div className="row">
                            <label><span className="title">用户名：</span><input type="text" onChange={(event) => this.changeFormDate(event.target.value, 'username')}/></label>
                        </div>
                        <div className="row">
                            <label><span className="title">密码：</span><input type="password" onChange={(event) => this.changeFormDate(event.target.value, 'password')} /></label>
                        </div>
                        {
                            error && <p className="error">{error}</p>
                        }
                        <div className="row">
                            <button type="submit" className="submit">
                                {selected === "signUp" ? '注册' : '登录'}
                            </button>
                            {
                                selected === "signIn" && <a href="javascript:;">忘记密码了？</a>
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserDialog;