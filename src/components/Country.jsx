import React from 'react';
import Medal from './Medal';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

const Country = (props) => {
  const { country, medals, onIncrement, onDecrement, onDelete } = props;

  const getMedalsTotal = (country, medals) => {
    let sum = 0;
    medals.forEach(medal => { sum += country[medal.name]; });
    return sum;
  }
  return (
  
<Box 
width={300} height={300} 
display="flex" 
alignItems="center"
justifyContent="center"
borderColor="pink">
  
<Card variant="outlined">
   <CardContent>
   <Typography variant="h5" component="div">{country.name}</Typography>
   
   <MilitaryTechIcon/> <span className="badge">
          { getMedalsTotal(country, medals) }
      </span>
  
  <div>
  { medals.map(medal =>
        <Medal 
          key={ medal.id } 
          country={ country } 
          medal={ medal } 
          onIncrement={ onIncrement } 
          onDecrement={ onDecrement } />
      ) }
      <button id = "mainbutton" onClick={() => onDelete(country.id)}>Delete</button>
      
    </div>

  </CardContent>
</Card>
</Box>
  );
}

export default Country;
