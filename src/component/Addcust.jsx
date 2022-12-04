import { Button, Grid, TextField } from "@mui/material";
import React from "react";

export const Addcust=()=>{
return(
    <div className="sub" >
        <Grid container spacing={2} >
        <Grid item sx={3}> <TextField variant="outlined" fullWidth label="First Name" /> </Grid>
        <Grid item sx={3}> <TextField variant="outlined" fullWidth label="Last Name" /> </Grid>
        <Grid item sx={3}> <TextField variant="outlined" fullWidth label="Mobile No." /> </Grid>
        <Grid item sx={3}> <Button variant="contained" fullWidth sx={{height:55}} >Submit</Button></Grid>
        </Grid>

    </div>
)
}