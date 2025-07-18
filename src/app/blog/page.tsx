import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Blog() {
  return (
    <div className="bg-background font-sans">
      <Header />
      <main className="px-8 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-accent mb-12">Blog de Silcon</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                <h2 className="text-2xl font-bold text-text-primary mb-4">La Importancia de la Ingeniería de Datos en Instituciones Educativas</h2>
                <p className="text-text-secondary mb-6 flex-grow">Descubre cómo la ingeniería de datos está transformando la educación, desde la personalización del aprendizaje hasta la optimización de recursos...</p>
                <a href="/blog/educacion" className="text-accent hover:underline self-start">Leer más &rarr;</a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Optimización de Almacenes Pequeños con Ingeniería de Datos</h2>
                <p className="text-text-secondary mb-6 flex-grow">Aprende a gestionar tu inventario, predecir la demanda y mejorar la eficiencia de tu almacén utilizando el poder de los datos...</p>
                <a href="/blog/almacenes" className="text-accent hover:underline self-start">Leer más &rarr;</a>
              </div>
            </AnimatedSection>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
