import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="image-blog" />
      <div className="content-detail">
        <div className="">
          <p className="title">Title</p>
          <p className="author">Date Post</p>
          <p className="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            perspiciatis necessitatibus sed ad alias, maiores officia qui at
            quas quod suscipit quia accusamus laboriosam a. Tempora dolores quos
            cumque itaque natus placeat. Debitis ex impedit reprehenderit quae
            ut! Beatae, dicta ab ullam consequatur nihil quidem repudiandae
            blanditiis explicabo dolore possimus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
