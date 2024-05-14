// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state={isSubscribed:true}
  subscribe=()=>{
    this.setState((prevState)=>{
      return ({isSubscribed:false})
    })
  }
  unsubscribe=()=>{
    this.setState((prevState)=>{
      return ({isSubscribed:true})
    })
  }
  render() {
    const {isSubscribed}=this.state
    return (
      <div className="mainContainer">
        <h1 className="head1">Welcome</h1>
        <p className="para1">Thank you! Happy Learning</p>
        {isSubscribed ? <button className="btn1" type="button" onClick={this.subscribe}>
          Subscribe
        </button> : <button className="btn1" type="button" onClick={this.unsubscribe}>
          Subscribed
        </button>}
      </div>
    )
  }
}

export default Welcome
