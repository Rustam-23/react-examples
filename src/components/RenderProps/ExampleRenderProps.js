import React from "react";
import { DataProvider } from "../DataProvider";
import { Posts } from "../Posts";

const getPosts = "https://jsonplaceholder.typicode.com/posts";

export const ExampleRenderProps = () => {
  return (
    <div>
      <DataProvider
        className="container-posts"
        url={getPosts}
        renderContent={(data) => <Posts posts={data} />} />
    </div>
  );
};
