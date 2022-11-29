import { Card, CardContent, Grid } from "@mui/material"
import React from "react"

export const TaskItem=({item})=>{

    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor:"gold"}}>
                <CardContent>
                   <h5> Movie Name : {item.name}</h5>
                    <h5> Release Year : {item.release}</h5>
                    <h5>Rating : {item.rating}</h5>
                </CardContent>
            </Card>

        </Grid>
    )
}