//import react 
import { useState } from 'react';

// import MUI components
import {
    Typography,
    Box,
    Chip,
    Button
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// import utils
import { TEXT_STYLE, COLORS } from '../../utils/constants'
import { flexStyle } from '../../utils/flexStyle'

export default function CategoryBarWithoutSwiper(props) {
    const { categoryList, isSm, onSelectCategory } = props;
    const [activeCategory, setActiveCategory] = useState(null);
    const [isAllCategoty, setIsAllCategoty] = useState(false);
    const [categoryBarHeight, setCategoryBarHeight] = useState('36px');

    const newCategoryList = [{ "name": "Tất cả", "sub_name": null, "code": null }, ...categoryList];

    const handleSelectCategory = (e) => {
        let categoryCode = e.target.id;
        setActiveCategory(categoryCode);
        onSelectCategory(categoryCode);
    }

    const handleShowAllCategory = () => {
        setCategoryBarHeight('auto');
        setIsAllCategoty(true);
    }

    const handleShowLessCategory = () => {
        setCategoryBarHeight('36px');
        setIsAllCategoty(false);
    }

    return (
        <Box
            style={{
                marginTop: isSm ? 20 : 48,
                ...flexStyle('center', 'center')
            }}
        >
            <Box
                sx={{
                    ...(isAllCategoty ? flexStyle('flex-start', 'center') : flexStyle('space-between', 'center')),
                    columnGap: '30px',
                    rowGap: '34px',
                    overflow: 'hidden',
                    flexWrap: 'wrap',
                    height: categoryBarHeight
                }}
            >

                {newCategoryList.map(item => (
                    <Box
                        key={item.code}
                        sx={{
                            height: '100%',
                            ...flexStyle('center', 'center'),
                        }}
                    >
                        {
                            (item.code !== activeCategory) && (
                                <Typography
                                    id={item.code}
                                    onClick={handleSelectCategory}
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                        color: COLORS.VZ_Text_content,
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            )
                        }
                        {
                            (item.code === activeCategory) && (
                                <Chip
                                    id={item.code}
                                    onClick={handleSelectCategory}
                                    label={item.name}
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                        color: COLORS.VZ_Text_content,
                                        bgcolor: COLORS.bg3,
                                        whiteSpace: 'nowrap',
                                        '&:hover': {
                                            bgcolor: 'rgb(219 173 173 / 26%)'
                                        }
                                    }}
                                />
                            )
                        }
                    </Box>
                ))
                }
                {
                    isAllCategoty && (
                        <Button
                            onClick={handleShowLessCategory}
                            sx={{
                                ...TEXT_STYLE.title1,
                                color: COLORS.VZ_Text_content,
                                textTransform: 'none',
                                minWidth: '116px',
                                p: 0
                            }}
                            endIcon={<ArrowDropUpIcon />}
                        >
                            Thu gọn
                        </Button>
                    )
                }
            </Box>
            {!isAllCategoty && (
                <Button
                    onClick={handleShowAllCategory}
                    sx={{
                        ...TEXT_STYLE.title1,
                        color: COLORS.VZ_Text_content,
                        textTransform: 'none',
                        ml: '30px',
                        minWidth: '116px',
                        p: 0
                    }}
                    endIcon={<ArrowDropDownIcon />}
                >
                    Xem thêm
                </Button>
            )}

        </Box >
    )
}