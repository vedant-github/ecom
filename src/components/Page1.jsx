import { styled } from "@material-ui/styles";
import { Card, Hidden, Typography } from "@mui/material";
import { borderRadius, Box, fontSize, shadows } from "@mui/system";
import React from "react";

import gallery_1 from '../assets/gallery_1.webp'
import gallery_2 from '../assets/gallery_2.webp'
import gallery_3 from '../assets/gallery_3.webp'
import gallery_4 from '../assets/gallery_4.webp'
import dimension_1_1 from '../assets/dimension_1_1.webp'
import box from '../assets/box.png'
import install from '../assets/install.png'

import { ArrowBackIosOutlined, } from "@material-ui/icons";


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

        <div style={{width:450,
           height:200,
           marginLeft:20,
           marginTop:-220,
           zIndex:10,
           boxShadow:'10 10 red',
           padding:50,           
           background:"#ffffff",
           color:'#07455f'}}>
            <p style={{fontSize:30}}>About the Product</p>
            <p style={{fontSize:16, color:'grey'}}>This plush and inviting L-Shaped Sofa has 
              luxurious soft upholstery which not only provides
              comfortable seating for long hours of lounging but
              also makes it a statement piece for your room</p>
        </div>

        <div style={{textAlign:'center',
         marginTop:40,
         color:'#07455f',
         fontSize:40}}> Details
        </div>

        <div style={{width:450,
           height:200,
           marginLeft:20,
           marginTop:60,
           zIndex:10,
           boxShadow:'10 10 red',
           padding:50,           
           background:"#ffffff",
           color:'#07455f'}}>
            <p style={{fontSize:40}}>Specifications</p>
            <pre style={{fontSize:16, color:'grey'}}>
              Size              L-Shape<br/>
              Color             Blue Opal<br/>
              Dimensions        255cm x 178cm x 86.5cm
              </pre>
            <img src={dimension_1_1} style={{width:500,
            marginLeft:-100,
            }}></img>  
        </div>


        <div style={{marginTop:400,
        alignItems:'center',
        textAlign:'center',
        width:320, }}>
        <img style={{width:80,
            marginBottom:50}} src={box} alt="logo" />
        <div>
          <b>Free Shipping</b><br/>
          We deliver the product at your doorstep, at no extra charge.
        </div>   </div>

        <div style={{marginTop:-200,
        marginLeft: '34%',
        alignItems:'center',
        textAlign:'center',
        width:320, }}>
        <img style={{width:80,
            marginBottom:50}} src={install} alt="logo" />
        <div>
          <b>Hassle-free Installation</b><br/>
          We assemble the product and clear away the packaging
          , leaving you to enjoy the product.
        </div>   </div>

        
        <div style={{marginTop:-200,
        marginLeft: '68%',
        alignItems:'center',
        textAlign:'center',
        width:320, }}>
        <img style={{width:80,
            marginBottom:50}} src={install} alt="logo" />
        <div>
          <b>Hassle-free Installation</b><br/>
          We assemble the product and clear away the packaging
          , leaving you to enjoy the product.
        </div>   </div>



       </div>

    )
}
