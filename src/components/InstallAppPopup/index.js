import { Box, Dialog, IconButton, Typography } from "@mui/material";
import React from "react";
import { COLORS, TEXT_STYLE } from "../../utils/constants";
import { flexStyle } from "../../utils/flexStyle";
import CloseIcon from '@mui/icons-material/Close';
import { CloseCircleIcon } from "../Icons/CloseCircleIcon";
import Link from "next/link";

const InstallAppPopup = ({ visible, onClose, isSm }) => {
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: COLORS.bg1,
          boxShadow: "none",
          borderRadius: "30px",
          margin: 0,
          width: !isSm ? "512px" : "100%",
          paddingTop: isSm ? "51px" : "40px",
          paddingBottom: isSm ? "65px" : "30px",
          boxSizing: "border-box",
          display: 'flex',
          alignItems: 'center',
          scrollbarGutter: "stable",
        },
      }}
      sx={{
        "& .MuiDialog-container": {
          alignItems: isSm ? "flex-end" : "center",
        },
        "& .MuiDialog-paper": {
          "::-webkit-scrollbar": {
            width: "4px",
          },

          "::-webkit-scrollbar-button": {
            height: "10px",
          },

          "::-webkit-scrollbar-track": {
            borderRadius: "5px",
          },

          "::-webkit-scrollbar-thumb": {
            background: COLORS.bg3,
            borderRadius: "5px",
          },

          ":hover": {
            overflowY: "auto",
          },
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: COLORS.white,
        }}
      >
        <CloseCircleIcon />
      </IconButton>
      <Box>
        <Typography
          sx={{
            ...TEXT_STYLE.title1,
            color: COLORS.white,
            marginBottom: "40px",
            textAlign: "center"
          }}
        >
          Tải ứng dụng
        </Typography>
        <Box sx={{ ...flexStyle(isSm ? "center" : "justify-between", "center"), flexWrap: "wrap", width: "100%" }}>
          <Link href="https://apps.apple.com/us/app/voiz-fm-s%C3%A1ch-n%C3%B3i-podcast/id1447395824">
            <a target="_blank" rel="noopener noreferrer">
              <img src="/images/app_store_install.png" alt="" className="install-btn" />
            </a>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.wewe.musicsounds">
            <a target="_blank" rel="noopener noreferrer">
              <img src="/images/google_play_install.png" alt="" className="install-btn" />
            </a>
          </Link>
        </Box>
      </Box>
    </Dialog>
  );
};

export default InstallAppPopup;