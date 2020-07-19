import React from "react";
import phonesImg from "../../images/phones_desktop.png";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  return (
    <Flex flexGrow={1} align="center">
      <Flex justify="space-evenly" w="100%" h="400px" position="relative">
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
          p="5rem"
          align="center"
          textAlign="center"
          justify="space-evenly"
        >
          <Heading size="xl" zIndex="2">
            Your Finances in One Place
          </Heading>
          <Button
            variant="solid"
            zIndex="2"
            onClick={() => history.push("/signup")}
          >
            SIGN UP NOW
          </Button>
        </Flex>
        <Image w="300px" src={phonesImg} alt="app" zIndex="2" />
      </Flex>
    </Flex>
  );
};

export default Landing;
