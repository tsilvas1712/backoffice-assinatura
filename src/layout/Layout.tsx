import Header from "./Header";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex w="100%" h="100vh">
        <Sidebar />
        <Flex direction="column" width="100%">
          <Header />
          <Flex m="4" p="4" direction="column">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
