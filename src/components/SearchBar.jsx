import {React, useState} from "react";
import { useNavigate } from "react-router-dom";

import {IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ()=>(
    <Paper 
        component="form"
        onSubmit={()=>{}}
        sx={{
            borderRadius:20,
            boarder:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}
        }}
    >
        <InputBase
            className="search-bar"
            placeholder="Search..."
            value=""
            onChange={()=>{}}
            
        />
        <IconButton type="submit" sx={{p:'10px', color:'red'}}>
            <SearchIcon/>
        </IconButton>

    </Paper>
)

export default SearchBar;