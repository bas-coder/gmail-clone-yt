import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Avatar, IconButton, Tooltip} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/counter/userSlice';
import { auth } from '../features/firebase';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <a href='https://mail.google.com/'><img src=" https://i.im.ge/2022/08/30/OtkCED.NewGmail.png" alt="Gmail" /></a>
        </div>

        <div className="header__middle">
            <SearchIcon  />
            <input type="text" placeholder='Search in emails' />
            <ArrowDropDownIcon className="header__inputCare" />
        </div>

        <div className="header__right">
            <IconButton>
              <HelpOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>              
              <AppsIcon />
            </IconButton>
            <Tooltip title={user.displayName}>
              <Avatar onclick={signOut} src={user?.photoUrl} />
            </Tooltip>
        </div>

    </div>
  )
}

export default Header