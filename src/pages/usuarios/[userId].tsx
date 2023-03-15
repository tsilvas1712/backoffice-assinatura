import PageTitle from "@/components/PageTitle";
import Layout from "@/layout/Layout";
import { api } from "@/services/api";
import {
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  Wrap,
  WrapItem,
  Icon,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { RiDownload2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import { saveAs } from "file-saver";

export default function Entrega({ data }) {
  function downloadImage(image) {
    console.log("image");
    saveAs(image.url, image.name);
  }
  return (
    <Layout>
      <PageTitle title="Entregas" />
      <Flex w="100%" direction="column">
        <Flex direction="column">
          {data?.User && (
            <>
              <Text as="i" fontSize="3xl">
                Pedido {data?.User.name}
              </Text>

              <Wrap spacing="6">
                {data.ItemsDeliveries.map((image, key) => {
                  return (
                    <Flex
                      as="div"
                      direction="column"
                      key={key}
                      width="150px"
                      bg="white"
                      p="8"
                      boxShadow="lg"
                    >
                      <WrapItem>
                        <Image
                          boxSize="100px"
                          objectFit="cover"
                          src={image.File.url}
                          fallbackSrc="https://via.placeholder.com/150"
                          maxW="300px"
                        />
                      </WrapItem>
                      <Flex mt="2" justifyContent="center">
                        <Text hidden>{image.File.name}</Text>
                        <Spacer />
                        <Button
                          colorScheme="blue"
                          variant="solid"
                          onClick={() => {
                            downloadImage(image.File);
                          }}
                        >
                          Baixar
                          <Icon ml="1" as={RiDownload2Fill} font="16" />
                        </Button>
                      </Flex>
                    </Flex>
                  );
                })}
              </Wrap>
            </>
          )}

          {!data?.User && (
            <Text as="i" fontSize="3xl">
              Pedido Não Localizado
            </Text>
          )}

          <Flex></Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { entregaId } = context.query;

  const response = await api.get(`/admin/delivery/${entregaId}`);
  console.log("DADOS", response.data.ItemsDeliveries[0].File);
  //console.log("DADOS", response.data);

  return {
    props: {
      data: response.data,
    },
  };
};
