// import MUI components
import {
    Box
} from '@mui/material';

// import others components
import VipPackage from "./VipPackage";
import VipBenefit from "./VipBenefit";
import VipCombo from "./VipCombo";

export default function UpVip() {
    return (
        <Box>
            <VipPackage />
            <VipBenefit />
            <VipCombo />
        </Box>
    )
}