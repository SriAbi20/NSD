import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
const Plan = () =>{
    return (
        <React.Fragment>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Week 1 & 2
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Studied Basics of React</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Week 3 
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Created React Basic CRUD application</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Week 4
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Learnt Redux </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Week 5
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Creating NSD E-Portfolio using React Programming </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Week 6 to 12
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Planned to create many responsive application</TimelineContent>
        </TimelineItem>
       
      </Timeline>
    </React.Fragment>
    )
}
export default Plan;