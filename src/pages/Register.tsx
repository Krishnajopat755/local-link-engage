
import { Layout } from "@/components/layout/Layout";
import { RegisterForm } from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Join Your Community</h1>
          <p className="text-muted-foreground mt-2">
            Create an account to engage with your local government
          </p>
        </div>
        
        <div className="border rounded-lg p-6 shadow-sm">
          <RegisterForm />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
