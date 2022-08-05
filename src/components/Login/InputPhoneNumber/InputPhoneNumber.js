import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import { size } from "lodash";
import React from "react";
import { flexCenter } from "../../../constants/styles.constant";
import { COLORS, COUNTRY_CODES, TEXT_STYLE } from "../../../utils/constants";
import { flexStyle } from "../../../utils/flexStyle";
import CustomDisabledButton from "../../CustomDisabledButton/CustomDisabledButton";
import { GreenTick } from "../../Icons";
import DownArrowIcon from "../../Icons/DownArrowIcon";

const phonePrefixList = COUNTRY_CODES;

const InputPhoneNumber = ({
  isSm,
  phoneNumber,
  countryCode,
  subTitle = "",
  handleChangeCountryCode,
  onPhoneChange,
  onEnterPhone,
}) => {

  return (
    <Box
      sx={{
        marginTop: "32px",
        width: "100%",
        ...flexCenter,
        flexDirection: "column",
        rowGap: "24px",
      }}
    >
      <Typography
        sx={{
          ...TEXT_STYLE.title1,
          color: COLORS.white,
        }}
      >
        Nhập số điện thoại của bạn để tiếp tục
      </Typography>
      {!!subTitle && (
        <Box
        sx={{
          ...flexStyle("flex-start", "center"),
          columnGap: "11px",
          mb: "10px",
        }}
      >
        <GreenTick />
        <Typography
          sx={{
            ...TEXT_STYLE.caption12,
            color: COLORS.contentIcon,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
      )}
      <Box
        sx={{
          width: "100%",
          display: flexCenter.display,
          columnGap: "16px",
          height: "50px",
        }}
      >
        <Select
          id="select-phone-prefix"
          value={countryCode}
          onChange={handleChangeCountryCode}
          label="countryCode"
          sx={{
            ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
            maxWidth: "140px",
            width: "100%",
            border: "1px solid #353535",
            borderRadius: "4px",
            color: COLORS.white,
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-icon": {
              color: COLORS.white,
            },
          }}
          IconComponent={() => <DownArrowIcon width="36" className="pr-10" />}
        >
          {phonePrefixList.map((prefix, idx) => (
            <MenuItem key={idx} value={prefix}>
              +{prefix}
            </MenuItem>
          ))}
        </Select>
        <TextField
          sx={{
            borderRadius: "4px",
            border: "1px solid #353535",
            justifyContent: "center",
            height: "48px",
            "& .MuiOutlinedInput-root": {
              height: "48px",
            },
            "& .MuiOutlinedInput-input": {
              color: COLORS.white,
              ...(!isSm ? TEXT_STYLE.h2 : TEXT_STYLE.h3),
            },
          }}
          id="phone-number"
          placeholder="987654321"
          variant="outlined"
          autoComplete="off"
          value={phoneNumber}
          onChange={onPhoneChange}
        />
      </Box>
      <CustomDisabledButton
        disabled={size(phoneNumber) < 5 || size(phoneNumber) > 50}
        onClick={onEnterPhone}
        style={{
          width: "100%",
          textTransform: "none",
          marginBottom: !isSm ? "20px" : "30px",
          height: "48px",
          ...(!isSm ? TEXT_STYLE.title1 : TEXT_STYLE.title2),
        }}
        content={"Tiếp tục"}
      />
    </Box>
  );
};

export default InputPhoneNumber;
