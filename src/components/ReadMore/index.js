import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const ReadMore = ({ children, moreBtn = "⬇ More", lessBtn = "⬆ Less" }) => {
  const [isHidden, setIsHidden] = useState(true);
  const buttonTitle = isHidden ? moreBtn : lessBtn;

  return (
    <Box>
      <Typography className={isHidden ? 'read-more-hidden' : null}>{children}</Typography>
      <Button className="read-more-btn" size="small" fullWidth onClick={() => setIsHidden(!isHidden)}>
        {buttonTitle}
      </Button>
    </Box>
  );
};

export default ReadMore;
