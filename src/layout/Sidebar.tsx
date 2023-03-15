import {
  Flex,
  Avatar,
  Icon,
  Stack,
  Box,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { HiRocketLaunch, HiUserGroup, HiTruck } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <Box
      as="aside"
      w="64"
      maxW="64"
      m="4"
      bg="lifewall-yellow"
      p="8"
      boxShadow="lg"
      borderRadius={8}
    >
      <Stack spacing="12" align="flex-start">
        <Box width="100%">
          <Image
            boxSize="150px"
            src="/assets/img/logo_seize.png"
            alt="Logo Lifewall"
            mb="4"
          />

          <Text as="i" fontWeight="bold" fontSize="large" textAlign="center">
            Administrador
          </Text>
          <Stack spacing="4" mt="8" align="stretch" width="100%">
            <Link
              href="/"
              display="flex"
              alignItems="center"
              borderRadius="md"
              p="2"
              _hover={{
                background: "yellow.500",
              }}
            >
              <Icon as={HiRocketLaunch} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Painel
              </Text>
            </Link>
            <Link
              href="/usuarios"
              display="flex"
              alignItems="center"
              borderRadius="md"
              p="2"
              _hover={{
                background: "yellow.500",
              }}
            >
              <Icon as={HiUserGroup} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
            <Link
              href="/entregas"
              display="flex"
              alignItems="center"
              borderRadius="md"
              p="2"
              _hover={{
                background: "yellow.500",
              }}
            >
              <Icon as={HiTruck} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Entregas
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
