export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex grow flex-col">
      <div className="flex">
        <div className="flex h-screen w-full justify-center">
          <div className="flex w-full flex-col items-stretch gap-6 px-8 pt-14 min-[720px]:max-w-[474px] min-[720px]:justify-center min-[720px]:pt-0">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
