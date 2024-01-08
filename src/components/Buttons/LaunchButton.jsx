/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: 3, ...sx }} {...props}>
      Launch dApp
      <KeyboardArrowRightIcon />
    </Button>
  );
};

export default LaunchButton;