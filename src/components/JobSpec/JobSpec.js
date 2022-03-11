import React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const JobSpec = () =>{
    return (
        <React.Fragment>
            <Box>
                
                <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Key Responsibilities
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <p> . Working with a development team to create new products and systems </p>
      <p> . Working with the team to build new applications </p>
      <p> . Supporting clients to understand their needs and deliver against them </p>
      <p> . Troubleshoot and debug applications</p>
      <p> . Attend the occasional industry event to introduce products to prospective clients </p>
      <p> . Communicate ideas to the team to improve overall product performance </p>
      <p> . Take call from clients and helping them to resolve issues when there is a tech problem </p>
        </Typography>
        
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Required Skills 
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <p> . Excellent development experience with a strong focus on the Front end. </p>
       <p> . Experience with React.JS libraries </p>
       <p> . Experience developing apps would be highly beneficial</p>
       <p> . Excellent communication skills, happy to speak with customers and resolve any issues which may arise.</p>
       <p> . Ability to create responsive app. </p>
        </Typography>
        
        </CardContent>
        </Card>

                
            </Box>
        </React.Fragment>
    )
}
export default JobSpec;