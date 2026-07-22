import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6">

        <h1 className="text-2xl font-bold mb-8">
          RenewCred CMS
        </h1>

        <nav className="flex flex-col gap-4">

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/dashboard/pages">
            Pages
          </Link>

          <Link href="/dashboard/add-page">
            Add Page
          </Link>

        </nav>

      </div>

      {/* Main Content */}

      <div className="flex-1 p-8">
        {children}
      </div>

    </div>
  );
}