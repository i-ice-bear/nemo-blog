import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { FaHeart, FaKey, FaMailBulk } from "react-icons/fa";
import contactresponsive from './Contact.module.scss'
export default function ContactLogin() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  
  return (
    <div className={contactresponsive.contactcontainer}>
      <Button className="mt-1"  auto flat onClick={handler}>
        Sponsor <FaHeart className="mx-2"/>
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to Nemo blog
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
            contentLeft={<FaKey fill="currentColor" />}
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
