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
       Working with a development team to create new products and systems
       . Working with the team to build new applications
       . Supporting clients to understand their needs and deliver against them
       . Troubleshoot and debug applications
Attend the occasional industry event to introduce products to prospective clients
Communicate ideas to the team to improve overall product performance
Take call from clients and helping them to resolve issues when there is a tech problem
Ability to create responsive app.
        </Typography>
        
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Required Skills 
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Excellent development experience with a strong focus on the Front end.
Experience with Angular or other JS Frameworks (React, Vue etc)
Knowledge of SQL or other similar database
Experience developing apps would be highly beneficial
Excellent communication skills, happy to speak with customers and resolve any issues which may arise.
        </Typography>
        
        </CardContent>
        </Card>

                
            </Box>
        </React.Fragment>
    )
}
export default JobSpec;