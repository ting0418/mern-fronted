import axios, { Axios } from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "next/link";
function PostCourse() {
  const { isLoggedIn, user } = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const postCourse = async () => {
    try {
      const response = await axios.post(
        "https://mern-api-fzml.onrender.com/api/courses/",
        { title, description, price },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className="container">
        {!isLoggedIn && (
          <>
            <p>你必須先登入且身分為教師才可以新增課程</p>
            <button className="btn btn-primary">
              <Link href="/login">返回登入頁面</Link>
            </button>
          </>
        )}
        <h1 className="text-center">新增課程</h1>
        <label className="form-label" htmlFor="courseName">
          課程名稱：
        </label>
        <input
          className="form-control mb-2"
          id="courseName"
          placeholder="輸入文字不可多於10個字"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label className="form-label" htmlFor="courseDes">
          課程描述：
        </label>
        <textarea
          className="form-control mb-2"
          id="courseDes"
          placeholder="請輸入至少50字的課程介紹"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <label className="form-label " htmlFor="coursePrice">
          課程價格：
        </label>
        <input
          className="form-control mb-2"
          id="coursePrice"
          placeholder="請輸入此課程的價格"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <button
          onClick={postCourse}
          className="btn btn-primary d-flex justify-content-end"
        >
          發布課程
        </button>
      </div>
    </>
  );
}

export default PostCourse;
