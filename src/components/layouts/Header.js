import React from 'react'
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core'

function Header() {
    return (
        <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" >
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Header
