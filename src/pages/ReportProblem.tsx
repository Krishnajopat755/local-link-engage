
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ReportForm } from "@/components/reports/ReportForm";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";

const ReportProblem = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Report a Community Issue</CardTitle>
            <CardDescription>
              Help improve your community by reporting local issues that need attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReportForm />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ReportProblem;
