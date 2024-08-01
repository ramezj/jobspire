import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import EditOrganization from "@/components/edit-organization";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserDashboard } from "@/server-actions/dashboard/getUserDashboard";

export const metadata: Metadata = {
    title: "Settings",
    description: "Generated by create next app",
};

export default async function Page() {
  const session = await auth();
  if(!session) { redirect('/auth') }
  if(session.user?.firstTimeUser === true) { redirect('/onboarding') }
  const organization = await getUserDashboard();
  if(organization === null) { redirect('/onboarding' ) }
    return (
        <>
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="-mb-2"/>
        <EditOrganization organization={organization} />
        </>
    )
}