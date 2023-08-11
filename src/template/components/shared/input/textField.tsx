import TextField from "@mui/material/TextField";
interface Props {
  id?: string;
  label?: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  sx?: object;
  inputProps?: object;
  onChange?: Function;
  onBlur?: Function;
  name?: string;
  type?: string;
  value?: string | number;
  fullWidth?: boolean;
  defaultValue?: any;
  required?: boolean;
  hidden?: boolean;
}
export default function TextFields({
  id,
  label,
  variant,
  sx,
  inputProps,
  onChange,
  name,
  type,
  fullWidth,
  defaultValue,
  required,
  hidden,
  value,
  onBlur,
}: Props) {
  return (
    <TextField
      fullWidth={fullWidth}
      id={id}
      label={label}
      variant={variant}
      sx={sx}
      inputProps={inputProps}
      name={name}
      type={type}
      onChange={(e) => onChange && onChange(e)}
      onBlur={(e) => onBlur && onBlur(e)}
      defaultValue={defaultValue}
      required={required}
      hidden={hidden}
      value={value}
    />
  );
}
