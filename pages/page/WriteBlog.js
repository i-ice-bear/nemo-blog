import React from "react";
import writeblogstyle from "./scss/WriteBlog.module.scss";

const WriteBlogComponent = () => {
  const [title, setTitle] = React.useState(``);
  const [description, setdescription] = React.useState(``);
  const [slug, setSlug] = React.useState(``);

  const handleChange = (e) => {
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "description") {
      setdescription(e.target.value);
    } else if (e.target.name == "slug") {
      setSlug(e.target.value);
    }
    console.log(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, slug };

    fetch("http://localhost:3000/api/writeblog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        setTitle(``);
        setdescription(``);
        setSlug(``);
      })
      .catch((error) => {
        console.error("Error:", error);
        setTitle(``);
        setdescription(``);
        setSlug(``);
      });
  };
  return (
    <>
      <div className={writeblogstyle.writeContainer}>
        <div className="d-flex h-100 justify-center items-center container my-1 justify-self-start">
          <div className="float-right">
            <h2>Write your own blog</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Title Post
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">
                  Add your title of your post
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Topic of post
                </label>
                <input
                  value={slug}
                  type="password"
                  className="form-control rounded-3xl "
                  id="exampleInputPassword1"
                  onChange={handleChange}
                  name="slug"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your Phone no. with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Your description
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
                  the form we we will contact you maximum 2 to 3 days.{" "}
                  <a href="/">Read</a> our docs for more information
                </div>
                <button type="submit" className="bg-cyan-300 text-dark">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteBlogComponent;


