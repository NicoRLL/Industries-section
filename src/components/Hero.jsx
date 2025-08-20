export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="
            absolute top-16 -left-[22vw]
            w-[55vw] max-w-[580px] aspect-square
            rounded-full
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.35),rgba(255,255,255,0)_70%)]
            blur-2xl
          "
        />
        <div
          className="
            absolute -bottom-20 -right-[22vw]
            w-[55vw] max-w-[400px] aspect-square
            rounded-full
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),rgba(255,255,255,0)_70%)]
            blur-2xl
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#033347]">
            Transformar el bienestar de tus colaboradores, cambia vidas
          </h1>
          <p className="mt-4 text-gray-600">
            Brinda a tu equipo una solución moderna de bienestar financiero.
            Accede a adelantos de sueldo al instante, sin comprometer la
            liquidez ni el flujo de caja de tu empresa.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#cta" className="px-5 py-3 rounded-xl bg-[#033347] text-white">
              Solicitar para mi empresa
            </a>
            <a href="#features" className="px-5 py-3 rounded-xl border">
              Ver características
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/phone.gif"
            alt="Demo PayFlex Argentina"
            className="rounded-lg w-[250px] md:w-[300px] object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
