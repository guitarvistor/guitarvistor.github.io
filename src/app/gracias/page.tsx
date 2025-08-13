
import Link from 'next/link';

export default function Gracias() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent text-white text-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Gracias por seguir aquí</h1>
      <Link href="/" className="bg-button-secondary text-text-primary py-3 px-6 rounded-full hover:bg-gray-200 transition-all text-lg">
        Volver a la página principal
      </Link>
    </div>
  );
}
