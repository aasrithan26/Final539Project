/* script.js — drop in repo root */
document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("info-panel");

  const content = {
    1: {
      title: "Grid Systems",
      description: `🧱 Grid Systems
Architectural Insight:
Grids are the structural backbone of architecture — they bring spatial order, rhythm, and balance to both interiors and façades. They influence movement and visual harmony.

UX Parallel:
UX designers use grid systems to align UI components, establish hierarchy, and ensure consistency across screens. Grids guide users through a clean, predictable interface.

Why It Matters:
Grids turn chaos into clarity. They help users orient themselves — whether in a room or on a screen — by creating predictable, human-centered layouts.`
      
    },
    2: {
      title: "Arches & Entry Points",
      description:
      `🏛 Arches & Entry Points
Architectural Insight:
Arches symbolize entry and transition. In architecture, they're not just decorative — they guide flow, frame thresholds, and invite exploration.

UX Parallel:
In UX, entry points are affordances like buttons, modals, or onboarding flows. They help users enter, navigate, and understand a system's structure.

Why It Matters:
Entry points shape first impressions. Like a welcoming doorway, they set the tone for user trust, clarity, and confidence in navigating your product.`
    },
    3: {
      title: "Light & Space",
      description:
      `🌞 Light & Space
Architectural Insight:
Light in architecture is both functional and emotional — it reveals, conceals, and choreographs how we experience space. It creates contrast and atmosphere.

UX Parallel:
In UI, light translates to whitespace, contrast, and visual clarity. These elements guide attention, establish flow, and prevent cognitive overload.

Why It Matters:
Just as daylight brings calm to a room, thoughtful whitespace brings ease to digital experiences. Light shapes how we see — and how we feel.`
    },
    4: {
      title: "Texture & Materiality",
      description:
      `🪵 Texture & Materiality
Architectural Insight:
Materiality brings buildings to life. Wood, concrete, glass — each texture evokes feeling, memory, and physical interaction. It’s how we connect emotionally to space.

UX Parallel:
In UX, textures emerge through microinteractions: shadows, gradients, motion. These digital materials give depth, hierarchy, and feedback to flat screens.

Why It Matters:
Design is more than visuals — it’s how something feels. Material cues help users intuitively understand what’s clickable, draggable, or focusable.`
    },
  };

  function reveal(card) {
    const data = content[card.dataset.id];
    // Wrap lines ending with ":" in <strong> tags
    const formattedDescription = data.description.replace(
      /^(.*?):$/gm,
      "<strong>$1:</strong>"
    );
    panel.innerHTML = `<h2>${data.title}</h2><p>${formattedDescription}</p>`;
    panel.hidden = false;
    panel.classList.add("show");
  }

  document.querySelectorAll(".card[data-id]").forEach((card) => {
    card.addEventListener("click", () => reveal(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        reveal(card);
      }
    });
  });
});