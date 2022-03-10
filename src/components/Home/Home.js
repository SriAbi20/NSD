import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(title, desc, learningoutcome, dateofcompletion ) {
    return { title, desc, learningoutcome, dateofcompletion  };
  }
  
  const rows = [
    createData('To understand the main design principles of interaction design (20%)','I will attend lectures and carry out independent research through books and online resources to gain an understanding of how interaction design came about and why it is important in our everyday lives. From this the main principles of how interaction design works will focused on and then implemented whilst developing an interactive product.','The principles will explained through the online blog and be applied to the final product.','Date:07/05/2017'),
    createData('To gain valuable skills in HTML, CSS, Javascript & JQuery (30%)','As a complete beginner with coding language, I will attend lectures and complete tutorials and exercises to learn how to build basic applications using the appropriate coding such as HTML, CSS, Javascript & JQuery.','The final product will be built using javascript, hence evidencing the skills acquired, the progress will be described on my blog.', 'Date:07/05/2017'),
    createData('To adhere to Leeds Beckett branding guidelines (10%)','Leeds Beckett University has strict guidelines to follow when it comes to creating documents, marketing and media. I will discuss the product with the marketing team to ensure guidelines are met and follow the branding book requirements.', 'The final product will evidence that branding guidelines have been followed.','Date:07/05/2017')
  ];


const Home = () =>{
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="right">In what format will you evidence your learning outcome?</StyledTableCell>
            <StyledTableCell align="right">Date of completion</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.desc}</StyledTableCell>
              <StyledTableCell align="right">{row.learningoutcome}</StyledTableCell>
              <StyledTableCell align="right">{row.dateofcompletion}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}
export default Home;