import React from 'react'
import PROFILE_IMG_PATH from '../images/profilePhoto.jpeg'
import { ICONS_SVG } from '../images'
export default function WhatsHappening() {
  return (
    <div>
      <div  style={{paddingLeft: 15}}>
    <img src ={PROFILE_IMG_PATH} style={{width: 50, height: 50, borderRadius: 50 }}></img>
    <input placeholder="What's happening?" style={{border:'none', color:'gray', background:'none', fontSize: 19}} className='mx-3'></input>
    <div style={{marginLeft: 48, marginTop: 35, marginBottom: 16}}>
     <div className='d-flex justify-content-between'>
      {ICONS_SVG}
    <button style={{backgroundColor:'#1DA1F2', border:'none', borderRadius: 50, padding: '10px 20px', fontSize: 15, color:'white', marginRight: 16, fontWeight: 'bold'}}>Tweet</button>
    </div>
    </div>
    </div>
    <div style={{width: '100%', color:'#1DA1F2', fontWeight: 'bold', padding: '16px 0 16px 0', border: '1px #2F3336 solid', borderLeft:'none', borderRight:'none'}} className='d-flex justify-content-center'>Show 5 Tweet</div>
  </div>
  )
}
