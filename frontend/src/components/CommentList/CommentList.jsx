import React from 'react'

const CommentList = ({ comments }) => {
    console.log(comments)
    return ( 
        <div>
            <h5> Average Rating: {comments.average_rating}</h5>
            <h4>What Others Think</h4>
            {comments.reviews && comments.reviews.map((item => 
            <p>
            {item.text} 
            </p>
            ))}
        </div>
     );
}
 
export default CommentList;