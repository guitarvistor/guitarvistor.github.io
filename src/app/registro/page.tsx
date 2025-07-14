
"use client";
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Registro() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID"); // hay que poner el ID de Formspree!!!!!!

  if (state.succeeded) {
    return (
      <div className="bg-background font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center px-8">
          <div className="text-center bg-white p-12 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-text-primary mb-4">¡Registro Exitoso!</h1>
            <p className="text-text-secondary text-lg">Muchas gracias por registrar a tu empresa, pronto recibirás un correo electrónico con los pasos a seguir para ingresar a la comunidad Silcon.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background font-sans">
      <Header />
      <main className="px-8 py-16">
        <section id="register-form" className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-accent mb-10">Registra tu empresa</h1>
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

            {/* Fila Inferior - Producto y Botón */}
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

            <div className="md:col-span-2 text-center mt-6">
              <button type="submit" disabled={state.submitting} className="bg-accent text-white py-3 px-12 rounded-full hover:bg-opacity-90 transition-all w-auto text-lg">
                Registrarse
              </button>
              <ValidationError 
                prefix="Email" 
                field="email" 
                errors={state.errors}
                className="text-red-500 mt-2 block"
              />
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
