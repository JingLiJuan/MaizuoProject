import React,{Component} from 'react'
import styled from 'styled-components'
import '../../font/iconfont.css'

const DIV =styled.div`
	display:flex;
	height:100%;
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
	section{
		box-sizing:border-box;
		margin-top:0.44rem;
		flex:1;
		background:#fff;
	}
	`
class FilmOrder extends Component{
    render(){
        return <DIV>
        	<header>
        		<i className="iconfont icon-shangjiantou2" onClick={this.go}></i>
        		<span>电影订单</span>
        	</header>
        	<section>
        	</section>

        </DIV>
    }
}

export default FilmOrder