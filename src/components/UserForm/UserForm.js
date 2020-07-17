import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/core";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is a required field"),
  lastName: yup.string().required("Last name is a required field"),
  phone: yup.string().length(9).required("Phone is a required field"),
  email: yup.string().email().required("Email is a required field"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(6, "Minimum 6 characters")
    .max(40, "Maximum 40 characters"),
  passwordConfirmation: yup
    .mixed()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Repeat your password"),
});

const UserForm = ({
  labelSettings,
  inputSettings,
  defaultValues,
  style,
  onSubmit,
  children,
}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={style}>
      <FormControl isInvalid={errors.firstName} textAlign="left" mb="1rem">
        <FormLabel
          htmlFor="firstName"
          fontWeight="bold"
          fontSize="sm"
          {...labelSettings}
        >
          First name
        </FormLabel>
        <Input
          name="firstName"
          id="firstName"
          placeholder="John..."
          ref={register}
          {...inputSettings}
        />
        <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.lastName} textAlign="left" mb="1rem">
        <FormLabel
          htmlFor="lastName"
          fontWeight="bold"
          fontSize="sm"
          {...labelSettings}
        >
          Last name
        </FormLabel>
        <Input
          name="lastName"
          id="lastName"
          placeholder="Doe..."
          ref={register}
          {...inputSettings}
        />
        <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.phone} textAlign="left" mb="1rem">
        <FormLabel
          htmlFor="phone"
          fontWeight="bold"
          fontSize="sm"
          {...labelSettings}
        >
          Phone number
        </FormLabel>
        <Input
          name="phone"
          id="phone"
          placeholder="123 456 789..."
          ref={register}
          {...inputSettings}
        />
        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email} textAlign="left" mb="1rem">
        <FormLabel
          htmlFor="name"
          fontWeight="bold"
          fontSize="sm"
          {...labelSettings}
        >
          Email Address
        </FormLabel>
        <Input
          name="email"
          id="email"
          placeholder="youremail@domain.com"
          ref={register}
          {...inputSettings}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password} textAlign="left" mb="1rem">
        <FormLabel
          htmlFor="password"
          fontWeight="bold"
          fontSize="sm"
          {...labelSettings}
        >
          Password
        </FormLabel>
        <Input
          id="password"
          name="password"
          type="password"
          ref={register}
          {...inputSettings}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.passwordConfirmation} textAlign="left">
        <FormLabel
          htmlFor="passwordConfirmation"
          fontWeight="bold"
          fontSize="sm"
          {...labelSettings}
        >
          Confirm Password
        </FormLabel>
        <Input
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          ref={register}
          {...inputSettings}
        />
        <FormErrorMessage>
          {errors.passwordConfirmation?.message}
        </FormErrorMessage>
      </FormControl>
      {children}
    </form>
  );
};

export default UserForm;
