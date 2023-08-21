import React from "react";
import "./blogitem.scss";

const BlogItem = (props) => {
  const { image, title, name, date, body } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="image-blog" />
      <div className="content-detail">
        <div className="">
          <p className="title">{title}</p>
          <p className="author">
            {name} - {date}
          </p>
          <p className="body">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
