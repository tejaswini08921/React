import React, { Fragment } from 'react'

const Box3 = (props) => {
  console.log(props);

  return (
    <div>
      {
        props.data23.recipes.map((recipe) => (
          <Fragment key={recipe.id}>
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name} width="200" height="150" />
          </Fragment>
        ))
      }
    </div>
  )
}

export default Box3
