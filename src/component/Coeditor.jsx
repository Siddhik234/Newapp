import { CardContent,Card, Grid, TextField } from "@mui/material";
import Recat from "react";
import { useState } from "react";

export const Coeditor=()=>{
    const [fname,setFname]=useState("")
    const [mname,setMname]=useState("")
    const [lname,setLname]=useState("")
    return(
      <div>
        <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField label="Fname" onChange={(e)=>setFname(e.target.value)} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Mname" onChange={(e)=>setMname(e.target.value)} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Lname" onChange={(e)=>setLname(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent> <h1> { ` ${fname} ${mname} ${lname} ` } </h1> </CardContent>
              </Card>
            </Grid>
        </Grid>
      </div>
    )
}