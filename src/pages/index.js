import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return <Redirect to="/nodejs-tech-doc/docs/category/nodejs-documentations" />;
}
