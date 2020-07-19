import React from "react";
import phonesImg from "../../images/phones_desktop.png";
import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/core";

const Landing = () => {
  return (
    <Flex>
      <Flex justify="space-evenly" w="100%" my="8rem" position="relative">
        <Box
          top="10%"
          position="absolute"
          bg="teal.100"
          w="100%"
          h="300px"
          zIndex="1"
        />
        <Box
          position="absolute"
          top="Calc(10% + 300px)"
          bg="gray.100"
          w="100%"
          p="3"
        >
          <Flex color="orange.500" justify="center">
            <Flex align="center" ml="-40%">
              <Icon size="30px" name="download" mx={5} />
              <Stack spacing={-1}>
                <Text fontSize="xl" fontWeight="semibold">
                  5.000.000
                </Text>
                <Text fontSize="sm">Downloads</Text>
              </Stack>
            </Flex>
            <Flex align="center" mx={10}>
              <Icon size="30px" name="star" mx={5} />
              <Stack spacing={-1}>
                <Text fontSize="xl" fontWeight="semibold">
                  4.99
                </Text>
                <Text fontSize="sm">Review</Text>
              </Stack>
            </Flex>
          </Flex>
        </Box>
        <Flex
          direction="column"
          w="500px"
          align="center"
          textAlign="center"
          justify="space-evenly"
        >
          <Heading size="2xl" zIndex="2">
            Your Finances in One Place
          </Heading>
        </Flex>
        <Image w="300px" src={phonesImg} alt="app" zIndex="2" />
      </Flex>
    </Flex>
  );
};

export default Landing;
