import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { VscLiveShare } from "react-icons/vsc";
import { FaKey, FaMailBulk } from "react-icons/fa";

export default function ModalComponent(props) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Text className="cursor-pointer" onClick={handler}>
        {props.hydratedtext} <VscLiveShare className="d-inline mx-2" />
      </Text>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {props.displaytext}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<FaMailBulk />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<FaKey  />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
