import React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Swot = () =>{
    return (
        <Box>
            
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Strength
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ·     Quick Learner – New technology or digital software are subjects I feel quite confident with, I tend to learn new software packages easily and quickly and am not afraid to experiment to get the best results.
·   Communication – It will be important to engage with members of the team to recognise what is wanted from the project. My good verbal and written communication skills will help make the connection to ensure the project is successful.  
·  Commitment – This application is important to the helpdesk team that I work with, believing in the project and being committed to it is a great strength to see it through to the end. 
·    Motivation – I am highly motivated to improve the efficiency on the helpdesk, the project will provide support to colleagues and help to achieve this.
        </Typography>
        
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Weakness
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ·   Time Management – I sometimes struggle to manage working full time, whilst studying part time with home life and other personal commitments. 
·    Procrastination – I can be easily distracted when I do not fully understand a topic, this leads to delaying starting a project and puts me further behind.
        </Typography>
        
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
      Opportunities
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ·   Use of online tutorials – The use of youtube and tutorials as supplements to classroom learning will add broaden the knowledge base required to initiate the project.
        </Typography>
        
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
      Threats
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ·  Constant update in technology – As fast as we are learning about technology there are advancements in it, this could pose a threat that the application is no longer current when it is released.
·   Bugs & Viruses – This is an external threat that is out of the control of the project, but it is something that could 
        </Typography>
        
        </CardContent>
        </Card>
                
                

        </Box>
        
      
    )
}
export default Swot;