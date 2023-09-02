import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogItem, Button, Gap } from "../../component";
import "./home.scss";
import { setDataBlog } from "../../config/redux/action";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  console.log("PAGE", page);

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : -1);
    console.log(counter);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    console.log(counter);
  };

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
        <Button
          title="Previous"
          onClick={previous}
          style={{ marginRight: "20px" }}
        />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} style={{ marginLeft: "20px" }} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
