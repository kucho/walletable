import { Flex, Image } from "@chakra-ui/core";
import { Route, Link as RouterLink } from "react-router-dom";
import Header from "../Header";
import logo from "../../images/logo.png";
import React from "react";
import { Link, Text, Icon } from "@chakra-ui/core";

const appContentSettings = {
  fontFamily: "main",
  direction: "column",
  bg: "white",
  borderRadius: "lg",
  minH: 800,
};

const Container = ({ children }) => {
  return (
    <Route>
      <Flex w="100%" padding="20px">
        <RouterLink to="/">
          <Image src={logo} alt="Walletable" w="130px" h="30px" />
        </RouterLink>
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
        <Flex justify="center" my={3} color="gray.600">
          <Text>
            © Developed with ❤ ️by{" "}
            <Link
              textDecoration="underline"
              isExternal
              href="https://github.com/kucho"
            >
              Kucho
              <Icon name="external-link" m="2px" />
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Route>
  );
};

export default Container;
