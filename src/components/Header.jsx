export default function Header() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center gap-3 font-semibold text-3xl md:text-4xl text-brand leading-none"
            >
              <img
                src="/payflexIcon.png"
                alt="PayFlex logo"
                className="h-12 w-12 object-contain"
              />
              PayFlex
            </a>

           <nav className="hidden md:flex gap-6 text-sm">
              <a
                href="#industries"
                className="hover:opacity-80"
              >
                Industrias
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-[#033347] text-white text-sm font-medium hover:opacity-90 transition"
            >
              Lo quiero!
            </a>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm hover:bg-gray-50">
              <span role="img" aria-label="Uruguay flag">
                🇺🇾
              </span>
              <span>Uruguay</span>
            </button>
          </div>
        </div>
      </header>

      <div className="h-[72px]" />
    </>
  );
}
