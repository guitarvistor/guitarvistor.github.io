"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CascadingText from '@/components/CascadingText';
import dynamic from 'next/dynamic';

const DynamicDataBrainAnimation = dynamic(() => import('@/components/DataBrainAnimation'), { ssr: false });
import { FiDatabase, FiCode, FiMonitor, FiHome } from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID"); // hay que poner el ID de Formspree!!!!!!

  if (state.succeeded) {
    return (
      <div className="bg-background font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center px-8">
          <div className="text-center bg-white p-12 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-text-primary mb-4">¡Mensaje Enviado!</h1>
            <p className="text-text-secondary text-lg">Gracias por contactarnos, nos pondremos en contacto contigo a la brevedad.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <CascadingText text="Código Inteligente. Datos Precisos." className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-accent [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]" />
              <p className="text-2xl md:text-3xl lg:text-4xl mb-8 text-accent">Creamos aplicaciones robustas y extraemos valor oculto de tu información.</p>
              <div className="flex justify-center space-x-4">
                <a href="/blog" className="bg-accent text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-all">Ir al Blog</a>
                <a href="/demo" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-full hover:bg-accent hover:text-white transition-all">Mira un demo</a>
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
                <div className="text-accent text-4xl mb-4"><FiMonitor /></div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">GRIMU ERP</h3>
                <p className="text-text-secondary">Software de gestión diseñado para restaurantes y comercios. 
                  Controla tu operación, entiende tus números y haz crecer tu negocio fácilmente.</p>
              </div>
            </AnimatedSection>
            {/* Auditoría de Datos */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-accent text-4xl mb-4"><FiDatabase /></div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Auditoría de Datos</h3>
                <p className="text-text-secondary">Analizamos tus datos para descubrir oportunidades que potencien tu rentabilidad.
                   Recibe una hoja de ruta para tu crecimiento con insights claros y accionables.</p>
              </div>
            </AnimatedSection>
            {/* Software a Medida */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-accent text-4xl mb-4"><FiCode /></div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Software a Medida</h3>
                <p className="text-text-secondary">Diseñamos y construimos aplicaciones desde cero, pensadas exclusivamente 
                  para tu flujo de trabajo y tus metas, garantizando integración y eficiencia.</p>
              </div>
            </AnimatedSection>
            {/* Consultoría Tecnológica */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-accent text-4xl mb-4"><FiHome /></div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Consultoría Tecnológica</h3>
                <p className="text-text-secondary">Te guiamos para que elijas las herramientas y plataformas correctas, 
                  evitando gastos innecesarios y asegurando que tu ecosistema tecnológico trabaje para ti.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        
        {/* Contact Section */}
        <AnimatedSection>
          <section id="contact" className="py-20">
            <h2 className="text-4xl font-bold text-center text-accent mb-12">Contacto</h2>
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Columna Izquierda - Datos de la Empresa */}
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-semibold text-text-primary mb-4 border-b pb-2">Datos de la Empresa</h2>
                  <div className="mb-4">
                    <label htmlFor="company-rut" className="block text-text-secondary mb-2">RUT de la Empresa</label>
                    <input type="text" id="company-rut" name="company-rut" required className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company-name" className="block text-text-secondary mb-2">Razón Social</label>
                    <input type="text" id="company-name" name="company-name" required className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company-email" className="block text-text-secondary mb-2">Correo Electrónico</label>
                    <input type="email" id="company-email" name="company-email" required className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company-phone" className="block text-text-secondary mb-2">Teléfono</label>
                    <input type="tel" id="company-phone" name="company-phone" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                {/* Columna Derecha - Datos del Contacto */}
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-semibold text-text-primary mb-4 border-b pb-2">Datos del Contacto</h2>
                  <div className="mb-4">
                    <label htmlFor="contact-name" className="block text-text-secondary mb-2">Nombre del Contacto</label>
                    <input type="text" id="contact-name" name="contact-name" required className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact-rut" className="block text-text-secondary mb-2">RUT del Contacto</label>
                    <input type="text" id="contact-rut" name="contact-rut" required className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact-email" className="block text-text-secondary mb-2">Correo Electrónico del Contacto</label>
                    <input type="email" id="contact-email" name="contact-email" required className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact-phone" className="block text-text-secondary mb-2">Teléfono del Contacto</label>
                    <input type="tel" id="contact-phone" name="contact-phone" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                {/* Fila Inferior - Producto, Mensaje y Botón */}
                <div className="md:col-span-2">
                  <label htmlFor="product" className="block text-text-secondary mb-2">Producto que desea usar</label>
                  <select id="product" name="product" required className="w-full p-3 border border-gray-300 rounded-lg">
                    <option value="">Seleccione un producto...</option>
                    <option value="GRIMU ERP">GRIMU ERP</option>
                    <option value="Análisis de Datos">Análisis de Datos</option>
                    <option value="Software a medida">Software a medida</option>
                    <option value="Consultoría Tecnológica">Consultoría Tecnológica</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-text-secondary mb-2">Mensaje</label>
                  <textarea id="message" name="message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                </div>

                <div className="md:col-span-2 text-center mt-6">
                  <button type="submit" disabled={state.submitting} className="bg-accent text-white py-3 px-12 rounded-full hover:bg-opacity-90 transition-all w-auto text-lg">
                    Enviar Mensaje
                  </button>
                  <ValidationError 
                    prefix="Email" 
                    field="email" 
                    errors={state.errors}
                    className="text-red-500 mt-2 block"
                  />
                </div>
              </form>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}