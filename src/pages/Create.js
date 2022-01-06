import React from 'react'

// This way of import is the Same as below, but slightly less performing
// import {Typography} from '@material-ui/core'
import Typography from '@mui/material/Typography';

export default function Create() {
  return (
    <div>
      {/* <Typography 
        variant="h1"
        color="primary"
        align="center"
      >
        Create a New Note
      </Typography> */}
      <Typography 
        color="secondary"
        noWrap
      >      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus maiores repellat sunt quidem alias exercitationem cupiditate debitis, pariatur illum maxime modi corrupti amet? Illum molestiae sint facere sit enim?
      </Typography>
    </div>
  )
}
