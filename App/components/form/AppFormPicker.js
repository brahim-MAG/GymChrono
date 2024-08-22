import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import AppText from "../AppText";
import colors from "../../config/colors";
import { isEmptyObject } from "../../utils/service";

function AppFormPicker({
  field,
  form,
  options,
  name,
  placeholder,
  width,
  ...otherProps
}) {
  const { touched, errors, values, setFieldValue, status } = useFormikContext();

  return (
    <>
      <AppPicker
        width={width}
        placeholder={placeholder}
        options={options}
        selectedValue={values[name]}
        onValueChange={(value) => setFieldValue(name, value)}
        {...otherProps}
      />
      {!isEmptyObject(errors) && touched[name] && (
        <AppText style={{ fontSize: 12, color: colors.danger }}>
          {errors[name]}
        </AppText>
      )}
    </>
  );
}

export default AppFormPicker;
