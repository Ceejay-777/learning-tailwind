import React from 'react'

const Typography = () => {
  return (
    <div>
        <h1 className='text-9xl'>Title 1</h1>
        <h2 className='text-2xl'>Title 2</h2>
        <h3 className='text-xl'>Title 3</h3>
        <p text-base>A regular paragraph</p>
        <p className='text-sm'>A description paragraph</p>
        <p className="note text-xs">A little note</p>
    </div> 
  )
}

export default Typography