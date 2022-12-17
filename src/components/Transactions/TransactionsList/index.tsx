import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";

import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

const TransactionsList = () => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <Flex
        justifyContent={"space-around"}
        width={"40vw"}
        marginTop="30px"
        borderWidth={"1px"}
        borderColor={"#bcbcbc"}
        borderStyle={"dashed"}
      >
        <Text>
          <b>Saldo Total:</b> {formatter.format(50)}
        </Text>
        <Text>
          <b>Saldo no Período:</b> {formatter.format(50)}
        </Text>
      </Flex>
      <TableContainer width={"60vw"}>
        <Table variant={"striped"}>
          <Thead>
            <Tr>
              <Th>Dados</Th>
              <Th>Valentia</Th>
              <Th>Tipo</Th>
              <Th>Nome Operador Transacionado</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>12/12/2012</Td>
              <Td>{formatter.format(1000)}</Td>
              <Td>Transferência Entrada</Td>
              <Td>Maraial</Td>
            </Tr>

            <Tr>
              <Td>12/12/2012</Td>
              <Td>{formatter.format(1000)}</Td>
              <Td>Transferência Entrada</Td>
              <Td>Maraial</Td>
            </Tr>

            <Tr>
              <Td>12/12/2012</Td>
              <Td>{formatter.format(1000)}</Td>
              <Td>Transferência Entrada</Td>
              <Td>Maraial</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Flex margin={"10px"}>
        <Button variant={"link"}>
          <ArrowLeftIcon />
        </Button>
        <Button variant={"link"}>
          <ChevronLeftIcon />
        </Button>

        <Button variant={"link"}>
          <ChevronRightIcon />
        </Button>
        <Button variant={"link"}>
          <ArrowRightIcon />
        </Button>
      </Flex>
    </>
  );
};

export default TransactionsList;
