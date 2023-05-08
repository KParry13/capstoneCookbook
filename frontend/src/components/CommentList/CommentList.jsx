import React from 'react'

const CommentList = ({ comments }) => {
    console.log(comments)
    return ( 
        <div>
            <h5> Average Rating: {comments.average_rating}</h5>
            <h4>What Others Think</h4>
                <div className='contain'>
                    {comments.reviews && comments.reviews.map((item => 
                    <h5>
                    {item.text} 
                    <br></br>
                    {item.rating} out of five!
                    </h5>
                    ))}
                </div>
        </div>
     );
}
 
export default CommentList;