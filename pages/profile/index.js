// Profile.js
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Router from "next/router";
const Profile = () => {
  const { isLoggedIn, user, errorMessage } = useSelector((state) => state.user);

  if (isLoggedIn) {
    return (
      <>
        <h1 className="text-center">這是你的個人檔案頁面</h1>
        <div>
          <p>你的用戶名稱為: {user.user.username}</p>{" "}
          <p>你的身分為: {user.user.role}</p>
          <p>註冊日期為: {user.user.date}</p>
          {/* 其他用戶相關信息 */}
        </div>
      </>
    );
  } else {
    Swal.fire({
      title: "請先登入",
      text: "即將導往登入頁面",
      icon: "success",
    }).then(() => {
      Router.push("/login");
    });
  }
};

export default Profile;
