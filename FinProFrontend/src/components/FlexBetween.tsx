// style component

import { Box } from "@mui/material";
import { styled } from "@mui/system";

// a styled component for adding css with space between two components
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export default FlexBetween