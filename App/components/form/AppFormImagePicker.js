import { useFormikContext } from "formik";
import React from "react";
import ImageInputList from "../ImageInputList";
import AppText from "../AppText";
import colors from "../../config/colors";

function AppFormImagePicker({ name }) {
  const { setFieldValue, touched, errors, values } = useFormikContext();

  const imageValues = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageValues, uri]);
  };
  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageValues.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageValues}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      {touched[name] && (
        <AppText style={{ fontSize: 12, color: colors.danger }}>
          {errors[name]}
        </AppText>
      )}
    </>
  );
}
export default AppFormImagePicker;
