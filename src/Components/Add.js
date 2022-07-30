import { Tooltip, Fab, Modal, Typography, Box, style } from '@mui/material';
import { Add as AddIcon} from '@mui/icons-material'
import React, { useState } from 'react';


function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <Tooltip onClick={(e)=>setOpen(true)} title="New Post" sx={{position: 'fixed', bottom: 20, left:{xs: 'calc(50% - 25px)', md: 30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box >
          Hello
        </Box>
      </Modal>
      </>
    );
}

export default Add;