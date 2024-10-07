import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const [particleNumber, setParticleNumber] = useState(getParticleNumber());

  // Função para determinar o número de partículas com base na largura da tela
  function getParticleNumber() {
    return window.innerWidth < 768 ? 10 : 25; 
  }

  // Hook para atualizar o número de partículas quando a tela for redimensionada
  useEffect(() => {
    function handleResize() {
      setParticleNumber(getParticleNumber());
    }

    window.addEventListener("resize", handleResize);

    // Limpa o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number:   
 {
            value: particleNumber,   

            density: {
              enable: true, 
              value_area: 800, 
            },
          },
          color: {
            value: ["#031ba1", "#3247bf", "#00f"], 
          },
          shape: {
            type: "circle", 
          },
          opacity: {
            value: 0.8, 
            random: true, 
            anim: {
              enable: true, 
              speed: 1, 
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3, 
            random: true,
            anim: {
              enable: true,
              speed: 2, 
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false, 
          },
          move: {
            enable: true,
            speed: 2, 
            direction: "none", 
            random: true, 
            straight: false, 
            out_mode: "out",   
 
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", 
            },
            onclick: {
              enable: true,
              mode: "push", 
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100, 
            },
            push: {
              particles_nb: 4, 
            },
          },
        },
                "retina_detect": true,
                "background": {
                    "color": "#2D2D2D",
                    "image": "linear-gradient(to bottom, #000000, #3933e4 250%)",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}
        />
    );
}

export default Particle;
