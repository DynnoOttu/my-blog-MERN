import React, { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../component";
import "./home.scss";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const [dataBlog, setDataBlog] = useState([]);
  const { dataBlogs, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log("DATA BLOG GLOBAL", dataBlog);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "UPDATE_NAME" });
    }, 3000);

    axios
      .get("http://localhost:4000/v1/blog/posts/")
      .then((result) => {
        console.log("DATA API", result);
        const responseAPI = result.data;
        // setDataBlog(responseAPI.data);

        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log("ERROR API", err);
      });
  }, []);
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" />
      </div>
      <Gap height={25} />
      <p>{name}</p>
      <div className="conetnt-wrapper">
        {dataBlogs.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <Gap height={25} />
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
