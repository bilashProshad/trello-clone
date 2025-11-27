import { ReactNode } from "react";
import OrgControl from "./_components/org-control";
import { startCase } from "lodash";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function generateMetadata() {
  const { orgSlug } = await auth();

  const client = await clerkClient();
  const response = await client.organizations.getOrganization({
    slug: orgSlug as string,
  });

  return {
    title: startCase(response.name || "Organization"),
  };
}

export default function OrganizationIdLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
