import React from "react";
import AppScreen from "../../components/AppScreen";
import { View } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../../components/form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <AppScreen>
      <View style={{ padding: 10 }}>
        <AppForm
          validationSchema={validationSchema}
          initialValues={{ password: "", email: "" }}
          onSubmit={(value) => {
            //
          }}
        >
          <AppFormField
            name="email"
            keyboardType="email-address"
            icon="email"
            placeholder="Email"
          />
          <AppFormField
            name="password"
            keyboardType="email-address"
            icon="lock"
            placeholder="Password"
            secureTextEntry
          />
          <SubmitButton title="login" />
        </AppForm>
      </View>
    </AppScreen>
  );
}

export default LoginScreen;
