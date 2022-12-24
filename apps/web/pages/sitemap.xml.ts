import DefaultEmployeeFragment from "@/graphql/fragments/Employee";
import { useFragment } from "@/graphql/generated";
import AllEmployeesQuery from "@/graphql/queries/AllEmployees";
import client from "@/lib/apollo";
import { GetServerSideProps } from "next";

type GenerateSiteMapProps = {
  employeeIds: string[];
};

const generateSiteMap = ({ employeeIds }: GenerateSiteMapProps) => {
  const baseUrl = "https://www.systemsoft.no";
  const pages = ["/", "/about", "/expertises", "/employees", "/clients"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
      <url>
        <loc>${`${baseUrl}${page}`}</loc>
      </url>  
          `;
      })
      .join("")}

    ${employeeIds
      .map((employeeId) => {
        return `
      <url>
        <loc>${`${baseUrl}/employees/${employeeId}`}</loc>
      </url>
          `;
      })
      .join("")}
  </urlset>
          `;

  return sitemap;
};

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { data: allEmployeesData } = await client.query({
    query: AllEmployeesQuery,
  });

  const employeeIds = allEmployeesData.allEmployee
    .map((employee) => useFragment(DefaultEmployeeFragment, employee))
    .map((employee) => employee._id) as string[];

  const sitemap = await generateSiteMap({ employeeIds });

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default SiteMap;
