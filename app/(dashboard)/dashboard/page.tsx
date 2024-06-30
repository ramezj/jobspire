import Image from "next/image";
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserDashboard } from "@/server-actions/dashboard/getUserDashboard";
import { Organization } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { JobCard } from "@/components/job-card";
import { CreateJobButton } from "@/components/create-job";
import Link from "next/link";
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import EditOrganization from "@/components/edit-organization";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default async function Page() {
  const session = await auth();
  if(!session) { redirect('/') }
  if(session.user?.firstTimeUser === true) { redirect('/onboarding') }
  const organization:Organization | null = await getUserDashboard();
  if(organization === null) { redirect('/onboarding' ) }
  return (
        <>
        <div className="flex justify-between items-center w-full">
          <h1 className="font-bold text-2xl">Manage Board</h1>
        <Button asChild>
          <Link href={`/${organization?.slug}`}>
          Preview
          </Link>
        </Button>
        </div>
        <div>
        <EditOrganization organization={organization!} />
        </div>
        </>
  );
}
