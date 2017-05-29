import React, { Component } from 'react'
import VideoInfo from './VideoInfo'

class Video extends Component{
   constructor(props) {
      super(props)
      this.state = {
         details: {
            title: 'Cats',
            description: 'Playing cats in garden'
         }
      }
   }
  render() {
     return (
        <div>
            <iframe height="300" width ="500" />
            <VideoInfo details={this.state.details}/>
        </div>
     )
 }
}
export default Video
