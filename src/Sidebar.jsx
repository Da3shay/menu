import React,{useState} from 'react'
import './sidebar.scss'
import './sidebar.js'

export default function Sidebar({setvcart,vcart,setvmenu,setcardview,view,setview }) {

  const viewcart=()=>{
    setvcart(true)
  }

  const viewmenu=()=>{
  
    setcardview(true)
    setvcart(false)
    setview(true)



  }

  return (


      <div class="container">
      <nav class="side-nav">
        <ul class="nav-menu">
  
          <li class="nav-item"  onClick={(e)=>{viewmenu(e)}}><a href="#"><i class="fas fa-tachometer-alt"></i><span class="menu-text">Menu</span></a></li>
          <li class="nav-item" onClick={(e)=>{viewcart(e)}}><a href="#"><i class="fas fa-user"></i><span class="menu-text">Cart</span></a></li>
       
        </ul>
      </nav>
    </div>
    )
}
