
import Link from 'next/link';
import GrimuAnimation from '@/components/GrimuAnimation';

export default function GrimuPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent text-white text-center p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 max-w-3xl">Nuestro software integra tus datos para entregarte completos informes sobre tu gestión</h1>
      <GrimuAnimation />
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 mb-4">
        <Link href="/#contact" className="bg-icon-inventory text-white py-4 px-8 rounded-full hover:bg-icon-inventory/90 transition-all text-lg font-bold shadow-lg">
          Ver un ejemplo de informe
        </Link>
        <Link href="/oportunidad" className="bg-icon-analytics text-white py-4 px-8 rounded-full hover:bg-icon-analytics/90 transition-all text-lg font-bold shadow-lg">
          Continuar perdiendo oportunidades
        </Link>
      </div>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl">Te proporcionamos informes claros con ideas que puedes aplicar para optimizar tu negocio.</p>
    </div>
  );
}
