import { withStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

import { COLORS, TEXT_STYLE } from '../../utils/constants'

const styles = theme => ({
    button: {
        "&:disabled": {
            backgroundColor: COLORS.bg3,
            color: COLORS.placeHolder,
            ...TEXT_STYLE.title1,

        }
    }
});

function CustomDisabledButton(props) {
    const { classes } = props;
    return (
        <Button sx={{ ...props.style }} disabled className={classes.button}>
            {props.content}
        </Button>
    );
}


export default withStyles(styles)(CustomDisabledButton);