// import react
import { useState, useEffect } from "react";

// import next link
import Link from "next/link";

// import next router
import { useRouter } from "next/router";

// import redux
import { useDispatch } from "react-redux";

// Import redux reducer, actions
import { setItems } from "../../redux/payment";

// import MUI components
import { Box, Typography, Paper, Button, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

// import utils
import { flexStyle } from "../../utils/flexStyle";
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";
import formatPrice from "../../utils/formatPrice";

// import services
import API from "../../services/api";
import { capitalize, find, findIndex, get, lowerCase, map, reduce, size, startCase, toLower } from "lodash";
import { VipPackages } from "../../constants/vipPackages.constant";

const VipPackageBenefitItem = (props) => {
  const { benefit, idx, isSm } = props;
  return (
    <Box
      sx={{
        ...flexStyle("center", "center"),
        columnGap: isSm ? "6px" : "20px",
      }}
    >
      <CheckIcon sx={{ color: "#5EC174", width: isSm ? "12px" : "auto" }} />
      <Typography
        sx={{
          ...(isSm ? TEXT_STYLE.caption10Regular : TEXT_STYLE.content1),
          color: idx === 2 ? COLORS.second : COLORS.contentIcon,
          textAlign: "left",
        }}
      >
        {benefit}
      </Typography>
    </Box>
  );
};

const VipPackagePaper = (props) => {
  const {
    data,
    idx,
    bgcolor,
    elevation,
    height,
    isSm,
    selectedPackage,
    handleSelectPackage,
  } = props;

  return (
    <Paper
      onClick={() => {
        handleSelectPackage(idx);
      }}
      sx={{
        bgcolor: bgcolor,
        height: `${height}px`,
        borderRadius: "10px",
        cursor: "pointer",
        ...(idx === selectedPackage && { border: "2px solid #F68C2D" }),
      }}
      elevation={elevation}
    >
      {!isSm && (
        <Typography
          sx={{
            ...TEXT_STYLE.h2,
            color: idx >= 1 ? COLORS.second : COLORS.white,
            textAlign: "center",
            mt: "26px",
          }}
        >
          {capitalize(data.name.toLowerCase())}
        </Typography>
      )}
      <Typography
        sx={{
          ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.title0),
          color: COLORS.white,
          textAlign: "center",
          mt: isSm ? "23px" : "32px",
        }}
      >
        {formatPrice(data.price)}??
      </Typography>
      <Typography
        sx={{
          ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.h2),
          color: isSm ? COLORS.white : COLORS.contentIcon,
          textAlign: "center",
          mt: isSm ? "5px" : "16px",
        }}
      >
        {data?.code === "website_vip_1_month"
          ? "1 th??ng"
          : data?.code === "website_vip_3_month"
          ? "3 th??ng"
          : "1 n??m"}
      </Typography>
      <Divider
        sx={{
          borderColor: COLORS.placeHolder,
          margin: isSm ? "12px 8px" : "24px 52px",
        }}
      />
      <Box>
        {data?.code === "website_vip_1_month" && (
          <Box
            sx={{
              ...flexStyle("center", "flex-start"),
              flexDirection: "column",
              rowGap: isSm ? "4px" : "9px",
              ml: isSm ? "8px" : "52px",
              mr: isSm ? "5%" : "10%",
              mb: "22px",
            }}
          >
            <VipPackageBenefitItem
              isSm={isSm}
              key={0}
              benefit={"Nghe tho???i m??i"}
              idx={0}
            />
            <VipPackageBenefitItem
              isSm={isSm}
              key={1}
              benefit={"???????c t???i v??? ??t"}
              idx={0}
            />
          </Box>
        )}
        {data?.code === "website_vip_3_month" && (
          <Box
            sx={{
              ...flexStyle("center", "flex-start"),
              flexDirection: "column",
              rowGap: isSm ? "4px" : "9px",
              ml: isSm ? "8px" : "52px",
              mr: isSm ? "5%" : "10%",
              mb: "22px",
            }}
          >
            <VipPackageBenefitItem
              isSm={isSm}
              key={0}
              benefit={"Nghe tho???i m??i"}
              idx={0}
            />
            <VipPackageBenefitItem
              isSm={isSm}
              key={1}
              benefit={"???????c t???i v??? ??t"}
              idx={0}
            />
            <VipPackageBenefitItem
              isSm={isSm}
              key={2}
              benefit={"Ti???t ki???m 33%"}
              idx={2}
            />
          </Box>
        )}
        {data?.code === "website_vip_12_month" && (
          <Box
            sx={{
              ...flexStyle("center", "flex-start"),
              flexDirection: "column",
              rowGap: isSm ? "4px" : "9px",
              ml: isSm ? "8px" : "52px",
              mr: isSm ? "5%" : "10%",
              mb: "22px",
            }}
          >
            <VipPackageBenefitItem
              isSm={isSm}
              key={0}
              benefit={"Nghe tho???i m??i"}
              idx={0}
            />
            <VipPackageBenefitItem
              isSm={isSm}
              key={1}
              benefit={"???????c t???i v??? ??t"}
              idx={0}
            />
            <VipPackageBenefitItem
              isSm={isSm}
              key={2}
              benefit={"Ti???t ki???m 41%"}
              idx={2}
            />
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default function VipPackage() {
  const api = new API();

  const windowSize = useWindowSize();
  const navigate = useRouter();
  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [vipPackages, setVipPackages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchVipPackages() {
      try {
        const res = await api.getVipPackage();
        const data = await res.data.data;
        let packages = [...data];

        const oneMonthPackageIndex = findIndex(
          packages,
          (p) => p.code === "website_vip_1_month"
        );
        const threeMonthPackageIndex = findIndex(
          packages,
          (p) => p.code === "website_vip_3_month"
        );
        const oneYearPackageIndex = findIndex(
          packages,
          (p) => p.code === "website_vip_12_month"
        );

        const newPackages = [
          packages[oneMonthPackageIndex],
          packages[threeMonthPackageIndex],
          packages[oneYearPackageIndex],
        ];
        setVipPackages(newPackages);
      } catch (err) {
        console.log(err);
      }
    }

    fetchVipPackages();
  }, []);

  const handleSelectPackage = (idx) => {
    setSelectedPackage(idx);
  };

  const handleRegisterVip = () => {
    const paymentData = {
      selectedItem: [
        {
          type: "vip_package",
          id: vipPackages[selectedPackage]['id'],
          // id: 1,
          name: vipPackages[selectedPackage]["name"],
          pay_price: vipPackages[selectedPackage]["price"],
        },
      ],
      discountCode: vipPackages[selectedPackage]["sale_code"] || null,
      package_type: "plan_package",
      totalPrice: vipPackages[selectedPackage]["price"],
      finalPrice: vipPackages[selectedPackage]["price"],
    };
    dispatch(setItems(paymentData));
    navigate.push("/checkout");
  };

  return (
    <Box>
      <Box
        sx={{
          pt: isSm ? "24px" : "32px",
          mb: isSm ? "24px" : "62px",
        }}
      >
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          G??i th??nh vi??n VIP
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: isSm ? "0 16px" : "0 49px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            ...flexStyle("center", "center"),
            width: "100%",
            "& > :not(style)": {
              width: "calc(100% / 3)",
              maxHeight: 378,
            },
          }}
        >
          {vipPackages.map((p, idx) => (
            <VipPackagePaper
              handleSelectPackage={handleSelectPackage}
              isSm={isSm}
              key={idx}
              idx={idx}
              bgcolor={idx === selectedPackage ? COLORS.bg3 : COLORS.bg2}
              elevation={idx === selectedPackage ? 1 : 2}
              height={
                isSm
                  ? idx === selectedPackage
                    ? 202
                    : 194
                  : idx === selectedPackage
                  ? 378
                  : 348
              }
              data={p}
              selectedPackage={selectedPackage}
            />
          ))}
        </Box>

        <Button
          onClick={handleRegisterVip}
          sx={{
            textTransform: "none",
            bgcolor: COLORS.error,
            ...TEXT_STYLE.title1,
            color: COLORS.white,
            borderRadius: "8px",
            height: "48px",
            width: isSm ? "100%" : "calc(100% / 4)",
            margin: isSm ? "32px auto 32px auto" : "56px auto 32px auto",
          }}
        >
          ????ng k?? ngay
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
            color: COLORS.white,
          }}
        >
          Nghe tho???i m??i *, tr??? d???n theo th???c t??? s??? d???ng
        </Typography>
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
            color: COLORS.VZ_Text_content,
            mt: "8px",
          }}
        >
          Kh??ng t??? ?????ng gia h???n, ph?? h???p cho ng?????i m???i b???t ?????u
        </Typography>
        <a href="http://m.me/VoizFM" target="_blank">
          <Typography
            sx={{
              ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
              color: COLORS.bg4,
              mt: "40px",
              mb: "80px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            H??? tr??? khi g???p v???n ????? trong thanh to??n
          </Typography>
        </a>
      </Box>
    </Box>
  );
}
