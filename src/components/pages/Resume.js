import React from 'react';
import avatar from "../img/avatars/avatar.jpg";
import './Home.css'
import ResumeImg from '../img/resume/BenjaminFeinResume.png'

export default function Blog() {
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <img style={{height: '600px', width: '475px'}} src={ResumeImg}/>
        </div>
        </div>
  );
}
