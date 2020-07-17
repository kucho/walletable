import React from "react";
import ScreenLink from "./ScreenLink";
import { useHistory, NavLink } from "react-router-dom";
import { Flex, Box, Link } from "@chakra-ui/core";
import transactionIcon from "../../images/icons/transactions.svg";
import reportsIcon from "../../images/icons/reports.svg";

const Header = () => {
  let history = useHistory();
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #718096"
    >
      <Flex direction="row" justify="center" align="center">
        <ScreenLink
          to="/"
          isActive={"/" === history.location.pathname}
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
            history.push("/");
          }}
        >
          Logout
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
