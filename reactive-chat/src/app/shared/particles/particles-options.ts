import {
  IOptions,
  MoveDirection,
  OutMode,
  RecursivePartial,
} from '@tsparticles/engine';

export const particlesOptions: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: '#121212',
    },
  },
  fpsLimit: 240,
  // interactivity: { //Efeitos de mouse
  //   events: {
  //     onClick: {
  //       enable: true,
  //       mode: 'push',
  //     },
  //     onHover: {
  //       enable: true,
  //       mode: 'repulse',
  //     },
  //   },
  //   modes: {
  //     push: {
  //       quantity: 4,
  //     },
  //     repulse: {
  //       distance: 200,
  //       duration: 0.4,
  //     },
  //   },
  // },
  particles: {
    color: {
      value: '#e0e0e0',
    },
    links: {
      color: '#e0e0e0',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.bounce,
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 120,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
