import React from 'react'
import { useNavigate } from "react-router-dom";
import { Checkbox, IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useDispatch } from 'react-redux';
import { selectedMail } from '../features/counter/mailSlice';


function EmailRow({id, title, subject, describtion, time}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectedMail({
        id,
        title,
        subject,
        describtion,
        time,
      })
    );
    navigate("/mail");
  };
  
  return (

    <div className='emailRow'>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>

      <h3 onClick={openMail} className="emailRow__title">
        {title}
      </h3>

      <div onClick={openMail} className="emailRow__message">
        <h4>{ subject }
        <span className='emailRow__describtion'> {" "}-{" "}
          { describtion }
        </span>
        </h4>
      </div>


      <p className="emailRow__time">
        { time }
      </p>

    </div>
  )
}

export default EmailRow
