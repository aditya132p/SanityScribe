
import React from 'react'
import { AuthorTypes } from '../AuthorPage';
type AuthorCardProps = {
  authorData: AuthorTypes[]
}
const AuthoreCard = ({ authorData }: AuthorCardProps) => {

  return (
    <>
      <div className='w-full flex gap-4 flex-col items-center justify-center h-96 bg-primary-0 dark:bg-[#242535] rounded-3xl'>
        <div className='flex items-center gap-3 '>
          <img src={authorData[0].img} className='w-16 h-16 object-cover rounded-full' alt="" />
          <h1 className='text-primary-3 text-2xl dark:text-primary-1 font-bold'>{authorData[0].name}</h1>
        </div>
        <div className='w-10/12  text-center'>
          <p className=' text-primary-2 dark:text-primary-1 '>{authorData[0].bio}</p>
        </div>
      </div>
    </>
  )
}

export default AuthoreCard;