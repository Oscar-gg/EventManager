import Layout from "~/components/layout/Layout";
import BarViewEvents from "~/components/containers/BarViewEvents";
import { PageBody } from "~/components/general/PageElements";

import { getUserOrganizations } from "~/server/AuthRoles";

export default function Home() {
  test();
  return (
    <Layout>
      <PageBody>
        <BarViewEvents />
      </PageBody>
    </Layout>
  );
}

const test = async () => {
  console.log("Running test:");

  const organizations = await getUserOrganizations("https://api.github.com/users/afr2903/orgs");
  console.log(organizations);
  const roborregos = organizations.find((org) => org.login === "RoBorregos");
  console.log(roborregos);
  if (roborregos) return true;
};
