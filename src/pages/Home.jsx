import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Montserrat'] animate-fade-in">
            Conectando Jovens ao Agronegócio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-['Poppins'] animate-fade-in delay-200">
            Uma plataforma que une talentos recentes com produtores rurais,
            promovendo a modernização do campo e gerando oportunidades.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in delay-300">
            <Link
              to="/servicos"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200 hover-scale"
            >
              Nossos Serviços
            </Link>
            <Link
              to="/contato"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 hover-scale"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Montserrat']">
              Como Funciona
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins']">
              Nossa plataforma conecta jovens talentos com produtores rurais,
              oferecendo soluções personalizadas e treinamento especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cadastro",
                description:
                  "Jovens e produtores se cadastram na plataforma, criando seus perfis profissionais.",
                icon: "📝",
              },
              {
                title: "Match",
                description:
                  "Nossa tecnologia faz o match entre perfis compatíveis, considerando necessidades e habilidades.",
                icon: "🤝",
              },
              {
                title: "Desenvolvimento",
                description:
                  "Jovens recebem treinamento e suporte para implementar soluções no campo.",
                icon: "🌱",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-white p-8 rounded-lg shadow-lg text-center animate-scale-in hover-lift delay-${
                  (index + 1) * 100
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-['Montserrat']">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat'] animate-fade-in">
            Pronto para Transformar o Agronegócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-['Poppins'] animate-fade-in delay-200">
            Junte-se a nós e faça parte da modernização do campo brasileiro.
          </p>
          <Link
            to="/contato"
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200 inline-block animate-fade-in delay-300 hover-scale"
          >
            Comece Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
