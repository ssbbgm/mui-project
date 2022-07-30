import { Tooltip, Fab, Modal, Typography, Box, styled, Avatar, TextField, Stack, Button, ButtonGroup} from '@mui/material';
import { 
    Add as AddIcon, 
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from '@mui/icons-material'
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent: 'center'
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <Tooltip onClick={(e)=>setOpen(true)} title="New Post" sx={{position: 'fixed', bottom: 20, left:{xs: 'calc(50% - 25px)', md: 30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={(e)=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box width={400} height={320} bgcolor='white' borderRadius={5}>
          <Typography variant='h6' color='gray' textAlign='center' mt={2}>Create post</Typography>
          <UserBox>
            <Avatar
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                sx={{ width: 30, height: 30, ml: 2 }}
            />
            <Typography fontWeight={500} variant="span">
                John Doe
            </Typography>
          </UserBox>
                <TextField
                id="standard-multiline-static"
                multiline
                rows={4}
                placeholder="'What's on your mind?"
                variant="standard"
                sx={{ width:'90%', ml: 2}}
            />
            <Stack direction="row" gap={1} mt={2} mb={3} ml={2}>
                <EmojiEmotions color="primary" />
                <Image color="secondary" />
                <VideoCameraBack color="success" />
                <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" mb={1}>
            <Button>Post</Button>
            <Button><DateRange/></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
      </>
    );
}

export default Add;