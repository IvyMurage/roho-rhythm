import { CircularProgress, Skeleton } from '@mui/material'
import React from 'react'

function Loading() {
    return (
        <div className='flex justify-center h-full items-center'>Loading
            <CircularProgress />
        </div>
    )
}

export default Loading

