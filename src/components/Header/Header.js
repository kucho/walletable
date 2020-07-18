import React from "react";
import ScreenLink from "./ScreenLink";
import { NavLink, useHistory } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/core";
import transactionIcon from "../../images/icons/transactions.svg";
import reportsIcon from "../../images/icons/reports.svg";

const Header = () => {
  let history = useHistory();
  return (
    <Flex p="15px">
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #718096"
      >
        <Flex direction="row" justify="center" align="center">
          <ScreenLink
            to="/transactions"
            isActive={"/transactions" === history.location.pathname}
            icon={transactionIcon}
            mr={[1, 1, 4, 8]}
          >
            Transactions
          </ScreenLink>
          <ScreenLink
            to="/reports"
            isActive={"/reports" === history.location.pathname}
            icon={reportsIcon}
          >
            Reports
          </ScreenLink>
        </Flex>
        <Box>
          <Link as={NavLink} to="/profile" mr={[2, 2, 4, 5]} color="indigo.600">
            Profile
          </Link>
          <Link
            color="indigo.600"
            onClick={() => {
              localStorage.clear();
              history.push("/signin");
            }}
          >
            Logout
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
