import Cookies from "js-cookie";
import toast from "react-hot-toast";

export async function TokenGenerate(apiToken) {
  const res = await apiToken({
    refreshtoken: Cookies.get("refreshToken"),
  });
  if (res?.data?.status === 201) {
    Cookies.set("accessToken", res?.data?.data?.accessToken);
    window.location.reload();
  } else {
    toast.error(res.error.data.message);
  }
}
