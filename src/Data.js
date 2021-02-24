export const Data = [
  {
    id: 1,
    moduleName: "Menu A",
    moduleType: "Menu",
    parentModuleId: 0,
    children: [
      {
        id: 2,
        moduleName: "Sub Menu A1 ",
        moduleType: "Sub Menu",
        parentModuleId: 1,
        children: [
          {
            id: 71,
            moduleName: "Module A1",
            moduleType: "Module",
            parentModuleId: 2,
          },
        ],
      },
      {
        id: 3,
        moduleName: " Sub Menu A2 ",
        moduleType: "Sub Menu",
        parentModuleId: 2,
        children: [
          {
            id: 72,
            moduleName: "Module A2",
            moduleType: "Module",
            parentModuleId: 3,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    moduleName: "Menu B",
    moduleType: "Menu",
    parentModuleId: 0,
    children: [
      {
        id: 5,
        moduleName: "Sub Menu B1 ",
        moduleType: "Sub Menu",
        parentModuleId: 1,
        children: [
          {
            id: 72,
            moduleName: "Module B1",
            moduleType: "Module",
            parentModuleId: 2,
          },
        ],
      },
      {
        id: 58,
        moduleName: " Sub Menu B2 ",
        moduleType: "Sub Menu",
        parentModuleId: 1,
        children: [],
      },
    ],
  },
];
