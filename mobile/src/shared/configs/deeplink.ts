


const config = {
  screens: {
    room: {
      path: 'room/:id',
      exact: true,
      parse: {
        id: (id: string) => `user-${id}`,
      },
      stringify: {
        id: (id: string) => id.replace(/^user-/, ''),
      },
    },
  },
};

export const linking = {
  prefixes: ['reactativeustomallery://'],
  config,
};
