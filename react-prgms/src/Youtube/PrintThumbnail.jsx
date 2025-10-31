import React from 'react'

const PrintThumbnail = (props) => {
    console.log(props);
    
  return (
    <div>
        <div onClick={()=>{props.fun(props.lio)}}>
            <img height={200} width={300} src={props.lio.thumbnailUrl} alt="" />
            <h3>{props.lio.title}</h3>
            <span>|</span>
            <i>{props.lio.duration}</i>
            <span>|</span>
            <i>{props.lio.uploadTime}</i>
            <span>|</span>
            <i>{props.lio.views}</i>
            <span>|</span>
            <i>{props.lio.author}</i>
            <span>|</span>

        </div>
    </div>
  )
}

export default PrintThumbnail