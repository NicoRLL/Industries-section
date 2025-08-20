export default function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} PayFlex</span>
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">Términos</a>
          <a href="#" className="hover:underline">Privacidad</a>
          <a href="#" className="hover:underline">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}
