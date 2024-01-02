import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../actions/login";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("登入成功:", response.data.user.username);
      //  將使用者資訊傳給store
      dispatch(loginSuccess(response.data));

      Swal.fire({
        title: "登入成功",
        text: "即將導回首頁",
        icon: "success",
      }).then(() => {
        // 將cookie存到瀏覽器
        Cookies.set("SESSION_ID", response.data.token, { expires: 1 / 24 });
        Router.push("/");
      });
    } catch (e) {
      setMessage(e.message);
      console.error("登入失敗:", e.message);
      dispatch(loginFailure(e.response.data || "登入失敗，未提供授權！"));
    }
  };
  const googleLogin = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/api/user/google",
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center pt-3">登入會員</h1>
        {message && <div className="alert alert-danger">{message}</div>}
        <div>
          <label className="form-label" htmlFor="email">
            電子信箱:
          </label>
          <input
            placeholder="請填寫正確的電子信箱"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            name="email"
            className="form-control"
            type="email"
          />
          <label className="form-label" htmlFor="password">
            密碼
          </label>
          <input
            placeholder="密碼長度需大於6"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            name="password"
            className="form-control"
            type="password"
          />
          <button
            onClick={() => {
              handleLogin();
            }}
            className="btn btn-primary mt-3"
          >
            登入
          </button>
        </div>
        <div>
          <hr />
          <button
            onClick={() => {
              googleLogin();
            }}
            className="btn btn-dark text-white mt-3"
          >
            透過google登入
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
