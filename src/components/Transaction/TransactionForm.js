import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Select,
} from "@chakra-ui/core";
import schema from "../../schemas/Transaction";
import { Categories } from "../../utils/common";
import Delete from "./Delete";

const TransactionForm = ({
  labelSettings,
  inputSettings,
  value,
  style,
  onDelete,
  onSave,
}) => {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(value);
  }, [reset, value]);

  return (
    <>
      <form onSubmit={handleSubmit(onSave)} style={style}>
        <Flex direction="column" mb={5}>
          <Flex justify="center" mb={5}>
            <Flex
              w="52px"
              h="52px"
              justify="center"
              align="center"
              bg={Categories[value?.category]?.bg}
              mr={5}
              borderRadius="lg"
            >
              <Image
                src={Categories[value?.category]?.icon}
                alt={Categories[value?.category]?.label}
              />
            </Flex>
          </Flex>
          <FormControl isInvalid={errors.category} mb={3}>
            <FormLabel htmlFor="category" {...labelSettings}>
              Category
            </FormLabel>
            <Select
              name="category"
              id="category"
              ref={register}
              {...inputSettings}
              defaultValue={value.category}
              w="100%"
              placeholder="Select category"
            >
              {Object.entries(Categories).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.payee} mb={3}>
            <FormLabel htmlFor="payee" {...labelSettings}>
              Payee
            </FormLabel>
            <Input
              name="payee"
              id="payee"
              placeholder="John..."
              ref={register}
              {...inputSettings}
            />
            <FormErrorMessage>{errors.payee?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.description} mb={3}>
            <FormLabel htmlFor="description" {...labelSettings}>
              Description
            </FormLabel>
            <Input
              name="description"
              id="description"
              placeholder="Rent, internet..."
              ref={register}
              {...inputSettings}
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.date} mb={3}>
            <FormLabel htmlFor="date" {...labelSettings}>
              Date
            </FormLabel>
            <Input
              name="date"
              id="date"
              type="date"
              ref={register}
              {...inputSettings}
            />
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.amount} mb={3}>
            <FormLabel htmlFor="amount" {...labelSettings}>
              Amount
            </FormLabel>
            <Input
              name="amount"
              id="amount"
              ref={register}
              {...inputSettings}
            />
            <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex justify="space-between" align="center">
          <Delete onDelete={onDelete} />
          <Button
            size="sm"
            leftIcon="save"
            bg="indigo.500"
            color="white"
            _hover={{ bg: "indigo.800" }}
            type={"submit"}
          >
            Save
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default TransactionForm;
