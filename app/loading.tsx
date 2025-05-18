export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        className="w-12 h-12 animate-spin text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" strokeLinecap="round" />
      </svg>
    </div>
  );
}
