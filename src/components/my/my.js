import React,{Component} from 'react'
import styled from 'styled-components'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import FilmOrder from '../filmOrder/filmOrder'
import GoodOrder from '../goodOrder/goodOrder'

import '../../incofont/iconfont.css'
const DIV = styled.div`
    background:#f4f4f4
`

const DIV1 = styled.div`
    width:100%;
    height:2rem;
    background-image:URL(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png)  ;
    background-size: 100% 2rem;
    display:flex;
    box-sizing:border-box;
    padding-left:0.22rem;
    align-items:center;
    >img{
        width:0.67rem;
        height:0.67rem;
        display:inline-block;
        border-radius:50%;
        border:0.02rem solid #fff;
        margin-right:0.2rem;
    }
    >span{
        color:#fff;
    }
    
`
const Ul = styled.ul`
    width:100%;
    display:flex;
    height:0.79rem;
    background:#fff;
    margin-bottom:0.1rem;
    >li{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
          >i{
            font-size:0.21rem;
            margin-bottom:0.03rem;
         }
         >a{
                color:#797d82;
                >span{
                      color: #797d82;
                      font-size:0.16rem;
            }
         }
        

    }
`
const DIV2 = styled.section`
        width:100%;
        height:0.49rem;
        background:#fff;
        display:flex;
        align-items:center;
        box-sizing:border-box;
        padding:0 0.1rem;
        >i{
            font-size:0.21rem;
            color:orange;
        }
        >a{
            margin-left:0.15rem;
            font-size:0.15rem;
            color:#191A1B;
        }
`
function AuthLogin(Com) {
    return class extends Com{
        render(){
            if(sessionStorage.getItem("user")){
                return super.render();
            }
            else{
                return <Redirect to="/login" />
            }
        }
    }
}
class My extends Component{
	render(){
		return <DIV>

                                        <NavLink to="/user">
                                            <DIV1>
                                                
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC"/>
                                                    <span >{sessionStorage.getItem('user')?sessionStorage.getItem('user'):'立即登录'}</span>
                                                    
                                            </DIV1>
                                            </NavLink>
                                        <Ul>
                                                <li>
                                                        <i className="iconfont icon-dianyingpiao"></i>
                                                        <NavLink to="/filmOrder" ><span>电影订单</span></NavLink>
                                                </li>
                                                <li>
                                                        <i className="iconfont icon-shangpindingdan"></i>
                                                        <NavLink to="/goodOrder" ><span>商品订单</span></NavLink>
                                                </li>
                                        </Ul>
                                        <DIV2>
                                                <i className="iconfont icon-icon"></i>
                                                <NavLink to="/user/card" ><span>卖座卡</span></NavLink>
                                        </DIV2>
                                         <DIV2>
                                                <i className="iconfont icon-hongbao"></i>
                                                <NavLink to="/user/redPacket" ><span>组合红包</span></NavLink>
                                        </DIV2>
                                         <DIV2>
                                                <i className="iconfont icon-yue"></i>
                                                <NavLink to="/user/balance" ><span>余额</span></NavLink>
                                        </DIV2>
                                         <DIV2>
                                                <i className="iconfont icon-shezhi"></i>
                                                <NavLink to="/user/set" ><span>设置</span></NavLink>
                                        </DIV2>
                                    </DIV>
	}
}

export default My