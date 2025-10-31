import React from 'react'

const VideoPlayer = ({play}) => {
  return (
    <div>
        <video height={500} width={850} controls autoPlay src={play}></video>
    </div>
  )
}

export default VideoPlayer