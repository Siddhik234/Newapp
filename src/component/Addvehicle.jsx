import { Grid, Button, TextField } from "@mui/material";
import React from "react";

export const Addvehicle=()=>{
    return(
        <div className="sub">
            <Grid container spacing={2}>
               <Grid item sx={4}> <TextField variant="outlined" fullWidth label="Vehicle Name" /> </Grid>
               <Grid item sx={4}> <TextField variant="outlined" fullWidth label="Vehicle Number" /> </Grid>
               <Grid item sx={4}> <Button variant="contained" fullWidth sx={{height:55}} > Submit </Button> </Grid>
            </Grid>

        </div>
    )
}