import React, { Fragment } from 'react'

const Box4 = (props) => {
  console.log(props);

  return (
    <div>
      {
        props.data33.products.map((item) => (
          <Fragment key={item.id}>
            <img src={item.images[0]} alt={item.title} width="200" height="150" />
          </Fragment>
        ))
      }
    </div>
  )
}

export default Box4
