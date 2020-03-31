import React from 'react';
import './style.css';
import BlogImage from '../../images/design.jpeg'
const BlogImageDescription = (props) => {
    return (
        <>
            <div className="blogImageDescriptionContainer">
                <img className="blogDescriptionImage" src={BlogImage} />
            </div>
            <hr />
        </>
    );
};

export default BlogImageDescription;