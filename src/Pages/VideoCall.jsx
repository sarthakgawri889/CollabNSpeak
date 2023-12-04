import { Box,styled,Button } from '@mui/material'
import React from 'react'

const Frame = styled(Box)`
    position: absolute;
    width: 65rem;
    height: 29rem;
    left: 15rem;
    top: 6.5rem;
    background: #C8D8F0;
    border-radius: 25px;
`

const Leave = styled(Button)`
position: absolute;
width: 301px;
height: 68px;
left: 1034px;
top: 37.5rem;
background: #2D8CFF;
border-radius: 50px;
`

function VideoCall() {
  return (
    <>
        <Frame></Frame>
        <Leave variant="contained">Leave Meeting</Leave>
    </>
    
  )
}

export default VideoCall
