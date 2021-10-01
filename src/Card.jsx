import { data } from 'jquery'
import React from 'react'
import './card.scss'

export default function Card({eachcard,counterr,setcounterr,setnumber,setserving,setprice,setname,setimg,name,number,serving,img,price} ) {
const alldata =(e)=>{
    setname([...name, eachcard.title]);
    setprice([...price, eachcard.price]);
    setserving([...serving, eachcard.servingSize]);
    setimg([...img, eachcard.image]);
    setnumber([...number,eachcard.servings.number])
    setcounterr(counterr+1)

}


    return (
        

       <div className="card " style={{width: "max-content",height:"240px", backgroundColor:"#FFB6C1", textAlign:"center",marginBottom:"20px",marginRight:"40px",borderRadius:"20px",zIndex:"20"}}>
  <div className="card-body">
      <img src={eachcard.image} alt=""  style={{width:"80px",zIndex:"-5",marginTop:"10px"}}/>
      <div  className="namesize">
   <p  className="name" >{eachcard.title}</p>
      <div className="sizee"> {eachcard.servingSize}</div>

      </div>
<div style={{display:"flex",flexDirection:"column"}}>
    <p className="price">  ₹ {eachcard.price}</p>
    <button className="cartbtn" onClick={(e)=> {alldata(e)}} >Add to cart +</button>

    </div>
    


  </div>
</div>

    )
}