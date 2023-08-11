import { makeStyles } from "@mui/styles";
import theme from "./theme";
// import { grey } from "@mui/material/colors";

const buttonStyle = makeStyles({
  imageButton: {
    display: "block",
    height: 400,
    [theme().breakpoints.up("xs")]: { height: 250 },
    [theme().breakpoints.up("sm")]: { height: 350 },
    [theme().breakpoints.up("md")]: { height: 300 },
    [theme().breakpoints.up("lg")]: { height: 300 },
    [theme().breakpoints.up("xl")]: { height: 300 },
    minWidth: 200,
    position: "relative",
    width: "100% !important",
    "& .MuiImageBase-root": {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "absolute",
      borderRadius: "0.5rem",
    },
    "& .MuiImageBackdrop-root": {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.4,
      borderRadius: "0.5rem",
      position: "absolute",
      backgroundColor: theme().palette.common.black,
      transition: theme().transitions.create("opacity"),
    },
    "& .MuiImageFlex-root": {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      color: "white",
      display: "flex",
      alignItems: "end",
      position: "absolute",
    },
    "& .MuiTypography-root": {
      gap: 8,
      padding: 8,
      display: "flex",
      alignItems: "center",
      transition: "300ms ease-out",
    },
    "& .MuiSvgFlip-root": {
      transformStyle: "preserve-3d",
      transition: "300ms ease-out",
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        paddingBottom: "1rem",
      },
      "& .MuiSvgFlip-root": {
        transform: "rotateY(180deg)",
      },
    },
  },
  menuFullButton: {
    padding: "6px 0",
    display: "flex",
    alignItems: "center",
    transition: "250ms ease-out",
    justifyContent: "space-between",
    [theme().breakpoints.up("xs")]: { width: "100%" },
    [theme().breakpoints.up("sm")]: { sm: "auto" },
    "&:focus": { padding: "6px 2px" },
  },
  examButtonGroup: {
    display: "flex",
    "& .MuiToggleButtonGroup-grouped": {
      fontSize: "1rem",
      justifyContent: "flex-start",
      marginBottom: theme().spacing(2),
      border: `1px solid ${theme().palette.divider} !important`,
      "&.Mui-selected": {
        color: "white",
        backgroundColor: theme().palette.primary.main,
        "&.correct": { backgroundColor: theme().palette.success.main },
        "&.incorrect": { backgroundColor: theme().palette.error.main },
      },
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: theme().shape.borderRadius,
      },
      "&:first-of-type": {
        borderRadius: theme().shape.borderRadius,
      },
    },
  },
  iconTextButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "4px",
    color: theme().palette.secondary.light,
    "&.row": { flexDirection: "row" },
  },
});

export default buttonStyle;
