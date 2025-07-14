import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CascadingText from '@/components/CascadingText';
import { FiArrowRight, FiDatabase, FiCode, FiBriefcase } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="bg-background font-sans">
      <Header />
      <main className="px-8">
        {/* Hero Section */}
        <AnimatedSection>
          <section 
            className="text-center py-40 text-white rounded-lg overflow-hidden" 
            style={{ 
              backgroundImage: "url('/hero.png')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="py-10 px-4">
              <CascadingText text="Código Inteligente. Datos Precisos." className="text-7xl font-bold mb-4 text-accent [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]" />
              <p className="text-4xl mb-8 text-accent">Creamos aplicaciones robustas y extraemos valor oculto de tu información.</p>
              <div className="flex justify-center space-x-4">
                <a href="/registro" className="bg-accent text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-all">Comienza ahora</a>
                <a href="https://www.youtube.com/watch?v=KJG0maOX1ys&list=RDKJG0maOX1ys&start_radio=1" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-full hover:bg-accent hover:text-white transition-all">Mira un demo</a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <section id="services" className="py-20">
          <h2 className="text-4xl font-bold text-center text-accent mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* GRIMU ERP */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-icon-sales text-4xl mb-4"><FiBriefcase /></div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">GRIMU ERP</h3>
                <p className="text-text-secondary">Software de gestión diseñado para restaurantes y comercios. 
                  Controla tu operación, entiende tus números y haz crecer tu negocio fácilmente.</p>
              </div>
            </AnimatedSection>
            {/* Auditoría de Datos */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-icon-analytics text-4xl mb-4"><FiDatabase /></div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Descubre el Poder de tus Datos</h3>
                <p className="text-text-secondary">Analizamos tus datos para descubrir oportunidades que potencien tu rentabilidad.
                   Recibe una hoja de ruta para tu crecimiento con insights claros y accionables.</p>
              </div>
            </AnimatedSection>
            {/* Software a Medida */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-icon-inventory text-4xl mb-4"><FiCode /></div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Software a Medida</h3>
                <p className="text-text-secondary">Diseñamos y construimos aplicaciones desde cero, pensadas exclusivamente 
                  para tu flujo de trabajo y tus metas, garantizando integración y eficiencia.</p>
              </div>
            </AnimatedSection>
            {/* Consultoría Tecnológica */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-accent text-4xl mb-4"><FiArrowRight /></div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Consultoría Tecnológica</h3>
                <p className="text-text-secondary">Te guiamos para que elijas las herramientas y plataformas correctas, 
                  evitando gastos innecesarios y asegurando que tu ecosistema tecnológico trabaje para ti.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section (falta configurar formspree, da hasta 50 mensajes gratis al mes)*/} 
        <AnimatedSection>
          <section id="contact" className="py-20">
            <h2 className="text-4xl font-bold text-center text-accent mb-12">Contacto</h2>
            <div className="max-w-2xl mx-auto">
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-text-secondary mb-2">Nombre o razón social</label>
                  <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-text-secondary mb-2">Correo electrónico</label>
                  <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-text-secondary mb-2">Teléfono (opcional)</label>
                  <input type="tel" id="phone" name="phone" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-text-secondary mb-2">Mensaje</label>
                  <textarea id="message" name="message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                </div>
                <button type="submit" className="bg-accent text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-all w-full">Enviar Mensaje</button>
              </form>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
