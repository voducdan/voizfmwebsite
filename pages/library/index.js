// import components
import Library from "../../src/components/Library/Library";
import Cookies from "universal-cookie";

const LibraryPage = () => {
  return <Library />;
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

export default LibraryPage;
