import Layout from "@/layout/Layout";
import PageTitle from "@/components/PageTitle";
import {
  Flex,
  Text,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { useDeliveries } from "@/services/hooks/Entregas/useDeliveries";
import { RiDownload2Fill, RiDeleteBin2Fill, RiAlertFill } from "react-icons/ri";

export default function Entregas() {
  const { data } = useDeliveries();

  return (
    <>
      <Layout>
        <PageTitle title="Entregas" />
        <Flex w="100%" direction="column">
          <Flex direction="column">
            <Text as="i" fontSize="3xl">
              Ultimos Pedidos
            </Text>
            <Flex>
              <Table bg="white" boxShadow="lg">
                <Thead bg="lifewall-yellow" color="lifewall-black">
                  <Tr>
                    <Th>#</Th>
                    <Th>Nome</Th>
                    <Th>Status</Th>
                    <Th>Data de Cadastro</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.map((delivery, key) => {
                    return (
                      <Tr key={key}>
                        <Td>{delivery.id}</Td>
                        <Td>{delivery.User.name}</Td>
                        <Td>{delivery.StatusDelivery.status}</Td>
                        <Td>
                          {new Date(delivery.created_at).toLocaleDateString(
                            "pt-BR",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </Td>
                        <Td>
                          <HStack>
                            <Button
                              as="a"
                              href={`/entregas/${delivery.id}`}
                              colorScheme="green"
                            >
                              <Icon as={RiDownload2Fill} />
                            </Button>
                            <Button colorScheme="yellow">
                              <Icon as={RiAlertFill} />
                            </Button>
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
