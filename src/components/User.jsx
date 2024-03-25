import React from 'react'

const User = ({data}) => {
  return (
    <div className='bg-yellow-400/30  w-28 h-28 rounded-md bg- flex justify-center items-center flex-col gap-2'>
        <img className='w-16h h-16 rounded-full' src={data?.img} alt="user-photo" />
        <p className='text-sm font-semibold'>{data?.name}</p>
    </div>
  )
}

export default User;