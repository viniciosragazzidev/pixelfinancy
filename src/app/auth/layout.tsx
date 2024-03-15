export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" bg-slate-950 text-slate-200 overflow-hidden">
      {children}
    </main>
  );
}
