import React from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Text,
  Link,
} from "@chakra-ui/core";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import BigButton from "../Button/BigButton";
import { createUser } from "../../services/user";

const inputStyleSettings = {
  bg: "transparent",
  border: "none",
  borderRadius: 0,
  focusBorderColor: "white",
  borderBottom: "1px solid white",
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.string().length(9).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(40),
  passwordConfirmation: yup
    .mixed()
    .oneOf([yup.ref("password"), null], "Password does not match"),
});

const SignUpForm = ({ style, onSuccess }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (form, e) => {
    e.preventDefault();
    const { data, error } = await createUser(form);
    if (!error) {
      onSuccess(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={style}>
      <FormControl isInvalid={errors.firstName} textAlign="left" mb="1rem">
        <FormLabel htmlFor="firstName" fontWeight="bold" fontSize="sm">
          First name
        </FormLabel>
        <Input
          name="firstName"
          id="firstName"
          placeholder="John..."
          ref={register}
          {...inputStyleSettings}
        />
        <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.lastName} textAlign="left" mb="1rem">
        <FormLabel htmlFor="lastName" fontWeight="bold" fontSize="sm">
          Last name
        </FormLabel>
        <Input
          name="lastName"
          id="lastName"
          placeholder="Doe..."
          ref={register}
          {...inputStyleSettings}
        />
        <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.phone} textAlign="left" mb="1rem">
        <FormLabel htmlFor="phone" fontWeight="bold" fontSize="sm">
          Phone number
        </FormLabel>
        <Input
          name="phone"
          id="phone"
          placeholder="123 456 789..."
          ref={register}
          {...inputStyleSettings}
        />
        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
      </FormControl>
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
      <FormControl isInvalid={errors.passwordConfirmation} textAlign="left">
        <FormLabel
          htmlFor="passwordConfirmation"
          fontWeight="bold"
          fontSize="sm"
        >
          Confirm Password
        </FormLabel>
        <Input
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          ref={register}
          {...inputStyleSettings}
        />
        <FormErrorMessage>
          {errors.passwordConfirmation?.message}
        </FormErrorMessage>
      </FormControl>
      <BigButton state={formState.isSubmitting}>SIGN UP NOW</BigButton>
      <Text>
        {"Already have an account? "}
        <Link as={RouterLink} color="indigo.300" fontWeight="bold" to="/signin">
          Sign in!
        </Link>
      </Text>
    </form>
  );
};

export default SignUpForm;
