import React from "react";
import TransactionsFilter from "./TransactionsFilter";
import TransactionsList from "./TransactionsList";
import { Flex, Center } from "@chakra-ui/react";

const Transactions = () => {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Center flexDirection={"column"}>
        <TransactionsFilter />
        <TransactionsList />
      </Center>
    </Flex>
  );
};

export default Transactions;
