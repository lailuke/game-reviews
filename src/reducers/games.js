const gamesDefaultState = [
  {
    id: "PC-1",
    name: "Counter-Strike: Global Offensive",
    category: "FPS",
    image: "https://drive.google.com/uc?id=1Gx7vTNmI62GGYPgBeK3K56dmA26cjr4V",
    link:
      "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
    description:
      "Its one of the best competitive FPS game. It needs a lot of practice & patience to learn and build up your skill. You'll need to have good aim, game sense & patience along with regular practice, if you want to get better at it. But when you master this game, any other FPS game will be a piece of cake for you. Each weapon has different recoil pattern, RoF and has ways to handle them that you'll need to learn in order to get better. As for the bad side, the community is toxic, the ranked matchmaking is bad & then there are hackers. Other than that, its a good game.",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
  },
  {
    id: "PC-2",
    name: "Portal 2",
    category: "Puzzle",
    image: "https://drive.google.com/uc?id=1MKyDPuF4CpwI516HKboNslABz8M8xtfm",
    link: "https://store.steampowered.com/app/620/Portal_2/",
    description:
      "The puzzles are incredibly good, the whole plot is awesome and we can see in the small details the hard work of the developers. Nothing was in the game for mere chance, eiter the music or a simple dialogue, and the humor was well achieved. I found the game and its story completely unpredictable and that was simply amazing. It is certainly one of the best games I've ever played and it is worth the money. The cooperation mode is equally very enjoyable and assures some hours of fun with friends. I definitely recommend it!",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
  },
  {
    id: "PC-3",
    name: "World of Warcraft",
    category: "MMORPG",
    image: "https://drive.google.com/uc?id=1mW2fQ3IgNV_KBPJKK1oeXDOjLWQGWcML",
    link: "https://worldofwarcraft.com/en-us/wowclassic",
    description:
      "Played the starter pack before, but after level 20 I couldn't play anymore, so I bought this game, and now I can play the game for 30 days. no idea if I want to get gametime after 30 days, but I just wanted to experience the full game, and I did.",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
  },
  {
    id: "CON-1",
    name: "Halo 3",
    category: "FPS",
    image: "https://drive.google.com/uc?id=1OYy4fkvrQ1-zMNL1LrVUn25zadR4vpoe",
    link: "https://www.halowaypoint.com/en-us/games/halo-3",
    description:
      "A very good campaign and an entertaining variety of other things to do. The campaign has an excellent storyline with a lot of twists to keep you wanting more. The gameplay overall is very fun and keeps it fresh throughout the campaign, although there are many crazy glitches since it's an older game (2007). I love to mess around on the Forge mode. You can also re-watch your campaign and forge adventures in Theater and take screenshots and clips for your XBOX 360 Console. The multiplayer is okay, but it doesn't live up to Halo, Reach's multiplayer. The Armory is more limited on armor, but there are more colors than Reach and they are very vibrant.",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
  },
  {
    id: "CON-2",
    name: "Super Smash Bros. Ultimate",
    category: "Fighting",
    image: "https://drive.google.com/uc?id=1dt4z2JHJZbJffwVp7dz0aoUe5FOw6mja",
    link: "https://www.smashbros.com/en_US/",
    description:
      "This is one of those games where the creators really try to do their best to pack-in EVERYTHING in one tiny little cartridge for a standard price. The game has you start out with just EIGHT characters! If you've been caught up with the game and seen how it works, you already know that the character roster is INSANE. Hours upon hours will be spent unlocking everybody!",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
  },
  {
    id: "CON-3",
    name: "The Last of Us",
    category: "Survival",
    image: "https://drive.google.com/uc?id=1BeMcm54Ys-0s2DFzhfp1qmuoZInU7ln_",
    link:
      "https://www.playstation.com/en-us/games/the-last-of-us-remastered-ps4/",
    description:
      "The Last Of Us. Is an amazing game with an perfect story that can make even the most hardcore gamer feel the intensity of the apocalyptic world. The graphics were breath taking, and were able to make you a very important part of this story, you choose their fate, whether they die or live is all on you. A game, to remember through the years with its stunning story.",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
  },
  {
    id: "VR-1",
    name: "Beat Saber",
    category: "Musical Game",
    image: "https://drive.google.com/uc?id=13TfNr6yjOcjANlGECUHlC1pPoXlhjIAM",
    link: "https://store.steampowered.com/app/620980/Beat_Saber/",
    description:
      "I got my headset just for this game and it did not disappoint. Easily the best VR experience you can go for. I get motion sick very easily, so a lot of VR applications don't go so well for me, but since you're stationary for this, there's no motion sickness, and slowly improving and achieving higher and higher scores as well as pulling off difficult block chains is so satisfying. I seriously cannot recommend this game enough, especially on PC because you have the ability to mod the game and download custom songs.",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
  },
  {
    id: "VR-2",
    name: "Superhot VR",
    category: "FPS",
    image: "https://drive.google.com/uc?id=1-MGg6mjJ3B-5n-OIgxxrU9ynijOM3mS0",
    link: "https://store.steampowered.com/app/617830/SUPERHOT_VR/",
    description:
      "The best damn Matrix / John Wick experience you'll ever have! A delectable first-time VR experience that'll be hard to put down once your headset is on. Not as mysterious and story-driven as the original, but a fantastic demonstration of VR technology and fun. Add the Spybreak song from The Matrix into the mix, and you've got one hella of a good VR cupcake in front of ya.",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
  },
  {
    id: "VR-3",
    name: "Paranormal Activity: The Lost Soul",
    category: "Horror",
    image: "https://drive.google.com/uc?id=1qt_d7AoUSo25-g_mjRLFOcQQx3nhm8SN",
    link:
      "https://store.steampowered.com/app/467660/Paranormal_Activity_The_Lost_Soul/",
    description:
      "I keep trying to beat it but I get scared very easily. I love it so much, just wish I wasn't such a chicken sh**. Great game, and an amazing experience.I recommend for those who want an adrenaline rush.",
    rating: "https://drive.google.com/uc?id=1tl9sSPbQTROXJ5bV0stsBZbRaHI5nRhD"
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
