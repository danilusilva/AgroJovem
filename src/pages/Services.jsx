const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          Nossos Serviços
        </h1>

        {/* Para Jovens */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Para Jovens Profissionais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Treinamento Prático
              </h3>
              <p className="text-gray-600">
                Projetos práticos com produtores rurais para desenvolver
                habilidades reais no campo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Plataforma de Conexão
              </h3>
              <p className="text-gray-600">
                Conecte-se com produtores rurais e encontre oportunidades de
                trabalho e estágios.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Desenvolvimento Profissional
              </h3>
              <p className="text-gray-600">
                Cursos e workshops especializados em gestão agrícola e
                tecnologias do campo.
              </p>
            </div>
          </div>
        </div>

        {/* Para Produtores */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Para Produtores Rurais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Gestão Agrícola
              </h3>
              <p className="text-gray-600">
                Ferramentas digitais para controle de estoque, previsão de safra
                e gestão financeira.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Marketing Digital
              </h3>
              <p className="text-gray-600">
                Estratégias e ferramentas para promover seus produtos e expandir
                seu mercado.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Consultoria Especializada
              </h3>
              <p className="text-gray-600">
                Acesso a jovens profissionais qualificados para consultoria em
                diferentes áreas.
              </p>
            </div>
          </div>
        </div>

        {/* Planos e Preços */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Planos e Preços
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Básico</h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">
                R$ 49<span className="text-lg text-gray-600">/mês</span>
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Acesso básico à plataforma
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Ferramentas básicas de gestão
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Suporte por email
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Começar Agora
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-green-600">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Pro</h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">
                R$ 99<span className="text-lg text-gray-600">/mês</span>
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Todas as funcionalidades do plano Básico
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Consultoria mensal
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Suporte prioritário
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Começar Agora
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Enterprise
              </h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">
                Sob Demanda
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Todas as funcionalidades do plano Pro
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Consultoria dedicada
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Suporte 24/7
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
