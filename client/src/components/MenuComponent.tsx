import * as React from 'react';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';

type Props = {
  open: boolean
  anchorEl: HTMLElement | null
  handleClose: () => void
}

const iconSize = 20

const action = ['Edit', 'Delete']
const actionIcon = [< EditIcon sx={{fontSize: iconSize, mr: 1}} />, <DeleteIcon sx={{fontSize: iconSize, mr: 1}} />]

const MenuComponent = (props: Props) => {

  return (
    <Paper elevation={1}>
      <Menu
        id="basic-menu"
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          action.map((x: string, i: number) => (
            <MenuItem sx={{width: 120, fontSize: 14, p: 1.2}} key={x} onClick={props.handleClose}>
              {actionIcon[i]}
              {x}
            </MenuItem>
          ))
        }
      </Menu>
    </Paper>
      
  );
}

export default React.memo(MenuComponent)
