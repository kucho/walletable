import React, { useContext } from "react";
import { updateUser } from "../../services/user";
import { Flex, Button, Image, useToast } from "@chakra-ui/core";
import UserForm from "../UserForm";
import profileIcon from "../../images/icons/profile.svg";
import { camelCase } from "../../utils/common";
import { UserContext } from "../../context/userContext";

const inputStyleSettings = {
  fontSize: 13,
};

const labelStyleSettings = {
  fontWeight: "regular",
};

const Profile = () => {
  const toast = useToast();
  const { setUserData } = useContext(UserContext);
  const cached = JSON.parse(localStorage.getItem("userData"));
  const userData = camelCase(cached.user);

  const handleSubmit = async (form, e) => {
    e.preventDefault();
    const { data, error } = await updateUser(cached.token, form);
    if (!error) {
      setUserData(data);
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...cached, user: { ...cached.user, ...data } })
      );

      toast({
        description: "Your profile was updated successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        description: "We could not update your profile. Try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" align="center" mb={20}>
      <Flex
        size={52}
        bg="gray.500"
        borderRadius={12}
        justify="center"
        align="center"
        mt={10}
      >
        <Image src={profileIcon} alt="profile picture" size="24px" />
      </Flex>
      <UserForm
        style={{ width: "200px", margin: "2rem auto", textAlign: "right" }}
        inputSettings={inputStyleSettings}
        labelSettings={labelStyleSettings}
        defaultValues={userData}
        onSubmit={handleSubmit}
      >
        <Button
          type="submit"
          leftIcon="save"
          bg="indigo.500"
          _hover={{ bg: "indigo.800" }}
          color="white"
          variant="solid"
          mt={5}
        >
          Save
        </Button>
      </UserForm>
    </Flex>
  );
};

export default Profile;
