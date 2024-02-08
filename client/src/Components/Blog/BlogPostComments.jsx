import React from 'react'
import BlogPostEachComment from './BlogPostEachComment';

const BlogPostComments = ({postData}) => {
  return (
    <div>
        {postData.comments.length === 0?(
        <div>
                <div className='h-[100px] w-full border my-5 flex justify-center items-center bg-white rounded-lg text-black'>
                No Comments
                </div>
        </div>)
        :(
        <div>
            {postData.comments.map((cmnt,index)=>{
                return(
                    <div key={index} className='w-full border my-5 flex flex-col bg-white rounded-lg text-black'>
                        <BlogPostEachComment cmnt={cmnt} postData={postData} />
                    </div>
                )
            })}
        </div>)
        }
    </div>
  )
}

export default BlogPostComments
