import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

import icon from './icon.png';
import { Search, PersonOutline, PlaceOutlined} from "@material-ui/icons";

const Stylednavbar = styled(AppBar)`
    background: #ffffff;
    height: 4vw;
`;

const Logo = styled(Box)`
`;

const Headtext = styled(Typography)`
  color: #07455f;
  margin-left: 5vw;
  font-size: 1.5rem;
  font-weight: 500;
  
`;

const Headicon = styled(Typography)`
  color: black;
  font-size: 1.5rem;
  margin-left: 2vw;
`;

const navbar = () => {
    return (
      <Stylednavbar>
        <Toolbar>
            <Logo>
                <img src={icon} alt="logo" style={{width:30}}/> 
            </Logo>

            <Headtext>Collections</Headtext>
            
            <Headtext>Products</Headtext>

            <div style={{marginLeft:900}}></div>

            <Headicon>
           < PlaceOutlined/></Headicon>
           <Headicon>< Search /></Headicon>
           <Headicon><PersonOutline/></Headicon>
           


        </Toolbar>
        </Stylednavbar>
    )
}

export default navbar;