import Layout from "@/layout/Layout";
import PageTitle from "@/components/PageTitle";
import { Flex, Card, Text, Heading, Icon } from "@chakra-ui/react";
import { HiCamera, HiCube, HiTruck, HiUserGroup } from "react-icons/hi";
import CardDash from "@/components/CardDash";

export default function Home() {
  return (
    <>
      <Layout>
        <PageTitle title="Painel de Controle" />
        <Flex w="100%">
          <Flex gap="4" wrap="wrap">
            <CardDash title="Fotos" counter="100000" icon={HiCamera} />
            <CardDash title="Usuários" counter="100000" icon={HiUserGroup} />
            <CardDash title="Engregas" counter="100000" icon={HiTruck} />
            <CardDash title="Pedidos" counter="100000" icon={HiCube} />
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
