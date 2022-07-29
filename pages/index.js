import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../scss/Home.module.scss";
import sassstyle from "../scss/Index.module.scss";
import { Button, Avatar } from "@nextui-org/react";
import { Card, Grid, Text } from "@nextui-org/react";
import { FaArrowRight, FaEllipsisV } from "react-icons/fa";
import DropDownComponent from "./components/Dropdown/Dropdown";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingComponent from "./components/Mini-modules/Loading";
import PaginationComponent from "./components/Mini-modules/Pagination";

export default function Home(props) {
  const [blog, setBlog] = React.useState(props.allBlogs);
  const [count, setCount] = React.useState(3);
  const fetchData = async () => {
    let linkdata = await fetch(
      `http://localhost:3000/api/blog/?count=${count + 3}`
    );
    setCount(count + 2);
    let data = await linkdata.json();
    setBlog(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={sassstyle.text}>Nemo Blog!</span>
        </h1>
        <div className={styles.description}>
          <Text h3 className="mx-4">
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </Text>
        </div>
        <InfiniteScroll
          dataLength={blog.length}
          next={fetchData}
          hasMore={props.allCount !== blog.length}
          loader={<LoadingComponent />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <PaginationComponent data={blog.length}/>
            </p>
          }
        >
          <div className="row container">
            {blog &&
              blog.map((item) => {
                return (
                  <div className="col-md-4 my-4" key={item.title}>
                    <Card css={{ p: "$6", width: "100%" }}>
                      <Card.Header>
                        <Avatar
                          size="lg"
                          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          color="primary"
                          bordered
                        />
                        <Grid.Container css={{ pl: "$6" }}>
                          <Grid xs={12}>
                            <Text
                              h4
                              className="text-2xl first-letter:decoration-sky-500"
                              css={{ lineHeight: "$xs" }}
                            >
                              {item.title}
                            </Text>
                            <DropDownComponent
                              className={sassstyle.caretmenu}
                            />
                          </Grid>
                          <Text p>By {item.author}</Text>
                          <Grid xs={12}></Grid>
                        </Grid.Container>
                      </Card.Header>
                      <Card.Body css={{ py: "$2" }}>
                        <Text p>
                          {item && item.description.substr(0, 100)}...
                        </Text>
                      </Card.Body>
                      <Card.Footer>
                        <Link
                          icon
                          color="primary"
                          target="_blank"
                          href={`data/${item.slug}`}
                        >
                          <h6 className="text-blue-700 underline-offset-1 cursor-pointer">
                            View {item.title} Blog.
                            <FaArrowRight className="d-inline mx-2" />
                          </h6>
                        </Link>
                      </Card.Footer>
                    </Card>
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("json");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 3; index++) {
    const items = data[index];
    console.log(items);
    myfile = await fs.promises.readFile("json/" + items, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs,allCount },
  };
}
