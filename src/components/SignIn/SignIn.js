import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SignInForm from "./SignInForm";
import { Text } from "@chakra-ui/core";
import { UserContext } from "../../context/Session";
import FormPage from "../FormPage";
import Emoji from "../Emoji";

const SignIn = () => {
  const { setUserData } = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const title = (
    <Text as="span">
      Hi! Welcome to Walletable <Emoji symbol="👋 " />
    </Text>
  );
  const message =
    "Signin to start enjoying your new money management super powers!";

  return (
    <FormPage title={title} message={message}>
      <SignInForm
        style={{ margin: "1rem" }}
        onSuccess={(data) => {
          setUserData(data);
          localStorage.setItem("userData", JSON.stringify(data));
          history.replace(from);
        }}
      />
    </FormPage>
  );
};

export default SignIn;
