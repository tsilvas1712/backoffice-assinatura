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

import {
  RiDownload2Fill,
  RiDeleteBin2Fill,
  RiAlertFill,
  RiCheckFill,
  RiCheckboxCircleFill,
  RiForbidFill,
  RiForbid2Fill,
} from "react-icons/ri";
import { useUsers } from "@/services/hooks/Usuários/useUsers";
import { api } from "@/services/api";

export default function Usuarios() {
  const { data } = useUsers();
  console.log(data);

  async function updateUser(userId) {
    await api.get(`/admin/user/${userId}`).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
  }

  return (
    <>
      <Layout>
        <PageTitle title="Usuários" />
        <Flex w="100%" direction="column">
          <Flex direction="column">
            <Text as="i" fontSize="3xl">
              Ultimos Usuários
            </Text>
            <Flex>
              <Table bg="white" boxShadow="lg">
                <Thead bg="lifewall-yellow" color="lifewall-black">
                  <Tr>
                    <Th>#</Th>
                    <Th>Nome</Th>
                    <Th>Plano</Th>
                    <Th>Status</Th>
                    <Th>Data de Cadastro</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.map((user, key) => {
                    return (
                      <Tr key={key}>
                        <Td>{user.id}</Td>
                        <Td>{user.name}</Td>
                        <Td>{user.Plan.name}</Td>
                        <Td>
                          {(user.activate && (
                            <Icon
                              as={RiCheckboxCircleFill}
                              fontSize="32"
                              color="green"
                            />
                          )) || (
                            <Icon
                              as={RiForbid2Fill}
                              fontSize="32"
                              color="red"
                            />
                          )}
                        </Td>
                        <Td>
                          {new Date(user.created_at).toLocaleDateString(
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
                            {(user.activate && (
                              <Button
                                onClick={() => {
                                  updateUser(user.id);
                                }}
                                colorScheme="red"
                              >
                                <Icon as={RiForbidFill} />
                              </Button>
                            )) || (
                              <Button
                                onClick={() => {
                                  updateUser(user.id);
                                }}
                                colorScheme="green"
                              >
                                <Icon as={RiCheckFill} />
                              </Button>
                            )}
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
