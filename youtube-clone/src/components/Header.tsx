import React from 'react'

export const Header = () => {
    return (
        <div className='min-w-full h-20 flex justify-between items-center flex-col'>
            <div className='min-w-full h-60 bg-black flex justify-around items-center'>
                <div className='flex'>
                    <h1>sidbar</h1>
                    <h1>youtube logo</h1>
                </div>
                <div className='flex'>
                    <h1>search bar</h1>
                    <h1>mic icon</h1>
                </div>
                <div className='flex'>
                    <h1>create</h1>
                    <h1>notification</h1>
                    <h1>profile</h1>
                </div>
            </div>
            <div className='flex h-40 justify-between items-center min-w-80'>
                <button>buttons</button>
                <button>buttons</button>
                <button>buttons</button>
                <button>buttons</button>
                <button>buttons</button>
                <button>buttons</button>
                <button>buttons</button>
            </div>
        </div>
    )
}
