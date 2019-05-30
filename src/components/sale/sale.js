import React,{Component} from 'react'
import styled from 'styled-components'
import store from '../../store'
const Head  = styled.div`
    width: 100%;
    >img{
        width:100%;
        height:4.8rem;
    }

`
const Img1 = styled.img`
    width:100%;
    height: 0.515rem;
`

const Img2 = styled.img`
  
            width:100%;
            height:2.85rem;
`
class Sale extends Component{
            constructor(props){
                super(props);
                this.state={
                    imgUrl:store.getState().sale.imgUrl
                    
                }
                console.log(this.state.n)
            }
            
	render(){
                        console.log(this.state.n);
		return <div>{store.getState().sale.n}
                                      <Head>
                                            <img src="https://static.maizuo.com/operator/maizuo0509/卖座特惠H5-2版_01.jpg"/>
                                        </Head>
                                        <div>
                                            <Img1 src="https://static.maizuo.com/operator/maizuo0509/卖座特惠H5-2版_02.jpg"/>
                                        </div>
                                        <ul>
                                            <li>
                                                {
                                                    this.state.imgUrl.map((item,index)=>{
                                                            return <Img2 src={item} key={index}/>
                                                    })
                                                }
                                            </li>
                                        </ul>
                                    
                                       
                            </div>
	}
}


export default Sale