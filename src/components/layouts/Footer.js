import React from 'react'
import {Paper, Tabs} from '@material-ui/core'
import Tab from '@material-ui/core/Tab';

function Footer({muscles}) {
    return (
        <Paper>
        <Tabs
          value={0}
        //   onChange={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
            <Tab label="ALL" />
            {muscles.map(group => (
                <Tab label={group} />

            ))}
        </Tabs>
      </Paper>
    )
}

export default Footer
