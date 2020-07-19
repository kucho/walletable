import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import schema from "../../schemas/User";

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
