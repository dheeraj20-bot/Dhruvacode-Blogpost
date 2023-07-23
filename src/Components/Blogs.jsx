import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'



const Blogs = () => {
  const {posts,loading} =useContext(AppContext)
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex px-2 mt-[70px] mb-[50px] flex-col gap-y-7'>
      {
        loading ?(<Spinner/>):(posts.length===0?(
        <div>
           <p> No Post Available </p> </div>):(posts.map((post)=>(
           <div key={post.id}>
            <p className='font-bold text-lg'>{post.title}</p>
            <p className='text-[10px] mt-[4px]'>
              By <span  className=' italic'>{post.author}</span> on <span className=' underline'>{post.category}</span>
            </p>
            <p className='text-[10px]'>Posted on {post.date}</p>
            <p className='text-[11px] mt-[14px]'>{post.content}</p>
            <div className='flex gap-x-3'>
              {post.tags.map((tag,index)=>{
               return <span className='text-blue-700 font-bold underline text-xs flex flex-wrap mt-[5px]' key={index}>{`#${tag} `}</span>
})}
            </div>
            </div> 
         
            )))
        )
      }
    </div>
  )
}

export default Blogs