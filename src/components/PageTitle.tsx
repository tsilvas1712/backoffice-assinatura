import { Heading } from "@chakra-ui/react";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <Heading w="100%" as="i" borderBottom="2px" mb="4">
      {title}
    </Heading>
  );
}
