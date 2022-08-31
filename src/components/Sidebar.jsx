import React from 'react';
import SidebarOptions from "./sidebarOptions";
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { Button, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/counter/mailSlice';


function Sidebar() {

  const dispatch = useDispatch( );

  return (
    <div className='sidebar'>
      <Button 
      className='sidebar__compose' 
      startIcon={<EditOutlinedIcon fontSize='large'/>}
      onClick = {
        () => dispatch(openSendMessage())
      }
      >
        Compose
      </Button>

      <SidebarOptions Icon={InboxIcon} title="Inbox" number={54} selected={true} />
      <SidebarOptions Icon={StarOutlineOutlinedIcon} title="Starred" number={54} />
      <SidebarOptions Icon={AccessTimeOutlinedIcon} title="Snoozed" number={54} />
      <SidebarOptions Icon={DoubleArrowOutlinedIcon} title="Important" number={54} />
      <SidebarOptions Icon={SendOutlinedIcon} title="Sent" number={54} />
      <SidebarOptions Icon={InsertDriveFileOutlinedIcon} title="Draft" number={54} />
      <SidebarOptions Icon={ExpandMoreOutlinedIcon} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <h4>Labels</h4>
          <IconButton>
            <AddIcon />  
          </IconButton>                    
        </div>
      </div>

    </div>
  )
}

export default Sidebar