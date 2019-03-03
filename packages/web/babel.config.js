module.exports = api => {
  api.cache(true);

  const presets = ['next/babel', '@zeit/next-typescript/babel'];

  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};

// {
//   "presets": ["next/babel", "@zeit/next-typescript/babel"],
//   "plugins": [
//     [
//       "module-resolver",
//       {
//         "root": ["./"],
//         "alias": {
//           "^react-native$": "react-native-web"
//         }
//       }
//     ]
//   ]
// }
