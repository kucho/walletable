import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Categories } from "../../utils/common";
import { createTransaction } from "../../services/transaction";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Select,
  useToast,
} from "@chakra-ui/core";
import { format } from "date-fns";
import { UserContext } from "../../context/userContext";
import schema from "../../schemas/Transaction";

const labelSettings = {
  fontSize: "sm",
};
const inputSettings = {
  fontSize: "sm",
};

const TransactionForm = ({ onCancel, onSuccess }) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      date: format(new Date(), "yyyy-MM-dd"),
    },
  });

  let toast = useToast();
  const { userData } = useContext(UserContext);

  const onSave = async (form) => {
    const { data, error } = await createTransaction(userData.token, form);
    if (!error) {
      onSuccess(data);
      reset({ date: format(new Date(), "yyyy-MM-dd") });
      toast({
        description: "Transaction added successfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        description: "We could not add your transaction. Try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSave)} style={{ width: "100%" }}>
      <Flex justify="space-between" mb={5}>
        <FormControl isInvalid={errors.category}>
          <FormLabel htmlFor="category" {...labelSettings}>
            Category
          </FormLabel>
          <Select
            name="category"
            id="category"
            ref={register}
            {...inputSettings}
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
        <FormControl isInvalid={errors.payee} w="138px">
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
        <FormControl isInvalid={errors.description}>
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
        <FormControl isInvalid={errors.date} w="180px">
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
        <FormControl isInvalid={errors.amount} w="77px">
          <FormLabel htmlFor="amount" {...labelSettings}>
            Amount
          </FormLabel>
          <Input name="amount" id="amount" ref={register} {...inputSettings} />
          <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex justify="flex-end" align="center">
        <Link fontSize="sm" onClick={onCancel} mr={5}>
          Cancel
        </Link>
        <Button
          size="sm"
          bg="indigo.500"
          color="white"
          _hover={{ bg: "indigo.800" }}
          type={"submit"}
        >
          Save Transaction
        </Button>
      </Flex>
    </form>
  );
};

export default TransactionForm;
