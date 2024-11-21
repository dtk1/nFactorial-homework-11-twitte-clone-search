import React from 'react'
import CentralSide from './Components/CentralSide/CentralSide'
import LeftSide from './Components/LeftSide/LeftSide'
import RightSide from './Components/RightSide/RightSide'
import { tweets } from './Components/CentralSide/Tweets'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      inputValue: '',
      tweets: tweets
    }
  }
  handleInputChange = (event) =>{
    this.setState({inputValue: event.target.value});
    this.filterTweetsByContent();
  }
  filterTweetsByContent = () =>{
    const {inputValue} = this.state;
    if(inputValue.trim() == ""){
      this.setState({tweets});
    }
    else{
      const filteredTweets = tweets.filter((tweet) => tweet.content.toLowerCase().includes(inputValue.toLowerCase()))
      this.setState({tweets: filteredTweets});
    };
  }
  render(){
    const { inputValue, tweets } = this.state;

    return (
      <div>
        <div className='d-flex ml-5'>
          <LeftSide/>  
          <CentralSide inputValue={inputValue} handleInputChange={this.handleInputChange} tweets={tweets}/>
          <RightSide inputValue={inputValue} handleInputChange={this.handleInputChange}/>
        </div>
      </div>
      )
  }
}
export default App



