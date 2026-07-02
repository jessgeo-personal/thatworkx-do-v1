'use client'

export default function ScanForm() {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const domain = formData.get('domain')?.toString().trim();
        if (domain) {
          // Open the subdomain tools with the domain parameter if supported, or just navigate
          window.open(`https://aeo.thatworkx.com/`, '_blank');
        }
      }}
      className="flex flex-col sm:flex-row gap-2"
    >
      <input
        type="text"
        name="domain"
        placeholder="Enter your website domain (e.g. example.com)"
        className="flex-grow px-5 py-4 rounded-xl bg-black bg-opacity-40 text-white placeholder-gray-400 border border-brand-gray-dark focus:outline-none focus:border-brand-red transition-colors"
        required
      />
      <button
        type="submit"
        id="btn-aeo-scan-now"
        className="btn-primary py-4 px-8 font-semibold text-black bg-brand-gold hover:bg-yellow-500 rounded-xl transition-all shadow-lg hover:shadow-brand-gold/20"
      >
        Scan My Site Now
      </button>
    </form>
  )
}
