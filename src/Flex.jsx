import React from 'react'

const Flex = () => {
  return (
    <div >
        {/* <div>
            Header
        </div>
        <div className='flex '>
        <div className='basis-4/12'> 
                <div>Sidebar</div>
            </div>
            <div className='basis-6/12'>
                Main Content
            </div>
            <div className='basis-2/12'> 
                <div>Another Sidebar</div>
            </div>
        </div> */}
        
        {/* <div>
            Header
        </div>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-32 bg-sky-500'>Sidebar</div>
            <div className='w-full bg-red-600'>Main Content</div>
            <div className='flex flex-wrap'>
                <div className='w-32 grow'>02</div>
                <div className='w-32 grow'>01</div>
                <div className='w-32 grow'>03</div>
                <div className='w-32 grow'>04</div>
                <div className='w-32 grow'>05</div>
            </div>
        </div> */}

        <div>Header</div>
        <div className="flex  items-baseline">
            {/* <div>Sidebar</div>
            <div>
                <h1 className='font-bold'>Main Content</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur ullam in deserunt, temporibus optio qui eos assumenda labore, cum similique a. Voluptatum vitae provident molestiae natus distinctio repudiandae et.</p>
            </div>
            <div>Another Sidebar</div> */}

            <div className="pt-8 pb-12">01</div>
            <div className="pt-2 pb-6">02</div>
            <div className="pt-12 pb-4">03</div>
        </div>
    </div>
  )
}

export default Flex