import React from "react";
import Card from "react-bootstrap/Card";
import "../App.css";

export const Posts = (props) => {
  const { posts } = props;

  return (
    <div className="container-posts">
      {posts.map((post) => (
        <Card key={post.id} style={{ width: "350px" }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
