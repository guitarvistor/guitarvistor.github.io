
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Oportunidad() {
  const router = useRouter();

  const handleSalir = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent text-white text-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Aun puedes regresar y conocer lo que tenemos para ti</h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button onClick={handleSalir} className="bg-icon-inventory text-white py-3 px-6 rounded-full hover:bg-icon-inventory/90 transition-all text-lg">
          Reintentar la demo
        </button>
        <Link href="/" className="bg-button-secondary text-text-primary py-3 px-6 rounded-full hover:bg-gray-200 transition-all text-lg">
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}
