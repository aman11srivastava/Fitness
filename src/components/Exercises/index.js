import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItemText, ListItem  } from '@material-ui/core'
import ListItemLink from '@material-ui/core/List'

function Excerise({exercises}) {
    return (
        <Grid container>
            <Grid item sm>
                <Paper style={{padding: '20px', marginTop:'10px', marginBottom:'10px', height: '400px', overflowY: 'auto'}}>
                    {exercises.map(([group,exercises]) => (
                        <Fragment>
                        <Typography
                            variant = "h6"
                            style = {{textTransform: 'capitalize'}}
                        >
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({title}) => (
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            ))}
                      </List>
                      </Fragment>
                    ))}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={{padding: '20px', marginTop:'10px', marginBottom:'10px', height: '400px'}}>
                    <Typography
                        variant = "h4"
                    >
                        Welcome!
                    </Typography>
                    <Typography
                        variant = "body1"
                        style={{marginTop:'20px'}}
                    >
                        Please select an exercise from the list.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Excerise
