import React from "react";
import { Text, Button } from "@chakra-ui/core";

const Balance = ({ balance, onClick }) => {
  return (
    <>
      <Text fontFamily="main" color="indigo.900" fontWeight="bold">
        Balance: S/ {balance}
      </Text>
      <Button
        size="sm"
        leftIcon="plus-square"
        bg="indigo.500"
        color="white"
        _hover={{ bg: "indigo.800" }}
        onClick={onClick}
      >
        Add Transaction
      </Button>
    </>
  );
};

export default Balance;
