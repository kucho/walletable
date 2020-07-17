import { Flex, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import React from "react";

const appContentSettings = {
  fontFamily: "main",
  align: "center",
  justify: "center",
  bg: "white",
  size: "xl",
  borderRadius: "md",
};

const Container = ({ children }) => {
  return (
    <Flex>
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
        {children}
      </Flex>
    </Flex>
  );
};

export default Container;
