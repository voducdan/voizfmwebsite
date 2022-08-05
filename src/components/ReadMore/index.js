import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "-webkit-box",
    WebkitLineClamp: 4,
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
  },
}));
const ReadMore = ({ children, moreBtn = "⬇ More", lessBtn = "⬆ Less" }) => {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  const buttonTitle = isHidden ? moreBtn : lessBtn;
  const hiddenClass = classes.hidden;
  console.log("isHidden: ", isHidden, hiddenClass, classes);
  return (
    <>
      <div className={isHidden ? 'read-more-hidden' : null}>{children}</div>
      <Button className="read-more-btn" size="small" fullWidth onClick={() => setIsHidden(!isHidden)}>
        {buttonTitle}
      </Button>
    </>
  );
};

export default ReadMore;
