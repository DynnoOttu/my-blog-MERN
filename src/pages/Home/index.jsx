import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogItem, Button, Gap } from "../../component";
import "./home.scss";

const Home = () => {
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/blog/posts/")
      .then((result) => {
        const responseAPI = result.data;
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
      <div className="conetnt-wrapper">
        {dataBlog.map((blog) => {
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
