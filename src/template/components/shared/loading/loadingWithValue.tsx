import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Box, Typography, Backdrop } from "@mui/material";

interface Props {
  variant?: "determinate" | "indeterminate";
  thickness?: number;
  sx?: object;
  size?: number | string;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit"
    | undefined;
  value: number;
  className?: string;
  open: boolean;
}

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          style={{ fontSize: 20, color: "#fff" }}
          // color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularUnderLoad({
  variant,
  thickness,
  sx,
  size,
  color,
  value,
  className,
  open,
}: Props) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgressWithLabel
        color={color}
        sx={sx}
        size={size}
        variant={variant}
        value={value}
        thickness={thickness}
        className={className}
      />
    </Backdrop>
  );
}
