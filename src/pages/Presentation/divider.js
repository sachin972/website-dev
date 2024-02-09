import Divider from "@mui/material/Divider";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

function DividerWithText({ text }) {
  return (
    <Box position="relative">
      <Divider />
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "background.paper",
          px: 1,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

// Setting default props for the ExampleCard
DividerWithText.defaultProps = {
  text: "",
};

// Typechecking props for the ExampleCard
DividerWithText.propTypes = {
  text: PropTypes.string,
};

export default DividerWithText;
