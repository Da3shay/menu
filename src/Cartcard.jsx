import React from 'react'
import './cartcard.scss'
import Increment from './Increment'

export default function Cartcard(cartimg,cartname,cartprice,cartserving) {
    return (
        <div>
          <div className="cartcomt">
           <div><img src={cartimg} alt=""  style={{width:"40px",}}/></div>
           <div> 

           <div className="cname"> {cartname}</div> 
         <div className="wt"> {cartserving}</div> 


           </div>
           <div> 
               <Increment/>

           </div>
            <div> {cartprice}</div>
            <div><button type="button" className="btn-close " aria-label="Close" style={{width:"1px"}}></button></div>
        </div> 

        </div>
    )
}
