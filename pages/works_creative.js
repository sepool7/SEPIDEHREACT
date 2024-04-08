import { CreativePageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});

const WorksCreative = () => {
  const typingData = [
    "<p>I code cool <strong>websites</strong></p>",
    "<p>I develop <strong>web3 Dapps</strong></p>",
    "<p>I am expert in <strong>public and Private Blockchains</strong></p>",
  ];

  return (
    <Layout>
      <CreativePageBanner pageName={"works"} extraClass="typed-subtitle" />
      <div className="section works" id="section-portfolio">
        <div className="content">
          <ItemIsotope />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default WorksCreative;
