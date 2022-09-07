import React from 'react'
import { imgSrc } from '../static/imgSrc';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

function IconSection() {
  return (
    <div className='iconSection'>
      <div className="iconSection__section">
        <div className="iconSection__img">
            <img src={imgSrc.calender__icon} alt="" />
        </div>
        <div className="iconSection__img">
          <img src={imgSrc.bulb__icon} alt="" />
        </div> 
        <div className="iconSection__img">
          <img src={imgSrc.tick__icon} alt="" />
        </div> 
        <div className="iconSection__img">
          <img src={imgSrc.round__avatar} alt="" />
        </div>
        <div className="iconSection__add">
          <IconButton>
            <AddIcon />
          </IconButton> 
        </div>
      </div>                 
    </div>
  )
}

export default IconSection
