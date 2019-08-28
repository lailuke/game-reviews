const gamesDefaultState = [
  [
    {
      id: "PC-1",
      name: "Counter-Strike: Global Offensive",
      category: "FPS",
      image: "https://drive.google.com/uc?id=1Gx7vTNmI62GGYPgBeK3K56dmA26cjr4V",
      rating: "4.5",
      link: "https://www.google.com/",
      description: ""
    },
    {
      id: "PC-2",
      name: "Portal 2",
      category: "Puzzle",
      image: "https://drive.google.com/uc?id=1MKyDPuF4CpwI516HKboNslABz8M8xtfm",
      rating: "5",
      link: "https://www.google.com/",
      description: ""
    },
    {
      id: "PC-3",
      name: "World of Warcraft",
      category: "MMORPG",
      image: "https://drive.google.com/uc?id=1mW2fQ3IgNV_KBPJKK1oeXDOjLWQGWcML",
      rating: "5",
      link: "https://www.google.com/",
      description: ""
    }
  ],
  [
    {
      id: "CON-1",
      name: "Halo 3",
      category: "",
      image: "",
      rating: "",
      link: "",
      description: ""
    },
    {
      id: "CON-2",
      name: "",
      category: "",
      image: "",
      rating: "",
      link: "",
      description: ""
    },
    {
      id: "CON-3",
      name: "",
      category: "",
      image: "",
      rating: "",
      link: "",
      description: ""
    }
  ],
  [
    {
      id: "VR-1",
      name: "",
      category: "",
      image: "",
      rating: "",
      link: "",
      description: ""
    },
    {
      id: "VR-2",
      name: "",
      category: "",
      image: "",
      rating: "",
      link: "",
      description: ""
    },
    {
      id: "VR-3",
      name: "",
      category: "",
      image: "",
      rating: "",
      link: "",
      description: ""
    }
  ]
];

export default (state = gamesDefaultState, action) => {
  switch (action.type) {
    case "ADD_GAME":
      return [...state, action.game];
    default:
      return state;
  }
};
