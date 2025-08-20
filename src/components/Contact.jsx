export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold">¿Listo para empezar?</h2>
        <p className="mt-2 text-gray-600">Escríbenos tu email y nos comunicaremos contigo pronto.</p>
        <form
          onSubmit={(e) => { e.preventDefault(); alert("¡Gracias! Te contactamos pronto."); }}
          className="mt-6 max-w-lg mx-auto flex gap-3"
        >
          <input
            type="email"
            required
            placeholder="tu@empresa.com"
            className="flex-1 rounded-xl border px-4 py-3"
          />
          <button className="px-5 py-3 rounded-xl bg-black text-white">Enviar</button>
        </form>
      </div>
    </section>
  );
}
