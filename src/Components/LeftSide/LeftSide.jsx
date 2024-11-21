import React from 'react'
import MenuItem from './MenuItem'
import {icons} from './index'
import { TWITTER_SVG, ARROWDOWN_SVG } from './images'
import  UTKU_SVG  from './images/image 1 1.png'
export default function LeftSide() {
  return (
    <div className='mx-4 d-flex flex-column'>
      <div className='mt-2 mb-3'>{TWITTER_SVG}</div> 
  {icons.map((item)=><MenuItem item={item} key={item.id}/>)}
  <button style={{width: '75%',border:'none', backgroundColor:'#1DA1F2', borderRadius: 47, color:'white', padding:'15px 0px', fontSize: 15, fontWeight: 'bold'}}>Tweet</button>

    <div className='d-flex' style={{marginTop:'auto', paddingBottom: 20}}>
      <img style={{width: 40, height: 40, marginTop: 5}}src={UTKU_SVG}></img>
      <div className='d-flex align-items-center'>
        <div>
      <p style={{margin: 0, color:'white', marginLeft: 10}}>Daulet Tlegenov</p>
      <p style={{margin: 0, color:'#6E767D', marginLeft: 10}}>@TlegenovDaulet</p>
      </div>
      </div>
      <div style={{width: 16, height: 16, marginTop: 10, marginLeft: 55}}>
      {ARROWDOWN_SVG}
      </div>
    </div>
    </div>
  )
}
