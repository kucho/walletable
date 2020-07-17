import React from "react";
import { PseudoBox, Image } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

const ScreenLink = ({ children, to, icon, ...rest }) => {
  let history = useHistory();
  const active = history.location.pathname === to;

  let imageFilter = {
    filter: "invert(30%)",
  };

  let textSettings = {
    color: "gray.500",
  };

  if (active) {
    textSettings = {
      color: "indigo.700",
      borderBottom: "2px solid #5A67D8",
    };
    imageFilter = null;
  }

  return (
    <PseudoBox
      as="button"
      p="8px"
      fontWeight="semibold"
      display="flex"
      _hover={{ bg: "gray.100" }}
      {...rest}
      {...textSettings}
      _active={{ outline: "none" }}
      _focus={{ outline: "none" }}
      onClick={() => !active && history.push(to)}
    >
      <Image src={icon} alt={to} mr={[1, 1, 2, 2]} style={{ ...imageFilter }} />
      {children}
    </PseudoBox>
  );
};

export default ScreenLink;
