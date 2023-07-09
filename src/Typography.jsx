import React from 'react'

const Typography = () => {
  return (
    <div>
        <h1 className='text-3xl italic '>Title 1</h1>
        <h2 className='text-2xl'>Title 2</h2>
        <h3 className='text-xl'>Title 3</h3>
        <p className='text-base underline decoration-orange-500 decoration-wavy decoration-2 underline-offset-4  leading-loose'>A regular paragraph</p>
        <p className='text-sm capitalize'>a description paragraph</p>
        <p className="note text-xs">A little note</p> 
        <div style={{width: "200px"}}>
          <p className='truncate'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consectetur minima rerum neque, at pariatur magni porro molestiae esse eius tenetur reprehenderit eaque incidunt suscipit ad! Fuga adipisci illum illo aut quisquam doloribus consequuntur, saepe perspiciatis velit, nulla necessitatibus corrupti.</p>
        </div>
        <div className=''>
          <p className='break-all'>Lorem ipsum. Culpa consectetur minima rerum neque, atpariaturmagniorromolestiaeesseeiusteneturreprehenderiteaqueinciduntsuscipit .</p>
        </div>
    </div> 
  )
}

export default Typography