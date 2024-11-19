import React from 'react'
import { SEARCH_SVG } from './images/index'
import TrendsForYou from './TrendsforYou/TrendsForYou'
import {trends} from './TrendsforYou/index'
import WhoToFollow from './WhoToFollow/WhoToFollow'
export default function RightSide() {
  return (
    <div className='mx-4 w-25'>
      <div style={{ position: 'relative'}}>
        <div  style={{
      position: 'absolute',
      top: '30%',
      left: '15px',
      transform: 'translateY(-50%)',
      width: '20px',
      height: '20px',
    }}>
      {SEARCH_SVG}
      </div>
      <input placeholder='Search Twitter' style={{width: '100%',border:'none', borderRadius:40, backgroundColor:'#202327', padding: '10px 80px 10px 40px', marginBottom: 22}}></input>
      
      </div>
        <p style={{padding: '14px 14px 14px 14px', color: 'white', borderBottom: '1px solid #2F3336', fontSize: 17, backgroundColor:'#15181C', borderRadius: '25px 25px 0 0', marginBottom: 0}}>Trends for you</p> 
      {trends.map((items) =>(<TrendsForYou {...items} key = {items.id}/>))}
      <p style={{padding: '14px 14px 14px 14px',borderRadius: '0 0 25px 25px', fontSize: 16, backgroundColor:'#15181C', color: '#1DA1F2'}}>Show More</p> 
      <WhoToFollow/>
      <p style={{padding: '7px 14px 14px 22px',borderRadius: '0 0 25px 25px', fontSize: 16, backgroundColor:'#15181C', color: '#1DA1F2'}}>Show More</p> 
      </div>
  )
}
