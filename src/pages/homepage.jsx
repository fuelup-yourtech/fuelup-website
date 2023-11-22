import Head from "next/head";
import Layout from "./layout";
import WhyOurCompany from "@/components/why-our-company";

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Fuel Up</title>
      </Head>
      <Layout>
        <WhyOurCompany/>
      </Layout>
    </div>
  );
};

export default Homepage;
