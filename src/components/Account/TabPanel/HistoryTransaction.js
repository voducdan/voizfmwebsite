// import others component
import TabPanel from '../../../components/TabPanel/TabPanel';

// import mui components
import {
    Box,
    Typography
} from '@mui/material'

// import utils
import { flexStyle } from '../../../utils/flexStyle';
import { COLORS, TEXT_STYLE } from '../../../utils/constants';

const PanelContent = (props) => (
    <Box Box
        sx={{
            ...flexStyle('center', 'flex-start'),
            flexDirection: 'column',
            backgroundColor: COLORS.bg2,
            rowGap: props.isSm ? '24px' : '32px',
            padding: props.isSm ? '16px' : '32px'
        }}>
        <Typography sx={{ ...(props.isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2), color: COLORS.white }}>Lịch sử giao dịch</Typography>
        <Box
            sx={{
                ...flexStyle('center', 'center'),
                flexDirection: 'column',
                rowGap: '16px',
                width: '100%'
            }}
        >
            {
                props.transactions.map((item, idx) => (

                    <Box key={idx}
                        sx={{
                            backgroundColor: COLORS.bg3,
                            boxSizing: 'border-box',
                            padding: '24px',
                            borderRadius: '10px',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ ...(props.isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1), color: COLORS.VZ_Text_content }} >
                                Tên:
                            </Typography>
                            <Typography sx={{ ...(props.isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1), color: COLORS.white, marginLeft: '7px' }}>
                                {item.name}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ display: 'flex', ...TEXT_STYLE.content1, color: COLORS.VZ_Text_content }} >
                                Đơn giá:
                            </Typography>
                            <Typography sx={{ ...TEXT_STYLE.title1, color: COLORS.white, marginLeft: '7px' }}>
                                {new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 3 }).format(item.cost)} {item.unit}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ display: 'flex', ...TEXT_STYLE.content1, color: COLORS.VZ_Text_content }} >
                                Mã giao dịch:
                            </Typography>
                            <Typography sx={{ ...TEXT_STYLE.title1, color: COLORS.white, marginLeft: '7px' }}>
                                {item.id}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ display: 'flex', ...TEXT_STYLE.content1, color: COLORS.VZ_Text_content }} >
                                Thời gian:
                            </Typography>
                            <Typography sx={{ ...TEXT_STYLE.title1, color: COLORS.white, marginLeft: '7px' }}>
                                {`${item.transaction_time}`}
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    </Box >
)

export default function HistoryTransaction(props) {
    const { isSm } = props
    const transactions = [
        {
            id: 'WEWE9042223482',
            name: 'Gói cơ bản',
            cost: 276000,
            unit: 'VND',
            transaction_time: '04:48  02-08-2021',
        },
        {
            id: 'WEWE9042223482',
            name: 'Chào em cô gái ngày hôm qua',
            cost: 270000,
            unit: 'VND',
            transaction_time: '04:48  02-08-2021',
        },
        {
            id: 'WEWE9042223482',
            name: 'Gói 3500 xu',
            cost: 399000,
            unit: 'VND',
            transaction_time: '04:48  02-08-2021',
        }
    ]

    return (
        <TabPanel value={props.value} index={0} children={PanelContent({ transactions, isSm })} ></TabPanel>
    )
}