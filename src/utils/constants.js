const COLORS = {
    stroker: '#D6D6D6',
    title: '#525252',
    bg1: '#1F2129',
    bg2: '#292B32',
    bg3: '#373944',
    bg4: '#BDBDBD',
    blackStroker: '#353535',
    contentIcon: '#ACACAC',
    placeHolder: '#595959',
    main: '#754ADA',
    second: '#F68C2D',
    success: '#00B967',
    error: '#FF554B',
    white: '#FFFFFF',
    VZ_Text_content: '#B8B8B8',
    gray2: '#C6C6C6'
};

const TEXT_STYLE = {
    h1: {
        fontSize: '28px',
        lineHeight: '33px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    h2: {
        fontSize: '24px',
        lineHeight: '26px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    h3: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    title1: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    content1: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    },
    title2: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    content2: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    },
    title3: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    caption12: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: 300,
        fontFamily: 'SF UI Display'
    },
    caption10Bold: {
        fontSize: '10px',
        lineHeight: '13px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    caption10Regular: {
        fontSize: '10px',
        lineHeight: '15px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    },
    VZ_Caption_2: {
        fontSize: '12px',
        lineHeight: '16.8px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    }
};
const SCREEN_BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
}
const FONT_FAMILY = 'SF UI Display';
const FONT_COLOR = '#ACACAC';
const DRAWER_WIDTH = 250;
const HEADER_HEIGHT = '104px';
const HEADER_HEIGHT_MB = '80px';
const EXCLUDE_FOOTER = ['/playlist-detail']
export {
    COLORS, TEXT_STYLE, FONT_FAMILY, FONT_COLOR, HEADER_HEIGHT, DRAWER_WIDTH, SCREEN_BREAKPOINTS, HEADER_HEIGHT_MB,
    EXCLUDE_FOOTER
}