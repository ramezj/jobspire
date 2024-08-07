import { Metadata } from "next"
import { Button } from "@/components/ui/button";
import { LoadingJob } from "@/components/job-card";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
    title: "Loading",
    description: "Generated by create next app",
};

export default function Loading() {
    return (
        <> 
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl tracking-tight">Jobs</h1>
        <Button size={"sm"} className="w-36 bg-blue-600 text-white hover:bg-blue-700 duration-200" variant={"expandIcon"} iconPlacement="right" Icon={Plus}> 
            {/* <Plus className="w-4 h-4 mr-2"/>  */}
            Create Job
        </Button>
        </div>
        <div className="w-full gap-4 flex flex-col">
            <LoadingJob />
            <LoadingJob />
            <LoadingJob />
        </div>
      </>
    )
}