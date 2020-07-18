import React from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../Table";
import { Flex, Text, Image } from "@chakra-ui/core";
import TransactionItem from "./TransactionItem";
import sadFaceImg from "../../images/sad-money.png";

const PlaceHolder = () => {
  return (
    <Flex direction="column" justify="center" align="center" mt={20}>
      <Text fontFamily="main" fontSize="xl" mb={5}>
        There are not transactions yet
      </Text>
      <Image src={sadFaceImg} w="140px" />
    </Flex>
  );
};

const TransactionList = ({ data }) => {
  return data.length === 0 ? (
    <PlaceHolder />
  ) : (
    <Flex p={4}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Category</TableHeader>
            <TableHeader>Payee</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Amount</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TransactionItem key={item.id} data={item} />
          ))}
        </TableBody>
      </Table>
    </Flex>
  );
};

export default TransactionList;
