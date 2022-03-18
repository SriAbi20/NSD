import React from 'react';
import './NSDContract.scss';

const NSDContract = () =>{
    return(
        <div className='nsdcontract'>
            <table className='table'>
                <thead>
                    <th>Title</th>
                    <th>Description</th>
                    <th>In what format will you evidence your learning outcome?</th>
                    <th>Expected Date of completion</th>
                </thead>
                <tbody>
                    <tr>
                        <td data-label='Title'>To understand the main design principles of interaction design (30%)</td>
                        <td data-label='Description'>I will watch tutorials and carry out independent research through books and online resources to gain an understanding of how interaction design came about and why it is important in our everyday lives. From this the main principles of how interaction design works will focused on and then implemented whilst developing an interactive product.</td>
                        <td data-label='In what format will you evidence your learning outcome?'>The principles will explained through the online blog and be applied to the final product</td>
                        <td data-label='Expected Date of completion'>Date:04/05/2022</td>
                    </tr>
                    <tr>
                        <td data-label='Title'>To gain valuable skills in React.js (50%)</td>
                        <td data-label='Description'>As a complete beginner with React.js coding language, I will watch youtube videos and complete tutorials and exercises to learn how to build basic applications using the appropriate coding such as React.js & Redux.</td>
                        <td data-label='In what format will you evidence your learning outcome?' >E-Portfolio also built using React.js, hence evidencing the skills acquired, the progress will be described on my blog.</td>
                        <td data-label='Expected Date of completion'>Date:04/05/2022</td>
                    </tr>
                    <tr>
                        <td data-label='Title'>To adhere to develop responsive application (20%)</td>
                        <td data-label='Description'> Nowadays lot of employers expecting developers to develop responsive app which should align and work across all the devices such as mobile , tablet and desktop.</td>
                        <td data-label='In what format will you evidence your learning outcome?'>E-Portfolio blog will evidence that responsiveness have been followed.</td>
                        <td data-label='Expected Date of completion'>Date:04/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NSDContract