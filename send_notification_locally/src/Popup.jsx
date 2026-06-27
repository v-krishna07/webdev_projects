import React from 'react'
import { useState } from 'react';
export default function Popup() {
  const[value,setValue]=useState(0)
  let number=Math.round(Math.random()*999999);
  setInterval(()=>{number=Math.round(Math.random()*999999)},10000)
  
  const handleNotification = ()=>{
    if(!("Notification" in window)){ alert("Sorry! No Support");return}
    Notification.requestPermission().then(permission=>{
      if(permission=="granted"){
        const notify = new Notification("Otp",{body:`OTP is ${number}`})
        notify.onclick=()=>{
          setValue(number)
        }

      }
    })
  }
  const handleChange = (e)=>{
    const val= e.target.value
    return setValue(val)
  }
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} placeholder='Type otp Sended' />
      <button onClick={handleNotification}>Send Notification</button>
    </div>
  )
}
