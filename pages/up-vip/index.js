// import reduc
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../src/redux/store";

// import components
import UpVip from "../../src/components/UpVip/UpVip";
import Cookies from "universal-cookie";
import { selectUser } from "../../src/redux/user";
import { useEffect } from "react";
import { handleOpenVipUserPopup } from "../../src/redux/openVipUserPopup";
import { useRouter } from "next/router";
import { get } from "lodash";

const UpVipPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isVip = get(user, 'promotion', '') === "vip";

  useEffect(() => {
    if (isVip) {
      dispatch(handleOpenVipUserPopup());
      router.push("/"); 
    }
  }, [isVip]);
  
  return !isVip ? <UpVip /> : "";
};

export const getServerSideProps = (context) => {
  const cookies = new Cookies(context.req.headers.cookie);
  const token = cookies.get("token");

  if (token === 'null' || token === 'undefined') {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default UpVipPage;
