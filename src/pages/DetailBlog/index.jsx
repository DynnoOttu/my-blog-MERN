import React from "react";
import { RegisterBg } from "../../assets";
import "./detailblog.scss";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="Image Detail Blog" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
        accusantium incidunt voluptates officia enim consequatur nostrum
        quibusdam dignissimos sint veritatis.
      </p>
    </div>
  );
};

export default DetailBlog;
