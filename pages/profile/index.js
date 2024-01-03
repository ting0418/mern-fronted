// Profile.js
import { useSelector } from "react-redux";

const Profile = () => {
  const { isLoggedIn, user, errorMessage } = useSelector((state) => state.user);

  if (isLoggedIn) {
    const date = user.user.date.toISOString().split("T")[0];
    return (
      <>
        <h1 className="text-center">這是你的個人檔案頁面</h1>
        <div>
          <p>你的用戶名稱為: {user.user.username}</p>{" "}
          <p>你的身分為: {user.user.role}</p>
          <p>註冊日期為: {date}</p>
          {/* 其他用戶相關信息 */}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-center">請先登入</h1>
        <div>
          <p>{errorMessage}</p>
        </div>
      </>
    );
  }
};

export default Profile;
