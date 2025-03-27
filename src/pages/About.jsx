const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Sobre a AgroJovem</h1>
        
        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Missão</h2>
            <p className="text-gray-600">
              Conectar jovens talentos com o agronegócio, promovendo a modernização do campo e gerando oportunidades de desenvolvimento profissional.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Visão</h2>
            <p className="text-gray-600">
              Ser a principal plataforma de conexão entre jovens profissionais e o agronegócio, transformando o futuro do campo através da tecnologia e inovação.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Valores</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Inovação</li>
              <li>Sustentabilidade</li>
              <li>Desenvolvimento Local</li>
              <li>Excelência</li>
              <li>Colaboração</li>
            </ul>
          </div>
        </div>

        {/* Diferencial Competitivo */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Diferencial Competitivo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Inovação Tecnológica</h3>
              <p className="text-gray-600">
                Plataforma digital integrada que conecta jovens talentos com produtores rurais, oferecendo soluções modernas de gestão agrícola.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Impacto Social</h3>
              <p className="text-gray-600">
                Foco no desenvolvimento local e na geração de oportunidades para jovens em áreas rurais, contribuindo para a redução do desemprego.
              </p>
            </div>
          </div>
        </div>

        {/* Viabilização e Inovação */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Viabilização</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Modelo de negócio baseado em assinaturas</li>
              <li>Parcerias estratégicas com instituições educacionais</li>
              <li>Desenvolvimento gradual de funcionalidades</li>
              <li>Marketing digital focado</li>
              <li>Equipe enxuta e eficiente</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Grande Inovação</h2>
            <p className="text-gray-600">
              A AgroJovem inova ao criar uma ponte entre o talento jovem e o agronegócio tradicional, utilizando tecnologia para modernizar o campo e gerar oportunidades de desenvolvimento profissional. Nossa plataforma integra gestão agrícola, capacitação e conexão profissional em uma única solução.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 