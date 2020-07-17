import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Text, Link } from "@chakra-ui/core";
import BigButton from "../Button/BigButton";
import { createUser } from "../../services/user";
import UserForm from "../UserForm";

const inputStyleSettings = {
  bg: "transparent",
  border: "none",
  borderRadius: 0,
  focusBorderColor: "white",
  borderBottom: "1px solid white",
};

const SignUpForm = ({ style, onSuccess }) => {
  const handleSubmit = async (form, e) => {
    e.preventDefault();
    const { data, error } = await createUser(form);
    if (!error) {
      onSuccess(data);
    }
  };

  return (
    <UserForm
      style={style}
      inputSettings={inputStyleSettings}
      onSubmit={handleSubmit}
    >
      <BigButton>SIGN UP NOW</BigButton>
      <Text>
        {"Already have an account? "}
        <Link as={RouterLink} color="indigo.300" fontWeight="bold" to="/signin">
          Sign in!
        </Link>
      </Text>
    </UserForm>
  );
};

export default SignUpForm;
