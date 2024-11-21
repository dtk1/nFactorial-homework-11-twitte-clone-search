import React from 'react'
import { GROUP_SVG, RETWEET_SVG, LIKE_SVG, COMMENT_SVG, TWEET_SHARE,THREE_DOTS } from '../images/index'
import './index'
export default function Tweets(props) {
  const {time, authorName, authorUserName, img, content, retweets, replies, likes, hashtag, frame} = props;
  return (
    <div>
      {frame ?  <div>
        
        <div className='d-flex flex-column'>
          <div className='d-flex flex-row'>
          <div style={{padding:'15px 0 0 10px'}}><img style={{height: 50, width: 50, objectFit:'cover', overflow:'hidden', borderRadius:'50%'}}src={img}></img></div>
          <div style={{width:'85%',marginLeft: 13}}> 
            <p className="d-flex align-items-center"style={{fontWeight: 600, margin: 0, paddingTop: 10}}>{authorName} {GROUP_SVG} <div style={{ color: 'gray', fontSize: 12, marginLeft:5 }}>{authorUserName} · {time}</div><div style={{marginLeft: 'auto'}}>{THREE_DOTS}</div></p>
            <p className='mb-3' style={{fontSize: 15}}> {content}<br/><span style={{color:'#1DA1F2'}}>{hashtag}</span></p>
             
            </div>
            </div>
            <img style={{width:'80%', height: 'auto', margin: 'auto', marginBottom: 60}}src={frame}></img>
            </div>
            <div className='d-flex gap-2 justify-content-between mb-3 mx-5' style={{width: '80%', color:'gray', fontSize: 13}}><span>{COMMENT_SVG}  {replies}</span><span>{RETWEET_SVG}  {retweets}</span><span>{LIKE_SVG}  {likes}</span><span>{TWEET_SHARE}  </span></div>
            
          </div>
          :
          <div>
          <div className='d-flex'>
          <div style={{padding:'15px 0 0 10px'}}><img style={{height: 50, width: 50, objectFit:'cover', overflow:'hidden', borderRadius:'50%'}}src ={img}></img></div>
          <div style={{width:'85%',marginLeft: 13}}> 
            <p className="d-flex align-items-center"style={{fontWeight: 600, margin: 0, paddingTop: 10}}>{authorName} {GROUP_SVG} <div style={{ color: 'gray', fontSize: 12, marginLeft:5 }}>{authorUserName} · {time}</div><div style={{marginLeft: 'auto'}}>{THREE_DOTS}</div></p>
            <p className='mb-3' style={{fontSize: 15}}>{content} <br/><span style={{color:'#1DA1F2'}}>{hashtag}</span></p>
            
            </div>
            
            </div>
            <div className='d-flex gap-2 justify-content-between mb-3 mx-5' style={{width: '80%', color:'gray', fontSize: 13}}><span>{COMMENT_SVG}  {replies}</span><span>{RETWEET_SVG}  {retweets}</span><span>{LIKE_SVG}  {likes}</span><span>{TWEET_SHARE}  </span></div>
            </div>
}
          
        </div>
  )
}
