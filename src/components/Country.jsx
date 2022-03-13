import React from 'react';
import Medal from './Medal';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

const Country = (props) => {
  const { country, medals, onIncrement, onDecrement, onDelete, onSave, onReset } = props;

  const getMedalsTotal = (country, medals) => {
    let sum = 0;
    medals.forEach(medal => { sum += country[medal.name].page_value; });
    return sum;
  }
 const renderSaveButton = () => {
    let unsaved = false;
    medals.forEach(medal => {
      if (country[medal.name].page_value !== country[medal.name].saved_value) {
        unsaved = true;
      }
    });
    return unsaved;
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
      { renderSaveButton() ?
        <React.Fragment>
          <button style={{marginLeft:'8px'}} onClick={ () => onSave(country.id) }>save</button>
          <button style={{marginLeft:'8px'}} onClick={ () => onReset(country.id) }>reset</button>
        </React.Fragment>
        :
        <button id="mainButton" onClick={() => onDelete(country.id)}>delete</button>
      }
    </div>

  </CardContent>
</Card>
</Box>
  );
}

export default Country;
