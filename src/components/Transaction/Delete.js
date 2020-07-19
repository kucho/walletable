import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Link,
  Scale,
  useDisclosure,
} from "@chakra-ui/core";

const Delete = ({ onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const cancelRef = React.useRef();

  return (
    <>
      <Link fontSize="sm" onClick={onOpen}>
        Delete
      </Link>
      {/* You can swap the `Scale` with `SlideIn` to see a different transition */}
      <Scale in={isOpen}>
        {(styles) => (
          <AlertDialog
            leastDestructiveRef={cancelRef}
            finalFocusRef={btnRef}
            onClose={onClose}
            isOpen={true}
          >
            <AlertDialogOverlay opacity={styles.opacity} />
            <AlertDialogContent {...styles}>
              <AlertDialogHeader>Delete transaction?</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Are you sure you want to delete this transaction? This operation
                cannot be undone!
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button
                  variantColor="red"
                  ml={3}
                  onClick={() => {
                    onClose();
                    onDelete();
                  }}
                >
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </Scale>
    </>
  );
};

export default Delete;
