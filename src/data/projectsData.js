// Importando imagens
import DASH from '../assets/img/projects/dash.png';
import DASH1 from '../assets/img/projects/dash-1.png';
import DASH2 from '../assets/img/projects/dash-2.png';
import DASH3 from '../assets/img/projects/dash-3.png';
import ECO from '../assets/img/projects/ECO.png';
import ECO1 from '../assets/img/projects/ECO-1.png'
import ECO2 from '../assets/img/projects/ECO-2.png'
import ECO3 from '../assets/img/projects/ECO-3.png'
import ARD from '../assets/img/projects/ARD.png';
import ARD_1 from '../assets/img/projects/ARD-1.png';
import ARD_2 from '../assets/img/projects/ARD-2.png';
import ARD_3 from '../assets/img/projects/ARD-3.png';
import Python from '../assets/img/projects/PYTHON.png';
import Python1 from '../assets/img/projects/PYTHON-1.png';
import Python2 from '../assets/img/projects/PYTHON-2.png';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiArduino, SiBootstrap, SiDash, SiDatefns, SiDatev, SiJupyter, SiKeras, SiMicrosoftexcel, SiMongodb, SiPandas, SiPlotly, SiPython, SiPytorch, SiTailwindcss, SiTaketwointeractivesoftware, SiTensorflow } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiEspressif } from "react-icons/si";
import { FiFigma, FiGithub, FiGlobe, FiYoutube } from 'react-icons/fi';

export const ProjectData = {
	ProjectHeader: [
		{
			id: 1,
			title: 'Análise descritiva',
			publishDate: '23 de setembro de 2024',
			category: 'Dados',
		},
		{
			id: 2,
			title: 'ECOSHOP',
			publishDate: '11 de Setembro de 2024',
			category: 'Front-end',
		},
		{
			id: 3,
			title: 'Votação melhor equipe',
			publishDate: 'Em andamento',
			category: 'Internet of Things (IoT)',
		},
		{
			id: 4,
			title: 'Contagem Regressiva e Quiz',
			publishDate: 'Em andamento',
			category: 'Back-end',
		},
		
	],
	ProjectImages: [
		{
			id: 1,
			img: DASH,
		},
		{
			id: 2,
			img: ECO,
		},
		{
			id: 3,
			img: ARD,
		},
		{
			id: 4,
			img: Python
		}
	],
	ProjectRelatedImages: [
		{
			id: 1,
			img1: DASH1,
			img2: DASH2,
			img3: DASH3
		},
		{
			id: 2,
			img1: ECO1,
			img2: ECO2,
			img3: ECO3
		},
		{
			id: 3,
			img1: ARD_1,
			img2: ARD_2,
			img3: ARD_3
		},
		{
			id: 4,
			img1: Python,
			img2: Python2,
			img3: Python1
		},
	],
	ProjectInfo: {
		ObjectivesHeading: [
			{
				id: 1,
				objective: "Análise descritiva (Dashboards com Python)"
			},
			{
				id: 2,
				objective: "EcoShop - Loja Online de Produtos Sustentáveis"
			},
			{
				id: 3,
				objective: "Interação do usuario com o site da Formula E" 
			},
			{
				id: 4,
				objective: "Interação do usuario com o site da Formula E"
			}
		],
		Technologies: [
			{
				id: 1,
				techs: [
					"Python",
					"Jupyter",
					"Pandas",
					"Plotly",
					"Dash",
					"Xlsx"
				],
				icons: [
					SiPython,
					SiJupyter,
					SiPandas,
					SiPlotly,
					SiDash,
					SiMicrosoftexcel
				]
			},
			{
				id: 2,
				techs: [
					"HTML",
					"CSS",
					"Bootstrap"
				],
				icons: [
					FaHtml5,
					FaCss3Alt,
					SiBootstrap
				]
			},
			{
				id: 3,
				techs: [
					"WOKWI",
					"C++"
					
				],
				icons: [
					SiArduino,
					SiCplusplus
					
				]
			},
			{
				id: 4,
				techs: [
					"Python",
					"tkinter",
					"Datetime"

				],
				icons: [
					SiPython,
					SiPython,
					SiDatefns
				]
			}
		],
		ProjectDetails: [
			{
				id: 1,
				details:
					'Este projeto demonstra a criação de um dashboard web interativo e intuitivo utilizando Python e a biblioteca Dash. Com visualizações claras e um design focado na usabilidade, o dashboard permite a análise de dados de vendas de forma eficiente. A capacidade de filtrar informações por loja oferece flexibilidade na exploração dos dados, tornando-o uma ferramenta valiosa para entender o desempenho das vendas de cada produto e loja. A combinação de tecnologias como Plotly Express e Pandas garante a robustez e a capacidade de processamento do dashboard, consolidando-o como uma solução eficaz para a visualização e análise de dados.',
			},
			{
				id: 2,
				details:
					'O projeto EcoShop foi desenvolvido como entrega para o CP4 de Front-end e demonstra um compromisso com a sustentabilidade em todos os níveis, desde a missão de conectar consumidores conscientes a empresas eco-friendly até a escolha de tecnologias web eficientes para a construção de sua plataforma online. Através de uma estrutura organizada e intuitiva, o site da EcoShop oferece uma experiência de navegação fluida e agradável, utilizando HTML, CSS e o framework Bootstrap para garantir responsividade e acessibilidade em diversos dispositivos. O foco na organização e na aplicação de boas práticas de desenvolvimento web resulta em um site leve e de fácil manutenção, otimizado para um desempenho eficiente e uma experiência de usuário positiva.',
			},
			{
				id: 3,
				details:
					'Este projeto desenvolvido como parte da entrega para a Sprint do Challenge da Tech Mahindra na FIAP e simula uma plataforma de votação interativa para os fãs da Fórmula E, permitindo que votem em seu piloto ou equipe favorita e acompanhem a "corrida" virtual em tempo real.',
			},
			{
				id: 4,
				details: 
					"Este projeto Python foi desenvolvido como parte da entrega para a Sprint do Challenge da Tech Mahindra na FIAP e demonstra duas ferramentas interativas para fãs de Fórmula E. O primeiro código cria um quiz envolvente que testa o conhecimento do usuário sobre a categoria, com perguntas desafiadoras e feedback informativo para cada resposta.  O segundo código oferece uma contagem regressiva precisa e empolgante para a próxima corrida, utilizando uma interface gráfica amigável que mantém o usuário atualizado sobre a proximidade do evento. A combinação de entretenimento e informação faz deste projeto um recurso completo para os entusiastas da Fórmula E,  demonstrando a versatilidade da linguagem Python na criação de aplicações interativas e informativas."
			}
		],
		SocialSharingHeading: 'Referências:',
		SocialSharing: [
			{
				id: 1,
				names: ["GitHub"],
				icon: [FiGithub],
				url: ['https://github.com/FlyingHigh520741/dashboard_python'],
			},
			{
				id: 2,
				names: ['GitHub', "Website"],
				icon: [FiGithub, FiGlobe],
				url: ['https://github.com/FlyingHigh520741/CP4-Front', 'https://cp-4-front-mu.vercel.app'],
			},
			{
				id: 3,
				names: ['GitHub', "Circuito"],
				icon: [ FiGithub, SiArduino],
				url: [ 'https://github.com/FlyingHigh520741/CHELLENGER-EDGE', "https://wokwi.com/projects/400716155579648001"]
			},
			{
				id: 4,
				names: ['GitHub'],
				icon: [FiGithub],
				url: ['https://github.com/FlyingHigh520741/SPRINT-PYTHON'],
			},
		],
	},
};