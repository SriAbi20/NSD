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
       <p> · Quick Learner – New technology or digital software are subjects I feel quite confident with, I tend to learn new software packages easily and quickly and am not afraid to experiment to get the best results. </p>
       <p> · Motivation – I am highly motivated to improve technical skills, this module will assist me in broadening my technical expertise.</p>
        </Typography>
        
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Weakness
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
     <p>  ·   Time Management – I sometimes struggle to manage working part time, whilst studying full time in university is difficult when it comes to learn new technology. </p> 
     <p>  ·    Procrastination – I can be easily distracted when I do not fully understand a topic, this leads to delaying starting a project and puts me further behind.</p>
        </Typography>
        
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
      Opportunities
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ·   Use of online tutorials – YouTube videos and udemy courses allow us to master advance technology for free at any time and from anywhere..  
        </Typography>
        
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
      Threats
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p> · Constant update in technology – As fast as we are learning about technology there are advancements in it, also few elements will be deprecated soon this could pose a threat that the application is no longer current when it is deployed. </p>
        </Typography>
        
        </CardContent>
        </Card>
                
                

        </Box>
        
      
    )
}
export default Swot;