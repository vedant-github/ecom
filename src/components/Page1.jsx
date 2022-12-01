import { styled } from "@material-ui/styles";
import { Card, Hidden, Typography } from "@mui/material";
import { borderRadius, Box, shadows } from "@mui/system";
import React from "react";

import gallery_1 from '../assets/gallery_1.webp'
import gallery_2 from '../assets/gallery_2.webp'
import gallery_3 from '../assets/gallery_3.webp'
import gallery_4 from '../assets/gallery_4.webp'
import { ArrowBackIosOutlined, NoEncryption } from "@material-ui/icons";


export default function Page1() {
    return(
       <div style={{marginTop:100, marginLeft:50}}>
        <div style={{color:'#07455f'}}>
           <ArrowBackIosOutlined style={{fontSize:13}}/> 
           Back to Sofas
        </div>
         <img src={gallery_1} 
         style={{width:300,
          background:'#eaeff3',
          margin:20,
          borderRadius:20}} ></img>
         <img src={gallery_2}  style={{width:300,
          background:'#eaeff3',
          margin:20,
          borderRadius:20}}></img>
         <img src={gallery_3}  style={{width:300,
          background:'#eaeff3',
          margin:20,
          position:"absolute",
          zIndex:-1,
          borderRadius:20}}>
          </img>
         <img src={gallery_4}  style={{width:300,
          background:'#eaeff3',
          marginTop:20,
          marginLeft:360,
          position:"absolute",
          zIndex:-1,
          borderRadius:20}}>
        </img>
        
        <div style={{width:450,
           height:200,
           marginLeft:750,
           marginTop:-70,
           zIndex:10,
           borderRadius:20,
           boxShadow:'10 10 red',
           padding:50,           
           background:"#ffffff",
           color:'#07455f',
           boxShadow: `2px 2px 2px 2px grey`}}>
            <h2>Eclectic Glamour L-Shape Sofa</h2>
            <h3>₹ 108,999 </h3>
            <p>5% OFF</p>
            <p>Check Delivery</p>
            <input style={{background:'transparent',
            border:'none',
          }} placeholder="Enter Pincode"></input>
          <button style={{background:'#e78764',
          borderRadius:20,
          border:'none',
          fontSize:20,
          color:'white',
          padding:10,
          marginLeft:100,
          marginTop:-20,
          }}
          >Add to Cart</button>
        </div>

        <div styles={{width:450,
           height:60,
           marginLeft:50,
           borderRadius:20,
           padding:50,           
           background:"#ffffff",
           color:'#07455f',
           border: '2px solid red'}}>
          <h4>About the Product</h4>
          <h5>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Dicta veritatis non ab voluptates 
            temporibus adipisci blanditiis doloremque, sapiente nul
            la quos minus enim quasi commodi assumenda deserunt molestias
             tempore. Sapiente fuga eligendi blanditiis!</h5>
        </div>

       </div>

    )
}
