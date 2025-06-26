import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGithub, FaStar, FaCode } from 'react-icons/fa';
import { BsEmojiWink } from 'react-icons/bs';

const Projects = ({ projects, projectImages }) => { 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos os Projetos');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animação automática para mobile
  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setIsHovered(prev => !prev);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  // Função para filtrar os projetos (Título e Categoria)
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos os Projetos' || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen container mx-auto px-6 lg:px-28 py-12 mt-28">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 font-krona text-azul">Meus Projetos</h1>
      <h2 className="text-lg md:text-2xl font-medium text-center mb-10 font-montserrat text-white">
        Aqui estão alguns dos meus projetos mais recentes! 
      </h2>

      {/* Barra de Pesquisa*/}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="relative w-full md:max-w-md">
          <input
            type="text"
            placeholder="Pesquisar por título..."
            maxLength={20}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="font-montserrat px-4 py-2 w-full bg-black text-white rounded-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-azul"
          />
          <FaSearch className="absolute right-3 top-3 text-white" />
        </div>

        {/* Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 font-montserrat py-2 w-full bg-black md:w-auto text-white rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-azul "
        >
          <option value="Todos os Projetos">Todos os Projetos</option>
          <option value="Front-end">Front-end</option>
          <option value="Back-end">Back-end</option>
          <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
          <option value="Dados">Dados</option>
        </select>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card especial do GitHub */}
        <a
          href="https://github.com/FlyingHigh520741"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-lg overflow-hidden hover:scale-105 transition ease-in-out delay-100 hover:shadow-lg hover:shadow-azul/35 bg-gradient-to-br from-gray-900 to-black"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          <div className="relative h-48 bg-[#0d1117] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`transform transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                <FaGithub className="w-24 h-24 text-white opacity-20" />
              </div>
            </div>
            <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <FaStar className="w-8 h-8 text-yellow-400 animate-pulse" />
              <span className="text-white font-montserrat font-bold text-lg text-center px-4">
                Me siga para ficar por dentro das novidades!
              </span>
              <BsEmojiWink className="w-6 h-6 text-yellow-400 animate-bounce" />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2">
              <FaCode className="text-azul" />
              <h2 className="text-xl font-montserrat text-azul font-bold">Fique Conectado!</h2>
            </div>
            <p className="text-sm font-montserrat font-medium text-white mt-2">
              Acompanhe minha jornada de desenvolvimento e seja o primeiro a ver meus novos projetos!
            </p>
          </div>
        </a>

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Link
              to={`/projetos/${project.id}`}
              key={project.id}
              className="border rounded-lg overflow-hidden hover:scale-105 transition ease-in-out delay-100 hover:shadow-lg hover:shadow-azul/35"
            >
              <div className="relative">
                <img
                  src={projectImages.find(img => img.id === project.id)?.img}
                  alt={project.title}
                  className="w-full h-48 object-cover duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-montserrat text-azul font-bold">{project.title}</h2>
                <p className="text-sm font-montserrat font-medium text-white">{project.publishDate}</p>
                <p className="text-sm font-montserrat font-medium text-white mt-2">{project.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-start font-medium mb-32 font-montserrat text-white">Nenhum projeto encontrado.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
