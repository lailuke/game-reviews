const gamesDefaultState = [
  {
    id: "PC-1",
    name: "Counter-Strike: Global Offensive",
    category: "FPS",
    image: "https://drive.google.com/uc?id=1Gx7vTNmI62GGYPgBeK3K56dmA26cjr4V",
    link: "https://www.google.com/",
    description:
      "Its one of the best competitive FPS game. It needs a lot of practice & patience to learn and build up your skill. You'll need to have good aim, game sense & patience along with regular practice, if you want to get better at it. But when you master this game, any other FPS game will be a piece of cake for you. Each weapon has different recoil pattern, RoF and has ways to handle them that you'll need to learn in order to get better. As for the bad side, the community is toxic, the ranked matchmaking is bad & then there are hackers. Other than that, its a good game."
  },
  {
    id: "PC-2",
    name: "Portal 2",
    category: "Puzzle",
    image: "https://drive.google.com/uc?id=1MKyDPuF4CpwI516HKboNslABz8M8xtfm",
    link: "https://www.google.com/",
    description:
      "The puzzles are incredibly good, the whole plot is awesome and we can see in the small details the hard work of the developers. Nothing was in the game for mere chance, eiter the music or a simple dialogue, and the humor was well achieved. I found the game and its story completely unpredictable and that was simply amazing. It is certainly one of the best games I've ever played and it is worth the money. The cooperation mode is equally very enjoyable and assures some hours of fun with friends. I definitely recommend it!"
  },
  {
    id: "PC-3",
    name: "World of Warcraft",
    category: "MMORPG",
    image: "https://drive.google.com/uc?id=1mW2fQ3IgNV_KBPJKK1oeXDOjLWQGWcML",
    link: "https://www.google.com/",
    description:
      "Played the starter pack before, but after level 20 I couldn't play anymore, so I bought this game, and now I can play the game for 30 days. no idea if I want to get gametime after 30 days, but I just wanted to experience the full game, and I did."
  },
  {
    id: "CON-1",
    name: "Halo 3",
    category: "",
    image: "",
    link: "",
    description: ""
  },
  {
    id: "CON-2",
    name: "",
    category: "",
    image: "",
    link: "",
    description: ""
  },
  {
    id: "CON-3",
    name: "",
    category: "",
    image: "",
    link: "",
    description: ""
  },
  {
    id: "VR-1",
    name: "",
    category: "",
    image: "",
    link: "",
    description: ""
  },
  {
    id: "VR-2",
    name: "",
    category: "",
    image: "",
    link: "",
    description: ""
  },
  {
    id: "VR-3",
    name: "",
    category: "",
    image: "",
    link: "",
    description: ""
  }
];

export default (state = gamesDefaultState, action) => {
  switch (action.type) {
    case "ADD_GAME":
      return [...state, action.game];
    default:
      return state;
  }
};
