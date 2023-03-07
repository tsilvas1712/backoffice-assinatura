import { Flex, Card, Text, Heading, Icon } from "@chakra-ui/react";

interface CardDashProps {
  title: string;
  counter: string;
  icon: any;
}
export default function CardDash({ title, counter, icon }: CardDashProps) {
  return (
    <Card w="72" h="36" bg="lifewall-pastel" p="4" boxShadow="xl">
      <Flex gap="4" justify="space-between" justifyContent="right">
        <Flex direction="column" justify="right" gap="2">
          <Heading size="lg">{title}</Heading>
          <Text textAlign="right" fontSize="xl">
            {counter}
          </Text>
        </Flex>
        <Icon fontSize={100} as={icon} />
      </Flex>
    </Card>
  );
}
