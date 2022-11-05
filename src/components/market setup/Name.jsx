import { Typography, Box, Stack, TextField } from '@mui/material'
import React from 'react'

const Name = () => {
  return (
    <div>
      <Stack  direction={"row"}  justifyContent={"center"}>
      <Box>
      <Typography textAlign={"center"}>Name your shop</Typography>
      <Typography>Set a unique name for your shop which helps people find you. </Typography>
      <TextField placeholder='Enter your shop name'/>
      </Box>
      </Stack></div>
  )
}

export default Name