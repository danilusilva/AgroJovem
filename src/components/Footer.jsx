import { Link } from "react-router-dom";

const Footer = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <footer className="bg-green-800 text-white py-8 font-['Poppins']">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4">
              AgroJovem
            </h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Conectando jovens talentos com o agronegócio, promovendo a
              modernização do campo e gerando oportunidades de desenvolvimento
              profissional.
            </p>
          </div>

          <div className="animate-fade-in delay-200">
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className={`animate-slide-up delay-${(index + 1) * 100}`}
                >
                  <Link
                    to={item.path}
                    className="text-green-100 hover:text-white transition-colors duration-200 text-sm hover-scale"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in delay-300">
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4">
              Nossa Equipe
            </h3>
            <div className="space-y-4">
              {[
                {
                  username: "silvadanilu",
                  url: "https://www.instagram.com/silvadanilu/",
                },
                {
                  username: "davims_1",
                  url: "https://www.instagram.com/davims_1/",
                },
                {
                  username: "phablo.oliveira7",
                  url: "https://www.instagram.com/phablo.oliveira7/",
                },
              ].map((profile, index) => (
                <a
                  key={profile.username}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-green-100 hover:text-white transition-colors duration-200 text-sm hover-scale animate-slide-up delay-${
                    (index + 1) * 100
                  }`}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@{profile.username}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100 animate-fade-in delay-500">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AgroJovem. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
