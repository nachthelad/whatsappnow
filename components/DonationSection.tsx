export default function DonationSection() {
  return (
    <div className="mt-6 text-center">
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        <p className="text-gray-600 text-sm mb-3">
          ¿Te gustó la app? Invítame un café
        </p>
        <a
          href="https://cafecito.app/nachthelad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors duration-200"
        >
          <span className="mr-2">☕</span>
          Invitar un cafecito
        </a>
      </div>
    </div>
  );
}
