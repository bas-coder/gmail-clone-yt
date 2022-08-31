import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MinimizeIcon from '@mui/icons-material/Minimize';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import LockClockIcon from '@mui/icons-material/LockClock';
import FormatColorTextIcon from '@mui/icons-material/TextFormat';
import { closeSendMessage } from '../features/counter/mailSlice';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { db } from '../features/firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
  const { register, handleSubmit, watch} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add (
      {
      to:formData.to,
      subject: formData.subject,
      message:formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      dispatch(closeSendMessage());
  };

  return (
    <div className='sendMail'>
      <div className="sendMail__header">

        <h3>New Message</h3>
        <div className="sendMail__headerIcons">
          <MinimizeIcon />
          <OpenInFullIcon className="sendMail__close" />
          <CloseIcon onClick={() => dispatch(closeSendMessage()) } className="sendMail__close" />
        </div>

      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='ccInput'>
          <input 
          placeholder="To" 
          type="email"
          name="boy"
          {...register("to", { required: true })}  
          required
          /><p>Cc Bcc</p>
        </div>
        <input 
        placeholder="Subject" 
        {...register('subject', { required: true })} 
        type="text"
        required 
         />
         <div className="sendMail__message">
            <textarea 
              style={{border:"none"}} 
              placeholder="Message..." 
              type="text"
              required
              {...register('message', { required: true })}        
            />
         </div>

        <div className="sendMail__options">
          <div className="sendMail__optionsLeft">
          <Button 
          variant="contained"
          endIcon={<ArrowDropDownIcon />} 
          color="primary" 
          type="submit" 
          className="sendMail__send"> Send <div></div> </Button> 
          <IconButton>  
            <FormatColorTextIcon />
          </IconButton>
          <IconButton>  
            <AttachFileIcon />
          </IconButton>
          <IconButton>  
            <InsertLinkIcon />
          </IconButton>  
          <IconButton>  
            <EmojiEmotionsOutlinedIcon />
          </IconButton>  
          <IconButton>  
            <AddToDriveIcon />
          </IconButton>  
          <IconButton>  
            <InsertPhotoOutlinedIcon />
          </IconButton> 
          <IconButton>  
            <LockClockIcon />
          </IconButton>                                           
                           
          </div>
          <div className="sendMail__optionsLeft">
            <IconButton>
              <MoreVertIcon  />  
            </IconButton>  
            <IconButton>
              <DeleteOutlineIcon />  
            </IconButton>              

          </div>
        </div>
      </form>
    </div>
  )
}

export default SendMail
