import { Tooltip, Fab } from '@mui/material';
import { Add as AddIcon} from '@mui/icons-material'
import React from 'react';


function Add() {
    return (
        <Tooltip title="Delete">
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
    );
}

export default Add;