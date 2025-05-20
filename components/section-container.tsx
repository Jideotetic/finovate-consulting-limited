export default function SectionContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="px-4 mx-auto max-w-7xl">{children}</div>
    </>
  );
}
