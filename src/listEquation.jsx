export const listEquation = [
  {
    name: "Circle",
    equations: {
      x: (t, r) => r * Math.cos(t),
      y: () => 0,
      z: (t, r) => r * Math.sin(t),
    },
    description: "Moves in a circular path on the xz-plane.",
    use: "Perfect for orbits.",
  },
  {
    name: "Helix",
    equations: {
      x: (t, r) => r * Math.cos(t),
      y: (t) => t,
      z: (t, r) => r * Math.sin(t),
    },
    description: "Spirals upward or downward.",
    use: "DNA-like structures or spiral movements.",
  },
  {
    name: "Figure Eight",
    equations: {
      x: (t, r) => r * Math.sin(t),
      y: () => 0,
      z: (t, r) => r * Math.sin(2 * t),
    },
    description: "Creates a figure-eight shape on the xz-plane.",
    use: "Butterfly-like or looping motions.",
  },
  {
    name: "Lemniscate (Infinity Symbol)",
    equations: {
      x: (t, r) => r * Math.cos(t) / (1 + Math.sin(t) ** 2),
      y: () => 0,
      z: (t, r) => r * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) ** 2),
    },
    description: "Infinite loop pattern.",
    use: "Decorative paths.",
  },
  {
    name: "Butterfly Curve",
    equations: {
      x: (t) => Math.sin(t) * (Math.E ** Math.cos(t) - 2 * Math.cos(4 * t) - Math.sin(t / 12) ** 5),
      y: (t) => Math.cos(t) * (Math.E ** Math.cos(t) - 2 * Math.cos(4 * t) - Math.sin(t / 12) ** 5),
      z: (t) => 0.1 * t,
    },
    description: "Resembles a butterfly's path.",
    use: "Unique and artistic animations.",
  },
  {
    name: "Trefoil Knot",
    equations: {
      x: (t) => Math.sin(t) + 2 * Math.sin(2 * t),
      y: (t) => Math.cos(t) - 2 * Math.cos(2 * t),
      z: (t) => -Math.sin(3 * t),
    },
    description: "A 3D knot with looping structure.",
    use: "Stunning 3D patterns.",
  },
  {
    name: "Heart Shape",
    equations: {
      x: (t) => 16 * Math.sin(t) ** 3,
      y: (t) => 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t),
      z: () => 0,
    },
    description: "A 2D heart shape.",
    use: "Decorative or romantic animations.",
  },
  {
    name: "Cylindrical Spiral",
    equations: {
      x: (t, r) => r * Math.cos(t),
      y: (t, r) => r * Math.sin(t),
      z: (t, r) => t,
    },
    description: "A 3D cylindrical spiral with constant radial distance.",
    use: "Spirals wrapping around cylinders.",
  },
  {
    name: "Rose Curve",
    equations: {
      x: (t, r) => r * Math.cos(3 * t) * Math.cos(t),
      y: () => 0,
      z: (t, r) => r * Math.cos(3 * t) * Math.sin(t),
    },
    description: "A flower-like 3D path with petal structures.",
    use: "Stylized animations or patterns.",
  },
  {
    name: "Hypotrochoid",
    equations: {
      x: (t, r) => r * (Math.cos(t) + Math.cos(2 * t)),
      y: () => 0,
      z: (t, r) => r * (Math.sin(t) - Math.sin(2 * t)),
    },
    description: "A complex spirograph-like path in 3D space.",
    use: "Spirograph-style visualizations.",
  },
  {
    name: "Spherical Spiral",
    equations: {
      x: (t, r) => r * Math.sin(t) * Math.cos(t),
      y: (t, r) => r * Math.sin(t) * Math.sin(t),
      z: (t, r) => r * Math.cos(t),
    },
    description: "A 3D spiral that wraps around a sphere.",
    use: "Dynamic spherical patterns.",
  },
  {
    name: "Corkscrew",
    equations: {
      x: (t, r) => r * Math.cos(t),
      y: (t) => t,
      z: (t, r) => r * Math.sin(t),
    },
    description: "A helix-like structure with consistent rotation and upward movement.",
    use: "Path simulations.",
  },
  {
    name: "Wavy Spiral",
    equations: {
      x: (t, r) => r * Math.cos(t),
      y: (t, r) => r * Math.sin(t) * Math.sin(t / 5),
      z: (t, r) => t,
    },
    description: "A spiral with wavy perturbations in height.",
    use: "Artistic animations.",
  },
  {
    name: "Elliptical Orbit",
    equations: {
      x: (t, r) => r * Math.cos(t),
      y: () => 0,
      z: (t, r) => (r / 2) * Math.sin(t),
    },
    description: "An elliptical orbit around the xz-plane.",
    use: "Simulating planetary orbits.",
  },
  {
    name: "Waveform Path",
    equations: {
      x: (t, r) => r * Math.cos(t),
      y: (t, r) => r * Math.sin(t),
      z: (t) => Math.sin(5 * t),
    },
    description: "A circular wave path in 3D space.",
    use: "Artistic and oscillating motions.",
  }
];
