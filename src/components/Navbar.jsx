import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "./utils/constants";
import SearchBar from "./SearchBar";

const Navbar =()=>(
    <Stack direction="row" alignItems="center" p={1}  sx={{position:'sticky' ,background:'#000', top:3, justifyContent:'space-between'}}>
    <Link to="/" style={{display:'flex', alignItems:'center'}}>
        <img src={logo} height={45}/>
    </Link>
    <SearchBar/>
    </Stack>
    
)


export default Navbar;