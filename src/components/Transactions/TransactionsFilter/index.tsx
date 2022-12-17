import React from "react";
import { Input, Flex, Box, Text, Button } from "@chakra-ui/react";

const TransactionsFilter = () => {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Flex justifyContent={"space-between"} width="40vw">
          <Box width="25%">
            <Text>Data de Início:</Text>
            <Input type={"date"} />
          </Box>

          <Box width="25%">
            <Text>Data de Fim:</Text>
            <Input type={"date"} />
          </Box>

          <Box width="40%">
            <Text>Nome do Operador:</Text>
            <Input />
          </Box>
        </Flex>

        <Flex justifyContent={"flex-end"} marginTop={"10px"}>
          <Button width={"8vw"}>Pesquisar</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default TransactionsFilter;
