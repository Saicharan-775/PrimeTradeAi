export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-[#181C14] flex items-center justify-center px-4">
      
      {/* subtle trading grid effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#ECDFCC_1px,transparent_1px),linear-gradient(90deg,#ECDFCC_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative w-full max-w-md bg-[#3C3D37] border border-[#697565]/40 rounded-2xl shadow-2xl p-8">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-[#ECDFCC]">
            {title}
          </h1>
          <p className="text-sm text-[#697565] mt-2">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}
