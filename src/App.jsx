import react,{useEffect,useState} from "react";
import Sidebar from "./Sidebar.jsx";
import Card from "./Card.jsx";
import './app.scss'
import Order from "./Order.jsx";
import axios from "axios";
import Checkout from "./Checkout.jsx";




function App() {

  const [card, setcard] = useState([]);
  const [name, setname] = useState([]);
  const [price, setprice] = useState([]);
  const [serving, setserving] = useState([]);
  const [img, setimg] = useState([])
  const [number, setnumber] = useState([])
  let [counterr, setcounterr] = useState(0)
  let [cardview, setcardview] = useState(true)
  let [vcart, setvcart] = useState(false)
  const [vmenu, setvmenu] = useState(false)

  let [view,setview] =useState(true);





useEffect(() => {
  const getall = async () => {

const res = await axios.get('https://cors-anywhere.herokuapp.com/https://4917ouizol.execute-api.ap-south-1.amazonaws.com/default/projectAPIs', {
headers: {
  'x-api-key': 'tVgyl8QS8T3SVxD9XPsWs7xE5Y68YVovaIUxyY41',

}
});

setcard(res.data.meals);
   console.log(res.data);
   console.log(card,'hhhhhh');

  };
  getall();

}, []) 



  return (
    <>
 
    

    
    <div className="App">
      <div className="sidebar">
<Sidebar view={view} setview={setview} setcardview={setcardview}  setvcart={setvcart} vcart={vcart} vmenu={vmenu} setcardview={setcardview} setvmenu={setvmenu}/>




</div>

{
(cardview&&!vcart) ?

 <div className="caard">
{card.map((eachcard) => (
              <Card eachcard={eachcard} counterr={counterr} vcart={vcart} setnumber={setnumber} number={number} setserving={setserving} setprice={setprice} setname={setname} setimg={setimg} setcounterr={setcounterr} name={name} serving={serving} price={price} img={img}/>

            ))}
</div>
:
<div style={{width:"0"}}> </div>
}
<div className="order">
<Order setview={setview} view={view} setcardview={setcardview} number={number} vcart={vcart} setnumber={setnumber} serving={serving} setvcart={setvcart} counterr={counterr} price={price} name= {name} img={img}/>


</div>  

    </div>

    </>
  );
}

export default App;