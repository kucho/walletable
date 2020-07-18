import React from "react";
import { Flex, Image, StatNumber, Text } from "@chakra-ui/core";
import { Categories, numberWithCommas } from "../../utils/common";
import { useHistory } from "react-router-dom";
import { format, formatDistance } from "date-fns";
import { TableCell, TableRow } from "../Table";

const TransactionItem = ({ data }) => {
  let history = useHistory();
  return (
    <TableRow
      _hover={{ cursor: "pointer", bg: "indigo.100" }}
      onClick={() => history.push(`/transactions/${data.id}`)}
    >
      <TableCell>
        <Flex align="center">
          <Flex
            w="52px"
            h="52px"
            justify="center"
            align="center"
            bg={Categories[data.category].bg}
            mr={5}
            borderRadius="lg"
          >
            <Image
              src={Categories[data.category].icon}
              alt={Categories[data.category].label}
            />
          </Flex>
          <Text fontSize="sm">{Categories[data.category].label}</Text>
        </Flex>
      </TableCell>
      <TableCell>
        <Text fontSize="sm">{data.payee}</Text>
      </TableCell>
      <TableCell>
        <Text fontSize="sm">{data.description}</Text>
      </TableCell>
      <TableCell>
        <Flex direction="column" align="center">
          <Text fontWeight="bold">
            {format(Date.parse(data.date), "LLL d")}
          </Text>
          <Text fontSize="sm">
            {formatDistance(Date.parse(data.date), new Date(), {
              includeSeconds: true,
              addSuffix: true,
            })}
          </Text>
        </Flex>
      </TableCell>
      <TableCell textAlign="right">
        <StatNumber fontSize="sm">
          S/. {numberWithCommas(data.amount)}
        </StatNumber>
      </TableCell>
    </TableRow>
  );
};

export default TransactionItem;
