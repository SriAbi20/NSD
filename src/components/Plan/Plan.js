import React from 'react';
import './Plan.scss';

const Plan = () =>{
    return(
        <div className='plan'>
            <div class="timeline">
  <div class="timelinecontainer left">
    <div class="content">
      <h3> Week 1 & 2</h3>
      <p>Studied Basics of React</p>
    </div>
  </div>
  <div class="timelinecontainer right">
    <div class="content">
      <h3> Week 3 </h3>
      <p>Created React Basic CRUD application.</p>
    </div>
  </div>
  <div class="timelinecontainer left">
    <div class="content">
      <h3> Week 4 </h3>
      <p>Learnt Redux</p>
    </div>
  </div>
  <div class="timelinecontainer right">
    <div class="content">
      <h3> Week 5</h3>
      <p>Creating NSD E-Portfolio using React Programming.</p>
    </div>
  </div>
  <div class="timelinecontainer left">
    <div class="content">
      <h3> Week 6 to 12</h3>
      <p>Planned to create many responsive application.</p>
    </div>
  </div>
</div>

        </div>
    )
}
export default Plan;