import React from "react";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { Home, Article, People, Storefront } from "@mui/icons-material";

const Sidebar = () => {
    return (
        <Box 
            flex={1} 
            p={2} 
            sx={{display: {xs: 'none', sm:'block'}} }
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#pages'>
                        <ListItemIcon>
                            <Article/>
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#groups'>
                        <ListItemIcon>
                            <People/>
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#marketplace'>
                        <ListItemIcon>
                            <Storefront/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#friends'>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
};

export default Sidebar;