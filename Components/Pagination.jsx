import React from 'react'

function Pagination({pageNo,prev,next}) {
    return (
        
            <div className='bg-gray-400 flex flex-row items-center justify-center gap-3'>
                <div onClick={prev}>
                    <i class="fa-solid fa-backward"></i>
                </div>
                <div>{pageNo}</div>
                <div onClick={next}>
                    <i class="fa-solid fa-forward"></i>

                </div>
            </div>
        
    )
}

export default Pagination
