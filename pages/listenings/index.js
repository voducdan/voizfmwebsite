// import components
import Listening from "../../src/components/Listening/Listening";
import Cookies from "universal-cookie";

const ListeningPage = () => {
  return <Listening />;
};

export const getServerSideProps = (context) => {
  const cookies = new Cookies(context.req.headers.cookie);
  const token = cookies.get("token");

  if (token === "null" || token === "undefined") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default ListeningPage;
