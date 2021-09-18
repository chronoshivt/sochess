import * as React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import TimePick from './TimePick.js'


// WIP, for ux use

export default function BPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;








  return (
    <div className="time">
      <Button variant="outlined" color="primary" onClick={handleClick}>
        PICK TIME
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
         <TimePick />
      </Popover>
    </div>
  );
}
