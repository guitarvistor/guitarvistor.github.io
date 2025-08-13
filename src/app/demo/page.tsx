import Link from 'next/link';
import DataBrainAnimation from '@/components/DataBrainAnimation';

export default function Demo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent text-white text-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Imagina todos los datos de tu negocio en un solo lugar</h1>
      <p className="text-2xl md:text-3xl mb-8">Conectados con una inteligencia artificial que trabaja específicamente para ti</p>
      <DataBrainAnimation />
      <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Te gusta la idea?</h2>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="/#contact" className="bg-icon-inventory text-white py-3 px-6 rounded-full hover:bg-icon-inventory/90 transition-all text-lg">
          Me encanta
        </Link>
        <Link href="/oportunidad" className="bg-icon-analytics text-white py-3 px-6 rounded-full hover:bg-icon-analytics/90 transition-all text-lg">
          Perderé esta oportunidad
        </Link>
      </div>
    </div>
  );
}