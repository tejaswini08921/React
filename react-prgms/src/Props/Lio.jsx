import React, { Fragment } from 'react'

const Lio = (props) => {
  console.log(props)

  return (
    <div>
      {
        props.access.carts.map((cart) => (
          <Fragment key={cart.id}>
            {
              cart.products.map((prod) => (
                <Fragment key={prod.id}>
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    width="200"
                    height="150"
                    style={{ margin: "10px", borderRadius: "10px" }}
                  />
                </Fragment>
              ))
            }
          </Fragment>
        ))
      }
    </div>
  )
}

export default Lio
