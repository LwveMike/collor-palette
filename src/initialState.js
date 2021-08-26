let initialState;

if(localStorage.getItem('palletes'))
  initialState = JSON.parse(localStorage.getItem('palletes'));
else {
  initialState = [
  {
    palleteName: "Material UI Colors",
    id: "material-ui-colors",
    emoji: "🎨",
    colors: [
      {
        name: "red",
        colorValue: "#F44336"
      },
      {
        name: "pink",
        colorValue: "#E91E63"
      },
      {
        name: "purple",
        colorValue: "#9C27B0"
      },
      {
        name: "deeppurple",
        colorValue: "#673AB7"
      },
      {
        name: "indigo",
        colorValue: "#3F51B5"
      },
      {
        name: "blue",
        colorValue: "#2196F3"
      },
      {
        name: "lightblue",
        colorValue: "#03A9F4"
      },
      {
        name: "cyan",
        colorValue: "#00BCD4"
      },
      {
        name: "teal",
        colorValue: "#009688"
      },
      {
        name: "green",
        colorValue: "#4CAF50"
      },
      {
        name: "lightgreen",
        colorValue: "#8BC34A"
      },
      {
        name: "lime",
        colorValue: "#CDDC39"
      },
      {
        name: "yellow",
        colorValue: "#FFEB3B"
      },
      {
        name: "amber",
        colorValue: "#FFC107"
      },
      {
        name: "orange",
        colorValue: "#FF9800"
      },
      {
        name: "deeporange",
        colorValue: "#FF5722"
      },
      {
        name: "brown",
        colorValue: "#795548"
      },
      {
        name: "grey",
        colorValue: "#9E9E9E"
      },
      {
        name: "bluegrey",
        colorValue: "#607D8B"
      },
      {
        name: "noName",
        colorValue: "#F44456"
      }
    ]
  },
  {
    palleteName: "Flat UI Colors v1",
    id: "flat-ui-colors-v1",
    emoji: "🤙",
    colors: [
      {
        name: "Turquoise",
        colorValue: "#1abc9c"
      },
      {
        name: "Emerald",
        colorValue: "#2ecc71"
      },
      {
        name: "PeterRiver",
        colorValue: "#3498db"
      },
      {
        name: "Amethyst",
        colorValue: "#9b59b6"
      },
      {
        name: "WetAsphalt",
        colorValue: "#34495e"
      },
      {
        name: "GreenSea",
        colorValue: "#16a085"
      },
      {
        name: "Nephritis",
        colorValue: "#27ae60"
      },
      {
        name: "BelizeHole",
        colorValue: "#2980b9"
      },
      {
        name: "Wisteria",
        colorValue: "#8e44ad"
      },
      {
        name: "MidnightBlue",
        colorValue: "#2c3e50"
      },
      {
        name: "SunFlower",
        colorValue: "#f1c40f"
      },
      {
        name: "Carrot",
        colorValue: "#e67e22"
      },
      {
        name: "Alizarin",
        colorValue: "#e74c3c"
      },
      {
        name: "Clouds",
        colorValue: "#ecf0f1"
      },
      {
        name: "Concrete",
        colorValue: "#95a5a6"
      },
      {
        name: "Orange",
        colorValue: "#f39c12"
      },
      {
        name: "Pumpkin",
        colorValue: "#d35400"
      },
      {
        name: "Pomegranate",
        colorValue: "#c0392b"
      },
      {
        name: "Silver",
        colorValue: "#bdc3c7"
      },
      {
        name: "Asbestos",
        colorValue: "#7f8c8d"
      }
    ]
  },
  {
    palleteName: "Flat UI Colors Dutch",
    id: "flat-ui-colors-dutch",
    emoji: "🇳🇱",
    colors: [
      {
        name: "Sunflower",
        colorValue: "#FFC312"
      },
      {
        name: "Energos",
        colorValue: "#C4E538"
      },
      {
        name: "BlueMartina",
        colorValue: "#12CBC4"
      },
      {
        name: "LavenderRose",
        colorValue: "#FDA7DF"
      },
      {
        name: "BaraRose",
        colorValue: "#ED4C67"
      },
      {
        name: "RadiantYellow",
        colorValue: "#F79F1F"
      },
      {
        name: "AndroidGreen",
        colorValue: "#A3CB38"
      },
      {
        name: "MediterraneanSea",
        colorValue: "#1289A7"
      },
      {
        name: "LavenderTea",
        colorValue: "#D980FA"
      },
      {
        name: "VerryBerry",
        colorValue: "#B53471"
      },
      {
        name: "PuffinsBill",
        colorValue: "#EE5A24"
      },
      {
        name: "PixelatedGrass",
        colorValue: "#009432"
      },
      {
        name: "MerchantMarineBlue",
        colorValue: "#0652DD"
      },
      {
        name: "ForgottenPurple",
        colorValue: "#9980FA"
      },
      {
        name: "HollyHock",
        colorValue: "#833471"
      },
      {
        name: "RedPigment",
        colorValue: "#EA2027"
      },
      {
        name: "TurkishAqua",
        colorValue: "#006266"
      },
      {
        name: "20000LeaguesUnderTheSea",
        colorValue: "#1B1464"
      },
      {
        name: "CircumorbitalRing",
        colorValue: "#5758BB"
      },
      {
        name: "MagentaPurple",
        colorValue: "#6F1E51"
      }
    ]
  },
  {
    palleteName: "Flat UI Colors American",
    id: "flat-ui-colors-american",
    emoji: "🇺🇸",
    colors: [
      {
        name: "LightGreenishBlue",
        colorValue: "#55efc4"
      },
      {
        name: "FadedPoster",
        colorValue: "#81ecec"
      },
      {
        name: "GreenDarnerTail",
        colorValue: "#74b9ff"
      },
      {
        name: "ShyMoment",
        colorValue: "#a29bfe"
      },
      {
        name: "CityLights",
        colorValue: "#dfe6e9"
      },
      {
        name: "MintLeaf",
        colorValue: "#00b894"
      },
      {
        name: "RobinsEggBlue",
        colorValue: "#00cec9"
      },
      {
        name: "ElectronBlue",
        colorValue: "#0984e3"
      },
      {
        name: "ExodusFruit",
        colorValue: "#6c5ce7"
      },
      {
        name: "SoothingBreeze",
        colorValue: "#b2bec3"
      },
      {
        name: "SourLemon",
        colorValue: "#ffeaa7"
      },
      {
        name: "FirstDate",
        colorValue: "#fab1a0"
      },
      {
        name: "PinkGlamour",
        colorValue: "#ff7675"
      },
      {
        name: "Pico8Pink",
        colorValue: "#fd79a8"
      },
      {
        name: "AmericanRiver",
        colorValue: "#636e72"
      },
      {
        name: "BrightYarrow",
        colorValue: "#fdcb6e"
      },
      {
        name: "OrangeVille",
        colorValue: "#e17055"
      },
      {
        name: "Chi-Gong",
        colorValue: "#d63031"
      },
      {
        name: "PrunusAvium",
        colorValue: "#e84393"
      },
      {
        name: "DraculaOrchid",
        colorValue: "#2d3436"
      }
    ]
  },
  {
    palleteName: "Flat UI Colors Aussie",
    id: "flat-ui-colors-aussie",
    emoji: "🇦🇺",
    colors: [
      {
        name: "Beekeeper",
        colorValue: "#f6e58d"
      },
      {
        name: "SpicedNectarine",
        colorValue: "#ffbe76"
      },
      {
        name: "PinkGlamour",
        colorValue: "#ff7979"
      },
      {
        name: "JuneBud",
        colorValue: "#badc58"
      },
      {
        name: "CoastalBreeze",
        colorValue: "#dff9fb"
      },
      {
        name: "Turbo",
        colorValue: "#f9ca24"
      },
      {
        name: "QuinceJelly",
        colorValue: "#f0932b"
      },
      {
        name: "CarminePink",
        colorValue: "#eb4d4b"
      },
      {
        name: "PureApple",
        colorValue: "#6ab04c"
      },
      {
        name: "HintOfIcePack",
        colorValue: "#c7ecee"
      },
      {
        name: "MiddleBlue",
        colorValue: "#7ed6df"
      },
      {
        name: "Heliotrope",
        colorValue: "#e056fd"
      },
      {
        name: "ExodusFruit",
        colorValue: "#686de0"
      },
      {
        name: "DeepKoamaru",
        colorValue: "#30336b"
      },
      {
        name: "SoaringEagle",
        colorValue: "#95afc0"
      },
      {
        name: "GreenlandGreen",
        colorValue: "#22a6b3"
      },
      {
        name: "SteelPink",
        colorValue: "#be2edd"
      },
      {
        name: "Blurple",
        colorValue: "#4834d4"
      },
      {
        name: "DeepCove",
        colorValue: "#130f40"
      },
      {
        name: "WizardGrey",
        colorValue: "#535c68"
      }
    ]
  },
  {
    palleteName: "Flat UI Colors British",
    id: "flat-ui-colors-british",
    emoji: "🇬🇧",
    colors: [
      {
        name: "ProtossPylon",
        colorValue: "#00a8ff"
      },
      {
        name: "Periwinkle",
        colorValue: "#9c88ff"
      },
      {
        name: "Rise-N-Shine",
        colorValue: "#fbc531"
      },
      {
        name: "DownloadProgress",
        colorValue: "#4cd137"
      },
      {
        name: "Seabrook",
        colorValue: "#487eb0"
      },
      {
        name: "VanaDylBlue",
        colorValue: "#0097e6"
      },
      {
        name: "MattPurple",
        colorValue: "#8c7ae6"
      },
      {
        name: "NanohanachaGold",
        colorValue: "#e1b12c"
      },
      {
        name: "SkirretGreen",
        colorValue: "#44bd32"
      },
      {
        name: "Naval",
        colorValue: "#40739e"
      },
      {
        name: "NasturcianFlower",
        colorValue: "#e84118"
      },
      {
        name: "LynxWhite",
        colorValue: "#f5f6fa"
      },
      {
        name: "BlueberrySoda",
        colorValue: "#7f8fa6"
      },
      {
        name: "MazarineBlue",
        colorValue: "#273c75"
      },
      {
        name: "BlueNights",
        colorValue: "#353b48"
      },
      {
        name: "HarleyOrange",
        colorValue: "#c23616"
      },
      {
        name: "HintOfPensive",
        colorValue: "#dcdde1"
      },
      {
        name: "ChainGangGrey",
        colorValue: "#718093"
      },
      {
        name: "PicoVoid",
        colorValue: "#192a56"
      },
      {
        name: "ElectroMagnetic",
        colorValue: "#2f3640"
      }
    ]
  },
  {
    palleteName: "Flat UI Colors Spanish",
    id: "flat-ui-colors-spanish",
    emoji: "🇪🇸",
    colors: [
      {
        name: "JacksonsPurple",
        colorValue: "#40407a"
      },
      {
        name: "C64Purple",
        colorValue: "#706fd3"
      },
      {
        name: "SwanWhite",
        colorValue: "#f7f1e3"
      },
      {
        name: "SummerSky",
        colorValue: "#34ace0"
      },
      {
        name: "CelestialGreen",
        colorValue: "#33d9b2"
      },
      {
        name: "LuckyPoint",
        colorValue: "#2c2c54"
      },
      {
        name: "Liberty",
        colorValue: "#474787"
      },
      {
        name: "HotStone",
        colorValue: "#aaa69d"
      },
      {
        name: "DevilBlue",
        colorValue: "#227093"
      },
      {
        name: "PalmSpringsSplash",
        colorValue: "#218c74"
      },
      {
        name: "FlourescentRed",
        colorValue: "#ff5252"
      },
      {
        name: "SyntheticPumpkin",
        colorValue: "#ff793f"
      },
      {
        name: "CrocodileTooth",
        colorValue: "#d1ccc0"
      },
      {
        name: "MandarinSorbet",
        colorValue: "#ffb142"
      },
      {
        name: "SpicedButterNut",
        colorValue: "#ffda79"
      },
      {
        name: "EyeOfNewt",
        colorValue: "#b33939"
      },
      {
        name: "ChileanFire",
        colorValue: "#cd6133"
      },
      {
        name: "GreyPorcelain",
        colorValue: "#84817a"
      },
      {
        name: "AlamedaOchre",
        colorValue: "#cc8e35"
      },
      {
        name: "Desert",
        colorValue: "#ccae62"
      }
    ]
  },
  {
    palleteName: "Flat UI Colors Indian",
    id: "flat-ui-colors-indian",
    emoji: "🇮🇳",
    colors: [
      {
        name: "OrchidOrange",
        colorValue: "#FEA47F"
      },
      {
        name: "SpiroDiscoBall",
        colorValue: "#25CCF7"
      },
      {
        name: "HoneyGlow",
        colorValue: "#EAB543"
      },
      {
        name: "SweetGarden",
        colorValue: "#55E6C1"
      },
      {
        name: "FallingStar",
        colorValue: "#CAD3C8"
      },
      {
        name: "RichGardenia",
        colorValue: "#F97F51"
      },
      {
        name: "ClearChill",
        colorValue: "#1B9CFC"
      },
      {
        name: "WhitePepper",
        colorValue: "#F8EFBA"
      },
      {
        name: "Keppel",
        colorValue: "#58B19F"
      },
      {
        name: "ShipsOfficer",
        colorValue: "#2C3A47"
      },
      {
        name: "FieryFuchsia",
        colorValue: "#B33771"
      },
      {
        name: "BlueBell",
        colorValue: "#3B3B98"
      },
      {
        name: "GeorgiaPeach",
        colorValue: "#FD7272"
      },
      {
        name: "OasisStream",
        colorValue: "#9AECDB"
      },
      {
        name: "BrightUbe",
        colorValue: "#D6A2E8"
      },
      {
        name: "MagentaPurple",
        colorValue: "#6D214F"
      },
      {
        name: "EndingNavyBlue",
        colorValue: "#182C61"
      },
      {
        name: "SasquatchSocks",
        colorValue: "#FC427B"
      },
      {
        name: "PineGlade",
        colorValue: "#BDC581"
      },
      {
        name: "HighlighterLavender",
        colorValue: "#82589F"
      }
    ]
  }
];
}

export default initialState;
