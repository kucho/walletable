import { Flex, Image } from "@chakra-ui/core";
import { Route, Link } from "react-router-dom";
import Header from "../Header";
import logo from "../../images/logo.png";
import React from "react";

const appContentSettings = {
  fontFamily: "main",
  direction: "column",
  bg: "white",
  size: "xl",
  borderRadius: "md",
  padding: "10px",
};

const Container = ({ children }) => {
  return (
    <Route>
      <Flex w="100%" padding="20px">
        <Link to="/">
          <Image src={logo} alt="Walletable" w="130px" h="30px" />
        </Link>
      </Flex>
      <Flex
        {...appContentSettings}
        width={[
          "97%", // base
          "90%", // 480px upwards
          "80%", // 768px upwards
          "75%", // 992px upwards
        ]}
      >
        <Header />
        {children}
      </Flex>
    </Route>
  );
};

export default Container;
