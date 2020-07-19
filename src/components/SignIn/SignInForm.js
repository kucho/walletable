import React from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/core";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import BigButton from "../Button/BigButton";
import { loginUser } from "../../services/session";

const inputStyleSettings = {
  bg: "transparent",
  border: "none",
  borderRadius: 0,
  focusBorderColor: "white",
  borderBottom: "1px solid white",
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(40),
});

const SignInForm = ({ style, onSuccess }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const onSubmit = async (form, e) => {
    e.preventDefault();
    const { data, error } = await loginUser(form);
    if (error) {
      toast({
        description:
          "Your email and password combination is wrong. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      onSuccess(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={style}>
      <FormControl isInvalid={errors.email} textAlign="left" mb="1rem">
        <FormLabel htmlFor="name" fontWeight="bold" fontSize="sm">
          Email Address
        </FormLabel>
        <Input
          name="email"
          id="email"
          placeholder="youremail@domain.com"
          ref={register}
          {...inputStyleSettings}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password} textAlign="left">
        <FormLabel htmlFor="password" fontWeight="bold" fontSize="sm">
          Password
        </FormLabel>
        <Input
          id="password"
          name="password"
          type="password"
          ref={register}
          {...inputStyleSettings}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <BigButton state={formState.isSubmitting}>SIGN IN NOW</BigButton>
      <Text>
        {"Don't have an account yet? "}
        <Link as={RouterLink} color="indigo.300" fontWeight="bold" to="/signup">
          Sign Up!
        </Link>
      </Text>
    </form>
  );
};

export default SignInForm;
