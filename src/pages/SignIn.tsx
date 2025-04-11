
import { Layout } from "@/components/layout/Layout";
import { LoginForm } from "@/components/auth/LoginForm";

const SignIn = () => {
  return (
    <Layout>
      <div className="container max-w-md mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to continue to LocalLink
          </p>
        </div>
        
        <div className="border rounded-lg p-6 shadow-sm">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
