import React, {CSSProperties} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

export default function RadioButtonsGroup(){

    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };

    function handleMoreInformationBank() {
      if(value === 'Bankkort'){
      return(
        <TextField id="outlined-basic" label="kortnummer" variant="outlined" />
      )}
  }

  function handleMoreInformationSwish() {
    if(value === 'Swish'){
    return(
      <TextField id="outlined-basic" label="Mobil-nummer" variant="outlined" />
    )}
  }

  function handleMoreInformationFaktura() {
    if(value === 'Faktura'){
    return(
      <TextField id="outlined-basic" label="Faktura Adress" variant="outlined" />
    )}
  }

    return (
      <FormControl component="fieldset" style = {spaceing}>
        <FormLabel component="legend">Betalsätt</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="Bankkort" control={<Radio />} label="Bankkort" />
          {handleMoreInformationBank()}
          <FormControlLabel value="Swish" control={<Radio />} label="Swish" />
          {handleMoreInformationSwish()}
          <FormControlLabel value="Faktura" control={<Radio />} label="Faktura" />
          {handleMoreInformationFaktura()}
        </RadioGroup>
      </FormControl>
    );
  

}

const spaceing:CSSProperties = {
    margin: '2rem 0'
}
