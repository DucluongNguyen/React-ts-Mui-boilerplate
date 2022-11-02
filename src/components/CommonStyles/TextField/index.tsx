import * as React from "react";
import { IconButton, InputAdornment, TextField as TextFieldMui, TextFieldProps } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FieldInputProps, FormikProps, getIn } from "formik";

export type ITextFieldProps = TextFieldProps & {
  showHidePassword?: boolean;
  type?: string;
  field: FieldInputProps<any>;
  form: FormikProps<any>;
};

const TextField = (props: ITextFieldProps) => {
  // !State
  const {
    label,
    type = "text",
    onKeyDown,
    fullWidth = false,
    field,
    form,
    className,
    size = "small",
    onFocus,
    showHidePassword = false,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = React.useState<Boolean>(false);
  const { name, value } = field;
  const { errors, touched, handleChange } = form;

  const isTouched = getIn(touched, name);
  const errorMessage = getIn(errors, name);

  // !Function
  const handleClickShowPassword = React.useCallback(() => {
    setShowPassword((prev) => !prev);
  }, [setShowPassword]);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onCheckType = () => {
    if (showHidePassword) {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  // !Render
  return (
    <TextFieldMui
      variant="outlined"
      name={name}
      label={label}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      value={value}
      size={size}
      fullWidth={fullWidth}
      // className={classn("noselect", props.className)}
      onChange={handleChange}
      autoComplete="off"
      type={onCheckType()}
      InputProps={{
        autoComplete: "off",
        endAdornment: showHidePassword && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
      error={isTouched && Boolean(errorMessage)}
      helperText={isTouched && errorMessage}
    />
  );
};

export default React.memo(TextField);
