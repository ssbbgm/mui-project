import { AppBar, Toolbar, styled, Topography, Typography, Icon, InputBase, Badge } from "@mui/material";
import { Pets, Mail } from '@mui/icons-material'
import React from "react";

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled('div')(({ theme }) => ({
    backgroundColor: 'white'
}))

const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: {xs: 'none', sm: 'block'}}}>LAMA DEV</Typography>
                <Pets sx={{ display: {xs: 'block', sm: 'none'}}}/>
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="primary">
                        <Mail color="action" />
                    </Badge>
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
};

export default Navbar;