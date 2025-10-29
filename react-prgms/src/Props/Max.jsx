import React, { Fragment } from 'react'

const Max = (props) => {
    console.log(props);

    return (
        <div>
            {
                props.food.recipes.map((items) => {
                    console.log(items);
                    return <Fragment>
                        <img src={items.image} alt="" height={200} width={200} />
                    </Fragment>
                })
            }
        </div>
    )
}

export default Max