import { PseudoBox, Box, useTheme } from "@chakra-ui/core";
import React from "react";

export const Table = (props) => (
  <Box as="table" rounded="lg" w="full" {...props} />
);

export const TableHead = (props) => <Box as="thead" {...props} />;

export const TableRow = (props) => {
  const theme = useTheme();

  return (
    <PseudoBox
      as="tr"
      borderBottom={"1px solid" + theme.colors.indigo?.["200"]}
      {...props}
    />
  );
};

export const TableHeader = (props) => (
  <Box
    as="th"
    px="6"
    py="3"
    borderBottomWidth="1px"
    backgroundColor="gray.50"
    textAlign="left"
    fontSize="xs"
    color="gray.500"
    textTransform="uppercase"
    letterSpacing="wider"
    lineHeight="1rem"
    fontWeight="medium"
    {...props}
  />
);

export const TableBody = (props) => <Box as="tbody" {...props} />;

export const TableCell = (props) => (
  <Box as="td" px={4} py={4} whiteSpace="nowrap" {...props} />
);
