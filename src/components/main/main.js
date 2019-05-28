import React,{Component} from 'react'
import styled from 'styled-components'
import Movie from '../movie/movie'
import Chain from '../chain/chain'
import Sale from '../sale/sale'
import My from '../my/my'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import '../../font/iconfont.css'
var DIV  = styled.div`
  width:100%
`
var Ul = styled.ul`
 position:fixed;
  bottom:0;
    width:100%;
    height:0.49rem;
    display:flex;
    justify-conent:space-around;
    list-style:none;
    border-top: 1px solid #ededed;
    >li{
    	width:0.93rem;
    	height:100%;
    	display:flex;
    	flex-direction:column;
    	justify-content:center;
    	align-items:center;
    	>i{
    	    font-size:0.21rem;
    	}
    	>span{
                  color: #797d82;
                  font-size:0.1rem;
    	}
    }
`
class Footer extends Component{
	render(){
                  return   <DIV>
                                  <Switch>
                                    <Route path="/movie" component={Movie}/>
                                    <Route path="/chain" component={Chain}/>
                                    <Route path="/sale" component={Sale}/>
                                    <Route path="/my" component={My}/>
                                 </Switch>
                                 <Ul>
                                       <li>
                                          <i className="iconfont icon-dianying1"></i>
                                             <NavLink to="/movie"><span>电影</span></NavLink>
                                       </li>

                                       <li>
                                          <i className="iconfont icon-yingyuana"></i>
                                           <NavLink to="/chain"><span>影院</span></NavLink>
                                       </li>
                                       <li>
                                          <i className="iconfont icon-youhuiquan"></i>
                                           <NavLink to="/sale"><span>特惠</span></NavLink>
                                       </li>
                                       <li>
                                          <i className="iconfont icon-wode1"></i>
                                           <NavLink to="/my"><span>我的</span></NavLink>
                                       </li>
                                 </Ul>
                                
                             </DIV>
    
	}
}

export default Footer