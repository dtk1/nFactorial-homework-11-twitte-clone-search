import React from 'react'
import Tweets from './Tweets/Tweets.jsx'
import WhatsHappening from './WhatsHappening/WhatsHappening'
import {tweets} from './Tweets/index.js'
import { COMMENT_SVG, RETWEET_SVG, LIKE_SVG, TWEET_SHARE, THREE_DOTS, STARS_SVG, GROUP_SVG } from './images/index.jsx'
import FRAME from './images/Frame 6.png'
import NETFLIX_PNG from './images/netflix.png'
export default function CentralSide() {
  return (
    <div style={{ width: "45%",color: 'white'}}>
      <div className='w-100 d-flex justify-content-between' style={{padding: 15, fontSize: 19}}>
      Home
      {STARS_SVG}
      </div>
      <div style={{border: '1px #2F3336 solid', borderTop: 'none'}}>
      <WhatsHappening></WhatsHappening>
      {tweets.map((tweet) => (
            <Tweets key={tweet.id} {...tweet} />
          ))}

<div>
      
      <div className='d-flex flex-column'>
        <div className='d-flex flex-row'>
        <div style={{padding:'15px 0 0 10px'}}><img style={{height: 50, width: 50, objectFit:'cover', overflow:'hidden', borderRadius:'50%'}}src={NETFLIX_PNG}></img></div>
        <div style={{width:'85%',marginLeft: 13}}> 
          <p className="d-flex align-items-center"style={{fontWeight: 600, margin: 0, paddingTop: 10}}>Neftlix Kazakhstan {GROUP_SVG} <div style={{ color: 'gray', fontSize: 12, marginLeft:5 }}>@Netflix · 10 minutes ago</div><div style={{marginLeft: 'auto'}}>{THREE_DOTS}</div></p>
          <p className='mb-3' style={{fontSize: 15}}> Need a break? Escape into the world of endless stories with Netflix. From gripping dramas to laugh-out-loud comedies, and thrillers that’ll keep you on the edge of your seat, there’s always something for everyone. Start watching your next obsession today! <br/><span style={{color:'#1DA1F2'}}>#Netflix #Chill</span></p>
           
          </div>
          </div>
          <img style={{width:'80%', height: 'auto', margin: 'auto', marginBottom: 60}}src={FRAME}></img>
          </div>
          <div className='d-flex gap-2 justify-content-between mb-3 mx-5' style={{width: '80%', color:'gray', fontSize: 13}}><span>{COMMENT_SVG}  197</span><span>{RETWEET_SVG}  127</span><span>{LIKE_SVG}  2533</span><span>{TWEET_SHARE}  </span></div>
          
        </div>
      </div>
    </div>
  )
}
