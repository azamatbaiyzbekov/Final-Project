import React from 'react';
import Modal from '../Modals/Modals';

const Posts = (props) => {
   

    const posts = props.posts.map((blog, index) => {
        return (
           
            <div className="card mb-3" key={index} style={{maxWidth: 740 + `px`}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        {/* <img src={ run.picture } className="card-img run-picture" alt="..."/> */}
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title">Blog Info</h5>
                            <p className="card-text">Form</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Title: </strong>{ blog.title }</li>
                                <li className="list-group-item"><strong>Content: </strong>{ blog.content }</li>
                                
                                
                             
                            </ul>
                            <button onClick={() => props.editPost(blog._id)}>Edit</button>
                            <button onClick={() => props.removePost(blog._id)}>Delete</button>
                            

                            
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>Available Posts</h1>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            add Blog
        </button>
        <Modal createPost={props.createPost} />

            { posts }
        </div>
    );
}

export default Posts;

