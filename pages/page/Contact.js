import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import { FaHeart, FaCriticalRole } from "react-icons/fa";
import contactresponsive from "./scss/Contact.module.scss";
import SnackbarComponent from "../components/Snackbar/Snackbar";

export default function ContactLogin() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  // * data adddition of new visitors

  const [description, setDescription] = React.useState(``);
  const [email, setEmail] = React.useState(``);
  const [phone, setPhone] = React.useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, email, description);

    const data = { email, phone, description };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        setPhone(``);
        setDescription(``);
        setEmail(``);
      })
      .catch((error) => {
        console.error("Error:", error);
        setPhone(``);
        setDescription(``);
        setEmail(``);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "description") {
      setDescription(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    console.log(e);
  };

  return (
    <div className={contactresponsive.contactcontainer}>
      <Button className="mt-1" auto flat onClick={handler}>
        Sponsor <FaHeart className="mx-2" />
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to Nemo blog team.
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone No.
              </label>
              <input
                value={phone}
                type="password"
                className="form-control rounded-3xl "
                id="exampleInputPassword1"
                onChange={handleChange}
                name="phone"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your Phone no. with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Your queries
              </label>
              <div className="form-floating">
                <textarea
                  className="form-control rounded-3xl h-25"
                  onChange={handleChange}
                  value={description}
                  placeholder="What's your concern with us..."
                  id="description"
                  name="description"
                />
                <label htmlFor="description">Comments</label>
              </div>
              <div id="emailHelp" className="form-text mt-3">
                <FaCriticalRole className="inline-block mx-1" /> After filling
                the form we we will contact you maximum 2 to 3 days.{" "}
                <a href="/">Read</a> our docs for more information
              </div>
            </div>
            <Modal.Footer>
              <SnackbarComponent message="Thanks for contacting us 😊😊" />
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
