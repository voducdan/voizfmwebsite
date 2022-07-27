import { Box } from "@mui/material";

import useWindowSize from "../../utils/useWindowSize";
import { SCREEN_BREAKPOINTS } from "../../utils/constants";

export default function Thumbnail(props) {
  const { style, avtSrc, alt, promotion } = props;
  const windowSize = useWindowSize();
  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: "3px",
        ...(promotion && {
          "&::before": {
            content: promotion.includes("vip")
              ? "url('/images/dvip.png')"
              : promotion === "coin"
              ? "url('/images/dcoin.png')"
              : "url('/images/dfree.png')",
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 8,
          },
        }),
      }}
    >
      <img
        style={{
          ...style,
          objectFit: "cover",
        }}
        src={avtSrc}
        alt={alt}
        loading="lazy"
      />
    </Box>
  );
}
