import React from 'react'
import Counter from './Counter'

const ParentCounter = () => {
  return (
    <div>
        <Counter initialValue={10} step={2}></Counter>
    </div>
  )
}

export default ParentCounter