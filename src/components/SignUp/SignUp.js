import React, { useContext } from "react";
import FormPage from "../FormPage";
import { UserContext } from "../../context/Session";
import { Text } from "@chakra-ui/core";
import Emoji from "../Emoji";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router-dom";
const SignUp = () => {
  const { setUserData } = useContext(UserContext);
  let history = useHistory();

  const title = (
    <Text as="span">
      Hi! Welcome to Walletable <Emoji symbol="👋 " />
    </Text>
  );
  const message =
    "Signup to start enjoying you new money management super powers!";

  return (
    <FormPage title={title} message={message}>
      <SignUpForm
        style={{ margin: "1rem" }}
        onSuccess={(data) => {
          setUserData(data);
          localStorage.setItem("userData", JSON.stringify(data));
          history.replace("/");
        }}
      />
    </FormPage>
  );
};

export default SignUp;
