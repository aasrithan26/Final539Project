document.addEventListener("DOMContentLoaded", function () {
    const panel = document.getElementById("info-panel");
  
    const content = {
      1: {
        title: "Grid Systems",
        description: "Architects use grids to control space. UX designers use grids for alignment, consistency, and rhythm in digital layouts.",
      },
      2: {
        title: "Arches & Entry Points",
        description: "Entry points help orient users. In digital interfaces, elements like buttons, calls to action, or onboarding serve as 'entry arches.'",
      },
      3: {
        title: "Light & Space",
        description: "Just as lighting guides flow in physical space, whitespace and visual contrast help users navigate interfaces with clarity.",
      },
      4: {
        title: "Texture & Materiality",
        description: "Tactile textures convey emotion in architecture. In UI, layering, gradients, and animations evoke depth and interaction.",
      },
    };
  
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        const data = content[card.dataset.id];
        panel.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
        panel.hidden = false;
      });
  
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          const data = content[card.dataset.id];
          panel.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
          panel.hidden = false;
        }
      });
    });
  });