import { Autocomplete as AutoCompletedMui, TextFieldProps, TextField, AutocompleteProps } from "@mui/material";
import { FieldProps, getIn } from "formik";

export const Autocomplete: React.FC<FieldProps & TextFieldProps & AutocompleteProps<any, any, any, any, "div">> = (
  props
) => {
  const { form, field, label, ...rest } = props;
  const { setFieldValue, errors, touched } = form;

  const onChange = (event: React.SyntheticEvent<Element, Event>) => {
    // setFieldValue(field.name, event.target.value || {});
  };

  const isTouched = getIn(touched, field.name);
  const errorMessage = getIn(errors, field.name);
  return (
    <AutoCompletedMui
      {...rest}
      {...field}
      onChange={onChange}
      getOptionLabel={(option) => {
        return option?.label ?? "";
      }}
      filterOptions={(options, state) => options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
          error={isTouched && Boolean(errorMessage)}
          helperText={isTouched && errorMessage?.label}
        />
      )}
    />
  );
};
