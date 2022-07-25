import React from 'react';
import { Typography, Box, Link } from "@mui/material";
import { RightArrow } from '../Icons';
import { map, size } from 'lodash';
import { COLORS, FONT_COLOR, FONT_FAMILY, TEXT_STYLE } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle';

const NavigationBar = ({ histories = [], paddingX, paddingTop = 0 }) => {
  const lastIndex = size(histories) - 1;

  return (
    <Box
      sx={{
        ...flexStyle("flex-start", "center"),
        marginBottom: "24px",
        p: `${paddingTop ? paddingTop : 8}px ${paddingX}px 0`,
      }}
    >
      {map(histories, (history, index) => (
        <>
          <Link
            href={history.url}
            sx={{
              ...(TEXT_STYLE.content2),
              fontFamily: FONT_FAMILY,
              color: index === lastIndex ? COLORS.white : FONT_COLOR,
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                color: COLORS.white
              },
            }}
          >
            {history.name}
          </Link>
          {index < lastIndex && (
            <Box sx={{ margin: "3px 8px 0", display: "flex" }}>
              <RightArrow width={8} height={8} fill={COLORS.white} />
            </Box>
          )}
        </>
      ))}
      
    </Box>
  );
};

export default NavigationBar;