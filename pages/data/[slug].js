import React from "react";
import slugstyle from "../../scss/components/blogslug.module.scss";
import Link from "next/link";
import { Text, Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import Modal from "../components/Modal/Modal";
import * as fs from "fs";
const SlugComponent = (props) => {
  const [blog, setBlog] = React.useState(props.blogs);
  return (
    <>
      <div className={slugstyle.cardcontainer}>
        <div className="container-xl">
          <div className="row">
            <div className="col-2">
            <div className={slugstyle.caretleft}>
              <Text h3>My Projects</Text>
              <ul className="my-5 list-disc">
                <li>
                  <a
                    className="no-underline bg-blend-color-dodge"
                    href="https://github.com/i-ice-bear"
                    Z
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>
                      <FaArrowRight className="d-inline mx-2" /> My Repository
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    className="no-underline bg-blend-color-dodge"
                    href="https://github.com/i-ice-bear/Next.js-filesystem-reading-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>
                      <FaArrowRight className="d-inline mx-2" /> Next.js Api
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    className="no-underline bg-blend-color-dodge"
                    href="https://github.com/i-ice-bear/algolia-instantsearch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>
                      <FaArrowRight className="d-inline mx-2" /> Instantsearch
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    className="no-underline bg-blend-color-dodge"
                    href="https://github.com/i-ice-bear/view-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>
                      <FaArrowRight className="d-inline mx-2" />
                      My Blog
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    className="no-underline bg-blend-color-dodge"
                    href="https://portfolio-blog-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>
                      <FaArrowRight className="d-inline mx-2" />
                      About Me
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    className="no-underline bg-blend-color-dodge"
                    href="https://portfolio-blog-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>
                      <FaArrowRight className="d-inline mx-2" />
                      Some subs
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            </div>
            <div className="col-8">
              <Text h2>{blog.title}</Text>
              <Text className="my-5">{blog.description}</Text>
              <div className="content">
                <Button color="success">Was it helpful</Button>
              </div>
            </div>
            <div className="col-2">
              <div className={slugstyle.caretleft}>
              <Text h3>On this page</Text>
              <ul>
                <li>
                  <Modal
                    hydratedtext="Share this post"
                    displaytext="Login now to get access"
                  />
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlugComponent;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "about-javascript" } },
      { params: { slug: "about-json" } },
      { params: { slug: "javascript" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let blogs = await  fs.promises.readFile(`json/${slug}.json`, "utf-8");
  return {
    props: { blogs: JSON.parse(blogs) },
  };
}
