import React,{Component} from 'react'
import styled from 'styled-components'
const DIV=styled.div`
    background:#fff;
    height:100%;
    .imgWrap{
       height:0.6rem;
        width:100%;
        // margin:0.79rem auto 0.4rem;
        padding:0.79rem;
        text-align:center;
        line-height:0.6rem;
        box-sizing:border-box;
        display:flex;
        justify-content:center;
        // background:#fff; 
        >img{
        width:0.6rem;
        height:0.6rem;
        }
    }
    .userWrap{
        line-height:0.55rem;
        margin: 0 0.25rem;
        border-bottom:0.01rem solid #f1f1f1;

        .user{
            height:0.15rem;
            line-height:0.15rem;
            width:100%;
            padding:0.2rem 0;
            font-size:0.15rem;
            color:#191a1b;
            border:0;
            outline-width:0;
        }
    }
    .loginWrap{
        margin:0.7rem 0.25rem 0;
        line-height:0.45rem;
        font-size:0.16rem;
        border-radius:0.03rem;
        text-align:center;
        background-color:#ff5f16;
        height:0.44rem;
        color:#fff;
        border:none;
    }
    
    
`
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            user: ' '
        }
        this.submit=this.submit.bind(this);
        
    }
    componentDidMount(){
        console.log(this.node.value)
        
    }
    submit(){
        console.log("aaa");
        this.setState({
            user:this.node.value
        })
        console.log(this.node.value);
        console.log(this.state.user);
        if(this.node.value==="")  return;
        if(this.node.value==="maizuo"){
            console.log(this.state.user);
            sessionStorage.setItem('user',this.node.value);
            this.props.history.push('/my');
        }
    }
    render(){
        return <DIV>
            <div className="imgWrap">
                <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"/>
            </div>
            <div className='userWrap'>
                <input className="user" type="text" placeholder="用户名"   ref={(node)=>this.node=node}  />         
            </div>
            <div className='loginWrap'>
                <span onClick={this.submit}  className="login">登录</span>
            </div>
        </DIV>
    }
}

export default Login