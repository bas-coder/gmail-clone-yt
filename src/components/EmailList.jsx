import React from 'react'
import Section from './Section';
import EmailRow from './EmailRow';
import { Checkbox, IconButton} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOfferOutlined';
import { useState, useEffect } from 'react';
import { db } from '../features/firebase';


function EmailList() {

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails").orderBy('timestamp', "desc").onSnapshot
    (snapshot => setEmails(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data(),

    }))))
  }, []);

  return (
    <div className='emailList'>
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
            <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
            <IconButton>
                <RedoIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>                        
        </div>
        <div className="emailList__settingsRight">
          <p>1-50 of 330</p>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton> 
            <IconButton>
                <KeyboardHideIcon />
            </IconButton>                                      
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="#0b57d0" selected /> 
        <Section Icon={LocalOfferIcon} title="Promotions" color="#0b57d0" />
        <Section Icon={PeopleIcon} title="Social" color="#0b57d0"  /> 

      </div>

      <div className="emailList__lists">
        {emails.map(({ id, data: { to, subject, message, timestamp  }}) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            describtion={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />

        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test. ldhy dwb wd be wuwwiub  wbbb wbwubwu"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />

        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test. ldhy dwb wd be wuwwiub  wbbb wbwubwu"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />

        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test. ldhy dwb wd be wuwwiub  wbbb wbwubwu"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test. ldhy dwb wd be wuwwiub  wbbb wbwubwu"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test. ldhy dwb wd be wuwwiub  wbbb wbwubwu"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />

        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test. ldhy dwb wd be wuwwiub  wbbb wbwubwu"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test. ldhy dwb wd be wuwwiub  wbbb wbwubwu"
        time="10pm"
        />
        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test"
        time="10pm"
        />

        <EmailRow 
        title="Twitch"
        subject="Hey fellow streamer !!!"
        describtion="This is the test. ldhy dwb wd be wuwwiub  wbbb wbwubwu"
        time="10pm"
        />        

      </div>
    </div>
  )
}

export default EmailList
