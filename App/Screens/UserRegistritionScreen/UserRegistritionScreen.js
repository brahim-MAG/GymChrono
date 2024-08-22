import React from "react";
import * as Yup from "yup";
import AppScreen from "../../components/AppScreen";
import { View } from "react-native";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppFormImagePicker,
  SubmitButton,
} from "../../components/form";
import { intialLanguages } from "../../config/mockData";
import useLocation from "../../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Titre"),
  price: Yup.number().required().min(1).max(10000).label("Prix"),
  description: Yup.string().label("Description"),
  lang: Yup.string().required("Please select a language"),
  images: Yup.array().min(1, "Wa gha dir chi tswira nchofok a zin "),
});

function UserRegistritionScreen(props) {
  const location = useLocation();

  return (
    <AppScreen>
      <View style={{ padding: 10 }}>
        <AppForm
          validationSchema={validationSchema}
          initialValues={{
            title: "",
            price: "",
            description: "",
            lang: "",
            images: [],
          }}
          onSubmit={(value) => {
            //
          }}
        >
          <AppFormImagePicker name="images" />
          <AppFormField name="title" placeholder="Titre" maxLength={255} />
          <AppFormField
            name="price"
            placeholder="Prix"
            keyboardType="numeric"
            width={120}
          />
          <AppFormField
            name="description"
            placeholder="Description"
            numberOfLines={3}
          />
          <AppFormPicker
            width="50%"
            name="lang"
            options={intialLanguages}
            placeholder="Pick one "
          />
          <SubmitButton title="login" />
        </AppForm>
      </View>
    </AppScreen>
  );
}

export default UserRegistritionScreen;
