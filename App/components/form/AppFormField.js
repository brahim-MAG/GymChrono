import { useFormikContext } from "formik";
import React from "react";
import AppInputText from "../AppInputText";
import AppText from "../AppText";
import colors from "../../config/colors";
import { isEmptyObject } from "../../utils/service";

function AppFormField({ name, width, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppInputText
        width={width}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
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

export default AppFormField;
