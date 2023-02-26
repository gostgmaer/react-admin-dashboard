import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header/Header'

const Dashbaord = () => {
  return ( <Box m={'20px'}>
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
    <Header title={'Dashboard'} subtitle={'Welcome to Dashboard'}></Header>
    </Box>
  
  </Box>
  )
}

export default Dashbaord