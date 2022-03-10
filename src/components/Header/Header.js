import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from "../Home/Home";
import NSDContract from "../NSDContract/NSDContract";
import Plan from "../Plan/Plan";
import Swot from "../Swot/Swot";
import JobSpec from "../JobSpec/JobSpec";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 5 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Header = () =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div>
            <h2>Negotiated skills development</h2>
            <p>Negotiated Skills Development (NSD) is a module in MSC Information and Technology that gives flexibility to the students to choose a subject of their own choice in which they want to specialise in and executing certain projects by implementing the theoretical knowledge gained not only by self study(Online/Offline) but also by attending under grad lectures. This module makes them confident and ready to step out in the real competitive world where they can stand out of the crowd.</p>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="NSD Contract" {...a11yProps(1)} />
          <Tab label="SWOT Analysis" {...a11yProps(2)} />
          <Tab label="Plan" {...a11yProps(3)} />
          <Tab label="Job Specification" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NSDContract/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Swot />
      </TabPanel>
      <TabPanel value={value} index={3}>
          <Plan/>
      </TabPanel>
      <TabPanel value={value} index={4}>
          <JobSpec/>
      </TabPanel>
    </Box>
        </div>
    )
}
export default Header;