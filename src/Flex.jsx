import React from 'react'

const Flex = () => {
  return (
    <div >
        <div>
            Header
        </div>
        <div className='flex '>
        <div className='basis-1/4'> 
                <div>Sidebar</div>
            </div>
            <div className='basis-3/4'>
                Main Content
            </div>
            <div className='basis-1/4'> 
                <div>Another Sidebar</div>
            </div>
        </div>
    </div>
  )
}

export default Flex