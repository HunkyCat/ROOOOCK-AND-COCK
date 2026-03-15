(() => {
  const SOLUTIONS = [
    "about", "above", "abuse", "actor", "acute", "admit", "adopt", "adult", "after", "again",
    "agent", "agree", "ahead", "alarm", "album", "alert", "alike", "alive", "allow", "alone",
    "along", "alter", "among", "anger", "angle", "angry", "apart", "apple", "apply", "arena",
    "argue", "arise", "array", "aside", "asset", "audio", "audit", "avoid", "award", "aware",
    "badly", "baker", "bases", "basic", "beach", "began", "begin", "being", "below", "bench",
    "billy", "birth", "black", "blame", "blind", "block", "blood", "board", "boost", "booth",
    "bound", "brain", "brand", "bread", "break", "breed", "brief", "bring", "broad", "broke",
    "brown", "build", "built", "buyer", "cable", "calif", "carry", "catch", "cause", "chain",
    "chair", "chart", "chase", "cheap", "check", "chest", "chief", "child", "china", "chose",
    "civil", "claim", "class", "clean", "clear", "click", "clock", "close", "coach", "coast",
    "could", "count", "court", "cover", "craft", "crash", "cream", "crime", "cross", "crowd",
    "crown", "curve", "cycle", "daily", "dance", "dated", "dealt", "death", "debut", "delay",
    "depth", "doing", "doubt", "dozen", "draft", "drama", "drawn", "dream", "dress", "drill",
    "drink", "drive", "drove", "dying", "eager", "early", "earth", "eight", "elite", "empty",
    "enemy", "enjoy", "enter", "entry", "equal", "error", "event", "every", "exact", "exist",
    "extra", "faith", "false", "fault", "fiber", "field", "fifth", "fifty", "fight", "final",
    "first", "fixed", "flash", "fleet", "floor", "fluid", "focus", "force", "forth", "forty",
    "forum", "found", "frame", "frank", "fraud", "fresh", "front", "fruit", "fully", "funny",
    "giant", "given", "glass", "globe", "going", "grace", "grade", "grand", "grant", "grass",
    "great", "green", "gross", "group", "grown", "guard", "guess", "guest", "guide", "happy",
    "harry", "heart", "heavy", "hence", "henry", "horse", "hotel", "house", "human", "ideal",
    "image", "index", "inner", "input", "issue", "japan", "jimmy", "joint", "jones", "judge",
    "known", "label", "large", "laser", "later", "laugh", "layer", "learn", "lease", "least",
    "leave", "legal", "level", "lewis", "light", "limit", "links", "lives", "local", "logic",
    "loose", "lower", "lucky", "lunch", "major", "maker", "march", "maria", "match", "maybe",
    "mayor", "meant", "media", "metal", "might", "minor", "minus", "mixed", "model", "money",
    "month", "moral", "motor", "mount", "mouse", "mouth", "movie", "music", "needs", "never",
    "newly", "night", "noise", "north", "noted", "novel", "nurse", "occur", "ocean", "offer",
    "often", "order", "other", "ought", "paint", "panel", "paper", "party", "peace", "peter",
    "phase", "phone", "photo", "piece", "pilot", "pitch", "place", "plain", "plane", "plant",
    "plate", "point", "pound", "power", "press", "price", "pride", "prime", "print", "prior",
    "prize", "proof", "proud", "prove", "queen", "quick", "quiet", "quite", "radio", "raise",
    "range", "rapid", "ratio", "reach", "ready", "refer", "right", "rival", "river", "robin",
    "roger", "roman", "rough", "round", "route", "royal", "rural", "scale", "scene", "scope",
    "score", "sense", "serve", "seven", "shall", "shape", "share", "sharp", "sheet", "shelf",
    "shell", "shift", "shirt", "shock", "shoot", "short", "shown", "sight", "since", "sixth",
    "sixty", "sized", "skill", "sleep", "slide", "small", "smart", "smile", "smith", "smoke",
    "solid", "solve", "sorry", "sound", "south", "space", "spare", "speak", "speed", "spend",
    "spent", "split", "spoke", "sport", "staff", "stage", "stake", "stand", "start", "state",
    "steam", "steel", "stick", "still", "stock", "stone", "stood", "store", "storm", "story",
    "strip", "stuck", "study", "stuff", "style", "sugar", "suite", "super", "sweet", "table",
    "taken", "taste", "taxes", "teach", "teeth", "terry", "texas", "thank", "theft", "their",
    "theme", "there", "these", "thick", "thing", "think", "third", "those", "three", "threw",
    "throw", "tight", "times", "tired", "title", "today", "topic", "total", "touch", "tough",
    "tower", "track", "trade", "train", "treat", "trend", "trial", "tried", "tries", "truck",
    "truly", "trust", "truth", "twice", "under", "undue", "union", "unity", "until", "upper",
    "upset", "urban", "usage", "usual", "valid", "value", "video", "virus", "visit", "vital",
    "voice", "waste", "watch", "water", "wheel", "where", "which", "while", "white", "whole",
    "whose", "woman", "women", "world", "worry", "worse", "worst", "worth", "would", "wound",
    "write", "wrong", "wrote", "yield", "young", "youth"
  ];

  const EXTRA_GUESSES = [
    "adore", "adorn", "after", "agile", "amber", "amend", "amiss", "amuse", "ankle", "antic",
    "anvil", "apron", "arbor", "armor", "arrow", "ashen", "atlas", "attic", "badge", "bagel",
    "basil", "bloom", "blunt", "bolts", "brace", "brave", "brick", "brink", "broil", "bunny",
    "cabin", "cacao", "cacti", "camel", "candy", "canoe", "carve", "caste", "cello", "charm",
    "chili", "choir", "chord", "cider", "civic", "clamp", "clang", "clasp", "clerk", "climb",
    "clink", "clown", "coral", "couch", "crane", "crate", "creek", "crisp", "crook", "crumb",
    "crush", "delta", "demon", "diner", "dizzy", "donut", "druid", "eagle", "ebony", "ember",
    "epoch", "fable", "fairy", "fancy", "feral", "ferry", "fever", "flame", "flint", "flock",
    "flute", "foamy", "focal", "frost", "fuzzy", "gamer", "gamma", "genie", "ghost", "glare",
    "gleam", "gloom", "gnome", "gorge", "grove", "guild", "habit", "havoc", "hazel", "honey",
    "humid", "hymns", "icing", "igloo", "infer", "ionic", "irony", "ivory", "jelly", "joker",
    "kayak", "kneel", "knife", "knock", "koala", "latte", "lemon", "linen", "liver", "lobby",
    "lotus", "lunar", "lyric", "macho", "mango", "maple", "mason", "mercy", "merit", "micro",
    "mimic", "minty", "mirth", "mocha", "mossy", "motel", "motto", "muddy", "myths", "nylon",
    "oasis", "omega", "onion", "opera", "orbit", "otter", "ovary", "oxide", "panda", "patch",
    "pearl", "piano", "pixel", "plaza", "plume", "poker", "polar", "porch", "prank", "prism",
    "punch", "quart", "query", "raven", "razor", "relay", "remix", "rhyme", "ridge", "rinse",
    "robot", "rocky", "rogue", "roses", "salon", "salsa", "sandy", "satin", "scarf", "scoop",
    "scrub", "shade", "shiny", "shrub", "siege", "siren", "skate", "slate", "sleet", "sling",
    "slope", "snare", "sneak", "sonic", "spice", "spike", "spore", "squad", "stack", "stain",
    "stair", "stare", "stark", "straw", "swamp", "swing", "sword", "tempo", "tenor", "thank",
    "thorn", "tiger", "toast", "token", "tonic", "toxin", "trace", "trick", "trout", "ultra",
    "umbra", "uncle", "vapor", "velvet", "venom", "vivid", "vocal", "wafer", "whale", "wharf",
    "wider", "widow", "witch", "woven", "wreck", "zebra"
  ];

  function normalize(list) {
    return list
      .map((word) => String(word || "").trim().toUpperCase())
      .filter((word) => /^[A-Z]{5}$/.test(word));
  }

  const solutions = normalize(SOLUTIONS);
  const allowed = Array.from(new Set([...solutions, ...normalize(EXTRA_GUESSES)]));

  window.WORDLY_SOLUTION_WORDS = solutions;
  window.WORDLY_ALLOWED_WORDS = allowed;
})();
