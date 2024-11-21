import React from 'react'
import Tweets from './Tweets/Tweets.jsx'
import WhatsHappening from './WhatsHappening/WhatsHappening'
import {tweets} from './Tweets/index.js'
import { COMMENT_SVG, RETWEET_SVG, LIKE_SVG, TWEET_SHARE, THREE_DOTS, STARS_SVG, GROUP_SVG } from './images/index.jsx'
import FRAME from './images/Frame 6.png'
import NETFLIX_PNG from './images/netflix.png'
class CentralSide extends React.Component{
  render(){
    const { tweets } = this.props;

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
  
 
        </div>
      </div>
    )
  }
}
export default CentralSide