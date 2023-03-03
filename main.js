const words = [
  "free",
  "bear",
  "state",
  "leave",
  "strong",
  "making",
  "seventh",
  "music",
  "broke",
  "become",
  "wool",
  "able",
  "almost",
  "without",
  "space",
  "their",
  "wheat",
  "soap",
  "even",
  "front",
  "forgot",
  "taken",
  "nothing",
  "air",
  "sending",
  "trip",
  "wagon",
  "hour",
  "race",
  "ready",
  "cabin",
  "working",
  "dream",
  "grew",
  "feeling",
  "rocket",
  "body",
  "win",
  "eight",
  "forest",
  "rule",
  "water",
  "wrong",
  "throw",
  "himself",
  "sugar",
  "class",
  "sight",
  "dragon",
  "paint",
  "corner",
  "art",
  "short",
  "often",
  "drink",
  "trick",
  "those",
  "list",
  "orange",
  "tenth",
  "real",
  "great",
  "person",
  "dishes",
  "carry",
  "coal",
  "stand",
  "walking",
  "afraid",
  "turn",
  "begin",
  "yesterday",
  "beach",
  "dark",
  "hair",
  "mind",
  "sew",
  "wild",
  "word",
  "below",
  "sixth",
  "watch",
  "cave",
  "uncle",
  "dinner",
  "cotton",
  "later",
  "stove",
  "twelve",
  "grandmother",
  "south",
  "above",
  "song",
  "head",
  "learn",
  "stood",
  "bread",
  "salt",
  "pair",
  "thinking",
  "paper",
  "form",
  "never",
  "sorry",
  "under",
  "alone",
  "mail",
  "stairs",
  "lovely",
  "nearly",
  "yard",
  "desert",
  "inches",
  "poor",
  "merry",
  "round",
  "east",
  "reading",
  "given",
  "month",
  "west",
  "point",
  "belt",
  "shall",
  "spent",
  "team",
  "bright",
  "stick",
  "largest",
  "reach",
  "study",
  "sport",
  "better",
  "mouse",
  "catch",
  "kitten",
  "lady",
  "hurry",
  "busy",
  "camp",
  "talking",
  "place",
  "care",
  "step",
  "wait",
  "noise",
  "animal",
  "news",
  "barn",
  "river",
  "twenty",
  "heat",
  "few",
  "done",
  "order",
  "mean",
  "plane",
  "pocket",
  "year",
  "born",
  "began",
  "cattle",
  "basket",
  "mouth",
  "sled",
  "spring",
  "supper",
  "ground",
  "lunch",
  "life",
  "near",
  "own",
  "penny",
  "large",
  "wife",
  "cloth",
  "flying",
  "third",
  "fishing",
  "fourth",
  "past",
  "knife",
  "oil",
  "kept",
  "airplane",
  "felt",
  "number",
  "age",
  "picture",
  "teeth",
  "bones",
  "sound",
  "high",
  "kids",
  "follow",
  "taking",
  "cover",
  "sitting",
  "sister",
  "also",
  "hundred",
  "such",
  "smoke",
  "table",
  "early",
  "trying",
  "plan",
  "does",
  "should",
  "street",
  "trade",
  "color",
  "face",
  "window",
  "ever",
  "rode",
  "half",
  "earth",
  "spelling",
  "shot",
  "behind",
  "winter",
  "which",
  "kind",
  "eyes",
  "says",
  "bark",
  "draw",
  "living",
  "fight",
  "cage",
  "won",
  "pass",
  "flower",
  "rich",
];
const options = {
  fullScreen: {
    zIndex: 1,
  },
  particles: {
    number: {
      value: 0,
    },
    color: {
      value: ["#00FFFC", "#FC00FF", "#fffc00"],
    },
    shape: {
      type: ["circle", "square"],
      options: {},
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        minimumValue: 0,
        speed: 2,
        startValue: "max",
        destroy: "min",
      },
    },
    size: {
      value: 4,
      random: {
        enable: true,
        minimumValue: 2,
      },
    },
    links: {
      enable: false,
    },
    life: {
      duration: {
        sync: true,
        value: 5,
      },
      count: 1,
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 10,
      },
      speed: {
        min: 10,
        max: 20,
      },
      decay: 0.1,
      direction: "none",
      straight: false,
      outModes: {
        default: "destroy",
        top: "none",
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60,
      },
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 60,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 25,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
  emitters: {
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.4,
    },
    rate: {
      delay: 0.1,
      quantity: 150,
    },
    size: {
      width: 0,
      height: 0,
    },
  },
};
const colors = [
  "#77DD77",
  "#89cff0",
  "#99c5c4",
  "#9adedb",
  "#aa9499",
  "#aaf0d1",
  "#b2fba5",
  "#b39eb5",
  "#bdb0d0",
  "#bee7a5",
  "#befd73",
  "#c1c6fc",
  "#c6a4a4",
  "#cb99c9",
  "#ff6961",
  "#ff694f",
  "#ff9899",
  "#ffb7ce",
  "#ca9bf7",
];
const GAME_SIZE = 10;
const won = document.querySelector("#won");

const list = document.querySelector("ul");
let answer;
let dragEl = null;

const onDragStart = (e) => {
  const $this = e.target;
  $this.classList.add("drag--moving");
  dragEl = $this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", $this.innerHTML);
};
const onDragOver = (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = "move";
  return false;
};
const onDragEnter = (e) => {
  e.target.classList.add("drag--hover");
};
const onDragLeave = (e) => {
  e.target.classList.remove("drag--hover");
};
const onDrop = (e) => {
  if (e.stopPropagation) e.stopPropagation();
  const $this = e.target;
  const targetBg = $this.style.background;
  const dragBg = dragEl.style.background;
  dragEl.innerHTML = $this.innerHTML;
  dragEl.style.background = targetBg;
  $this.innerHTML = e.dataTransfer.getData("text/html");
  $this.style.background = dragBg;
  return false;
};

const onDragEnd = (e) => {
  e.target.classList.remove("drag--moving");
  document.querySelectorAll("li").forEach((item, index) => {
    item.classList.remove("drag--hover");
  });

  if (list.textContent === answer) {
    tsParticles.load("tsparticles", options);
    won.classList.add("shown");
  }
};

const initGame = (gameSize = GAME_SIZE) => {
  document.querySelector("#tsparticles").innerHTML = "";

  list.innerHTML = "";
  const selectedWords = Array.from(Array(gameSize)).map(
    (_) => words[Math.floor(Math.random() * words.length)]
  );
  answer = [...selectedWords].sort().join("");
  if (selectedWords.join("") === answer) {
    initGame();
    return;
  }
  for (const word of selectedWords) {
    const item = document.createElement("li");
    item.setAttribute("draggable", true);
    item.style.background = colors[Math.floor(Math.random() * colors.length)];
    item.textContent = word;
    item.addEventListener("dragstart", onDragStart, false);
    item.addEventListener("dragenter", onDragEnter, false);
    item.addEventListener("dragover", onDragOver, false);
    item.addEventListener("dragleave", onDragLeave, false);
    item.addEventListener("drop", onDrop, false);
    item.addEventListener("dragend", onDragEnd, false);
    list.appendChild(item);
  }
};

initGame();

document.querySelector("button").addEventListener("click", () => {
  won.classList.remove("shown");
  initGame();
});
