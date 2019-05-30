import React,{Component} from 'react'
import styled from 'styled-components'
import '../../font/iconfont.css'
const DIV =styled.div`
	header{
		width:100%;
		background:#fff;
		height:0.44rem;
		line-height:0.44rem;
		position:fixed;
		display:flex;
		justify-content:center;
		align-items:center;
		top:0;
		left:0;
		i{
			
			position:absolute;
			left:0.15rem;
		}

	}
	.tx{
		width:100%;
		height:0.7rem;
		box-sizing:border-box;
		margin-top:0.54rem;
		padding:0 0.15rem;
		display:flex;
		justify-content:space-between;
		align-items:center;
		background:#fff;
		span{
			font-size:0.15rem;
		}
		img{
			width:0.5rem;
			height:0.5rem;
			border-radius:50%;
		}
	}
	.nc{
		width:100%;
		height:0.49rem;
		box-sizing:border-box;
		padding: 0 0.15rem;
		display:flex;
		justify-content:space-between;
		align-items:center;
		background:#fff;
		border-bottom:0.01rem solid #f1f1f1;
		span{
			font-size:0.15rem;
		}
		.right{
			color:#797d82;
		}
	}
`


class User extends Component{
	constructor(props){
		super(props);
		this.go=this.go.bind(this);
	}
	go(){
		this.props.history.go(-1);
	}
    render(){
        return <DIV>
        	<header>
        		<i className="iconfont icon-shangjiantou2" onClick={this.go}></i>
        		<span>我的资料</span>
        	</header>

        	<div className="tx">
        		<span>头像</span>
        		<img src="https://mall.s.maizuo.com/aec6406c7d3a3cb8520bdb165f42f977.jpg"/>
        	</div>
        	<div className="nc">
        		<span className="left">昵称</span>
        		<span className="right">{sessionStorage.getItem("user")}</span>
        	</div>
        	<div className="nc">
        		<span className="left">性别</span>
        		<span className="right">未设置</span>
        	</div>
        	<div className="nc">
        		<span className="left">出生日期</span>
        		<span className="right">未设置</span>

        	</div>

        </DIV>
    }
}

export default User