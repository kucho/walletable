import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Text, useToast } from "@chakra-ui/core";
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
  const toast = useToast();

  const handleSubmit = async (form, e) => {
    e.preventDefault();
    const { data, error } = await createUser(form);
    if (error) {
      toast({
        description: error,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        description: "Welcome back!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
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
