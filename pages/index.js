import React from "react";
import Container from "../components/container";
import Head from "next/head";
import Users from "../components/users";

const Index = (props) => {
  console.log(props);
  return (
    <Container>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>
      <h1>Next</h1>
      <Users users={props.users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
