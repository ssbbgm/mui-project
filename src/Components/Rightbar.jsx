import React from "react";
import {Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem, ListItemText, List, ListItem, ListItemAvatar, Divider} from '@mui/material';

const Rightbar = () => {
    return (
        <Box 
            flex={2} 
            p={2} 
            sx={{display: {xs: 'none', sm:'block'}}}
        >
            <Box position='fixed'>
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://live.staticflickr.com/7158/6693329889_a601d73aac_t.jpg" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2112730/pexels-photo-2112730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2020991/pexels-photo-2020991.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2943689/pexels-photo-2943689.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1759407/pexels-photo-1759407.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                        src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                        alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                        src="https://material-ui.com/static/images/image-list/burgers.jpg"
                        alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                        src="https://material-ui.com/static/images/image-list/camera.jpg"
                        alt=""
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
};

export default Rightbar;