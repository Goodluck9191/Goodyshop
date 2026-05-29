export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F8FA]">
      <div className="text-center" role="status" aria-live="polite">
        +{" "}
        <div
          className="w-16 h-16 border-4 border-[`#3B82F6`] border-t-transparent rounded-full animate-spin mx-auto"
          aria-hidden="true"
        ></div>
        <p className="mt-4 text-[`#555555`]">Loading...</p>
      </div>
    </div>
  );
}
