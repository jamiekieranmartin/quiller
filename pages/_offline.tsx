import type { NextPage } from "next";
import { Layout, Nav } from "../components";

const Page: NextPage = () => {
  return (
    <Layout>
      <Nav />

      <small className="py-16 my-16 text-center">You are offline.</small>
    </Layout>
  );
};

export default Page;
