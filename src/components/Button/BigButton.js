import React from "react";
import { Button } from "@chakra-ui/core";

const BigButton = ({ children, state }) => {
  return (
    <Button
      my="2.5rem"
      isLoading={state}
      color="black"
      type="submit"
      bg="white"
      borderRadius="20px"
      paddingX="3rem"
    >
      {children}
    </Button>
  );
};

export default BigButton;
