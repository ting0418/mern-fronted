import Cookies from "js-cookie";
import axios from "axios";

export async function FetchUserData() {
  const accessToken = Cookies.get("SESSION_ID");
  console.log(accessToken);

  if (!accessToken) {
    console.log("使用者未登入");
    return false;
  }

  try {
    let response = await axios.get(
      "https://mern-api-fzml.onrender.com/api/user/private",
      {
        withCredentials: true,
      }
    );

    console.log("使用者資料:", response.data);
    return response.data;
  } catch (e) {
    console.error(e.message);
  }
}
