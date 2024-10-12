import { useAuth, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Header } from "@/components/ui/Header";

export default async function DashboardPage() {
  const { user } = useUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user?.firstName}!</h1>
        {/* Add dashboard content here */}
      </main>
    </div>
  );
}
