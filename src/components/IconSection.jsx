import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

function IconSection() {
  return (
    <div className='iconSection'>
      <div className="iconSection__section">
        <div className="iconSection__img">
            <img src="https://i.im.ge/2022/08/30/Ot9RqK.calendarIcon.png" alt="" />
        </div>
        <div className="iconSection__img">
          <img src="https://i.im.ge/2022/08/30/Ot9g4F.bulbIcon.png" alt="" />
        </div> 
        <div className="iconSection__img">
          <img src="https://i.im.ge/2022/08/30/Ot9Wt9.roundedTick.png" alt="" />
        </div> 
        <div className="iconSection__img">
          <img src="https://i.im.ge/2022/08/30/Ot9xRy.avatarIcon.png" alt="" />
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
