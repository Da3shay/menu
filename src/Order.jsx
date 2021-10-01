import React,{useState,useEffect} from 'react'
import './order.scss'
import Increment from './Increment'
import Cartcard from './Cartcard'

  
export default function Order({img,name,price,serving,counterr,setnumber,number,setcardview,vcart,setvcart,view,setview} ) {
 
 

  let sum=0;
  // const quanarr =new Array;
//  let [quantity, setquantity] = useState([1])   ;
//  const settquantii=()=>{
 

//   for (let i = 0; i <price.length; i++) {

//     setquantity([...quantity+1]);
  
//   }
 

// }


const remove=(ind)=>{
  name[ind]=0
  price[ind]=''
  serving[ind]=''
  img[ind]=''
 


}
const display=()=>{
 setview(!view)
 setcardview(false)
 setvcart(true)

}


const calsum= (arrr)=>{

 

     sum+=arrr
 
}

return (
  
  <>
{vcart?
(

         
  counterr   ?
   <div className="posi "  >
   
   
   
          
               <div className="cartdisp">
               <h3  className="iad" >  Items added are:</h3>
               <div className="cartcomt">
   
   
   
   <div >
   {img.map((eachimg,{counterr}) => (
      <div className="one" style={{height:"100px"}}>
      <img src={eachimg} alt="" key={counterr}  style={{width:"100px",}}/>
       <hr />
      </div>
   
    ))}
   
   
       </div>
   <div > 
   {name.map((eachname,{counterr}) => (
    <div className="two" style={{height:"100px",padding:"16px"}}>
    <div  key={counterr} className="cname" style={{fontSize:"24px"}} > {eachname}</div> 
   
   <hr />
     </div>
   
    ))}
   </div>
   <div>
   
   {serving.map((eachserving,{counterr}) => (
   <div className="two" style={{height:"100px",marginLeft:"20px",marginRight:"30px",padding:"16px"}}>
   <div className="cname" key={counterr} style={{fontSize:"24px"}}> {eachserving}</div> 
   <hr />
      </div>
    ))}
   
   </div>
   
   <div> 
   
   
   
   
   
   
   </div>
   
    <div >
    {price.map((eachprice,ind) => (
   <div className="three " style={{display:"flex",padding:"16px",height:"100px"}}>
    {console.log(ind,'fdsd')}
   
   
   <div key={counterr } className="cname" style={{fontSize:"24px"}} > ₹  {eachprice} {calsum(eachprice)} </div>
   <div><button type="button"  className="btn-close " aria-label="Close" style={{width:"25px",marginLeft:"30px"}}></button></div>
            <hr />
            </div>
    ))}
    </div>
   
    
   
   </div> 
   <div style={{display:'flex',justifyContent:"space-around",fontWeight:"bold",margin:"30px 0"}}>
               {/* <div style={{fontSize:"24px"}}>Total: </div> */}
   
               {/* <div style={{fontSize:"24px"}}> ₹  {sum}</div> */}
   
   
   
               </div>
   
   
   
               </div>
           </div>
   
   :
   <div className="cartcont2" >  Nothing in cart... Add something from menu</div> 
   
         
  )
:
<div></div>
}

{
  (view && !vcart)  ?




        <div className="order">
           <div className="heading"> My Order</div>
           < hr className="hrhead"/>
           <div className="cartcomt">

     

           <div >
           {img.map((eachimg,{counterr}) => (
              <div className="one">
              <img src={eachimg} alt="" key={counterr}  style={{width:"40px",}}/>
               <hr />
              </div>

            ))}
             
               
               </div>
           <div > 
           {name.map((eachname,{counterr}) => (
            <div className="two">
            <div  key={counterr} className="cname"> {eachname}</div> 
         
          <hr />
             </div>

            ))}
 </div>
 <div>
    
         {serving.map((eachserving,{counterr}) => (
        <div className="two">
           <div className="cname" key={counterr}> {eachserving}</div> 
           <hr />
              </div>  
            ))}

</div>

           <div> 

          

           <div >
        
            {number.map((eachquantity,counterr) => (
          <div className="three" style={{display:"flex"}}>
         
               {/* {settquantii()} */}
          <div key={counterr}>  <Increment setnumber={setnumber} number={eachquantity} />
        
         
         
        

         
          
      
        
         
      
          </div>
          
     
          
          
                    <hr />

                    </div>
            ))}
           
            </div>


           </div>

            <div >
            {price.map((eachprice,ind) => (
          <div className="three" style={{display:"flex"}}>
            {console.log(ind,'fdsd')}


          <div key={counterr}>  ₹  {eachprice} {calsum(eachprice)} </div>
          <div><button type="button"  className="btn-close " aria-label="Close" style={{width:"1px",marginLeft:"4px"}}></button></div>
                    <hr />
                    </div>
            ))}
            </div>
           
        </div> 





            <div style={{display:'flex',justifyContent:"space-around",fontWeight:"bold",margin:"30px 0"}}>
            <div>Total: </div>
           
            <div> ₹  {sum}</div>



            </div>

            <button type="button" onClick={(e)=>{display(e)}} className="btn btn-success" style={{borderRadius:"50px",backgroundColor:"#32CD32",height:"30px",fontSize:"12px",width:"100%"}}>Checkout</button>
           
           
           
           
           
         
        </div>
           : 
          ( vcart?
           (

         
           counterr   ?
            <div className="posi "  >
            
            
            
                   
                        <div className="cartdisp">
                        <h3  className="iad" >  Items added are:</h3>
                        <div className="cartcomt">
            
            
            
            <div >
            {img.map((eachimg,{counterr}) => (
               <div className="one" style={{height:"100px"}}>
               <img src={eachimg} alt="" key={counterr}  style={{width:"100px",}}/>
                <hr />
               </div>
            
             ))}
            
            
                </div>
            <div > 
            {name.map((eachname,{counterr}) => (
             <div className="two" style={{height:"100px",padding:"16px"}}>
             <div  key={counterr} className="cname" style={{fontSize:"24px"}} > {eachname}</div> 
            
            <hr />
              </div>
            
             ))}
            </div>
            <div>
            
            {serving.map((eachserving,{counterr}) => (
            <div className="two" style={{height:"100px",marginLeft:"20px",marginRight:"30px",padding:"16px"}}>
            <div className="cname" key={counterr} style={{fontSize:"24px"}}> {eachserving}</div> 
            <hr />
               </div>
             ))}
            
            </div>
            
            <div> 
            
            
            
            
            
            
            </div>
            
             <div >
             {price.map((eachprice,ind) => (
            <div className="three " style={{display:"flex",padding:"16px",height:"100px"}}>
             {console.log(ind,'fdsd')}
            
            
            <div key={counterr } className="cname" style={{fontSize:"24px"}} > ₹  {eachprice} {calsum(eachprice)} </div>
            <div><button type="button"  className="btn-close " aria-label="Close" style={{width:"25px",marginLeft:"30px"}}></button></div>
                     <hr />
                     </div>
             ))}
             </div>
            
             
            
            </div> 
            <div style={{display:'flex',justifyContent:"space-around",fontWeight:"bold",margin:"30px 0"}}>
                        <div style={{fontSize:"24px"}}>Total: </div>
            
                        <div style={{fontSize:"24px"}}> ₹  {sum/2}</div>
            
            
            
                        </div>
            
            
            
                        </div>
                    </div>
            
            :
            <div className="cartcont2" >  Nothing in cart... Add something from menu</div> 
            
                  
           )
           :
           <div>""</div>)
           }
        </>

           


    )
}