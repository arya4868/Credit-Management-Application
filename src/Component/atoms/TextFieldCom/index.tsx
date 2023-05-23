import React, { useState } from 'react';
import { Stack, TextField, MenuItem } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';

const PinkBorderTextField = styled(TextField)({
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#9747FF'
  }
});

export interface TextFieldProps {
  placeholder: string;
  type?: string;
}

const TextFieldCom: React.FC<TextFieldProps> = ({ placeholder, type = 'text' }) => {
  const [country, setCountry] = useState('');
  console.log({ country });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
  };
  

  return (
    <Stack direction={'row'}>
      <PinkBorderTextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        InputLabelProps={{ shrink: false }}
        type={type}
        select={type === 'select'}
        value={country}
        onChange={handleChange}
        style={{ width: type === 'select' ? 200 : undefined }}
        InputProps={{
          startAdornment: (
            <>
              {type === 'text' && (
                <SentimentSatisfiedAltIcon
                  sx={{ mr: '0.5rem', alignSelf: 'center', color: 'grey' }}
                />
              )}
              {type === 'email' && (
                <InboxTwoToneIcon sx={{ mr: '0.5rem', alignSelf: 'center', color: 'grey' }} />
              )}
              {type === 'password' && (
                <LockOutlinedIcon sx={{ mr: '0.5rem', alignSelf: 'center', color: 'grey' }} />
              )}
            </>
          )
        }}
      >
        {type === 'select' && (
          <>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="USA">Usa</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
          </>
        )}
      </PinkBorderTextField>
    </Stack>
  );
};

export default TextFieldCom;