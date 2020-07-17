import React from "react";
import { Link } from "react-router-dom";
import { Flex, Image, Text, Stack } from "@chakra-ui/core";
import logo from "../../images/logo.png";

const containerSettings = {
  direction: "column",
  align: "center",
  mt: "5rem",
  textAlign: "center",
  color: "white",
  fontFamily: "main",
};

const FormPage = ({ children, title, message }) => {
  return (
    <Flex {...containerSettings} width="1/2">
      <Link to="/">
        <Image src={logo} alt="Walletable" w="170px" h="39px" />
      </Link>
      <Stack spacing={-1} margin="2em">
        <Text>{title}</Text>
        <Text>{message}</Text>
      </Stack>
      {children}
    </Flex>
  );
};

export default FormPage;
