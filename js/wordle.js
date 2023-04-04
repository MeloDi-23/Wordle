"use strict";
const CHAR_NUMBER = 5;
const MAX_TRY = 6;
let targetString;
let wordPool = [
    "aback", "abate", "abhor", "abide", "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt", "added", "adept", "admit", "adobe", "adopt", "adore", "adorn", "adult", "aegis", "affix", "after", "afoot", "again", "agent", "agile", "aging", "agony", "agree", "ahead", "aisle", "Alamo", "alarm", "album", "alert", "algae", "alibi", "alien", "align", "alike", "alive", "allay", "Alley", "allot", "allow", "alloy", "aloft", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "amass", "amaze", "amber", "amble", "amend", "amino", "amiss", "among", "ample", "amply", "amuse", "angel", "anger", "angle", "Anglo", "angry", "angst", "ankle", "annal", "annex", "annoy", "anvil", "apart", "aphid", "apnea", "appal", "apple", "apply", "apron", "aptly", "arbor", "arena", "argue", "arise", "armed", "armor", "aroma", "array", "arrow", "arson", "Aryan", "Asian", "aside", "askew", "aspen", "assay", "asset", "Atlas", "attic", "audio", "audit", "aural", "avail", "avain", "avert", "avoid", "await", "awake", "award", "aware", "awash", "awful", "axial", "axiom", "bacon", "badge", "badly", "bagel", "baggy", "baked", "baker", "balmy", "banal", "banjo", "barge", "baron", "basal", "basic", "basin", "basis", "baste", "batch", "bathe", "baton", "bayou", "beach", "beard", "beast", "beefy", "befit", "begin", "beige", "being", "belch", "belie", "Belle", "belly", "below", "bench", "beret", "Berry", "berth", "beset", "bible", "bigot", "biker", "binge", "bingo", "birch", "birth", "bison", "bitch", "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleed", "blend", "bless", "blind", "blink", "Blitz", "block", "blond", "blood", "bloom", "blown", "bluff", "blunt", "blurt", "blush", "board", "boast", "bogey", "bogus", "bonus", "boost", "booth", "booty", "booze", "bored", "bosom", "botch", "bough", "bound", "bowel", "boxed", "boxer", "brace", "braid", "brain", "brake", "brand", "brash", "brass", "brave", "brawl", "bread", "break", "breed", "bribe", "brick", "bride", "brief", "brine", "bring", "brink", "brisk", "broad", "broil", "brood", "brook", "broom", "broth", "brown", "brunt", "brush", "brute", "buddy", "budge", "buggy", "build", "bulge", "bulky", "bully", "bumpy", "bunch", "burly", "burst", "bushy", "buyer", "cabin", "cable", "cache", "cadet", "cadre", "camel", "canal", "candy", "canoe", "canon", "caper", "cargo", "carol", "carry", "carve", "caste", "catch", "cater", "cause", "cedar", "celeb", "cello", "chafe", "chain", "chair", "chalk", "champ", "chant", "chaos", "charm", "chart", "chase", "chasm", "cheap", "cheat", "check", "cheek", "cheer", "chemo", "chess", "chest", "chick", "chide", "chief", "child", "chile", "chili", "chill", "chimp", "china", "chine", "chirp", "choir", "choke", "chomp", "chord", "chore", "chuck", "chunk", "churn", "chute", "cider", "cigar", "cinch", "civic", "civil", "claim", "clamp", "clang", "clash", "clasp", "clean", "clear", "cleat", "clerk", "click", "cliff", "climb", "cling", "clink", "cloak", "clock", "clone", "close", "cloth", "cloud", "clout", "clove", "clown", "cluck", "clump", "coach", "coast", "cocky", "cocoa", "coded", "colon", "color", "combo", "comer", "comet", "comfy", "comic", "comma", "condo", "coral", "corny", "corps", "couch", "cough", "could", "count", "coupe", "court", "cover", "covet", "cower", "crack", "craft", "cramp", "crane", "crank", "crash", "crass", "craze", "crate", "crave", "crazy", "creak", "cream", "credo", "creed", "creek", "creep", "crepe", "crest", "crime", "crisp", "croak", "croat", "crock", "crony", "crook", "croon", "cross", "crowd", "crown", "crude", "cruel", "crumb", "crush", "crust", "crypt", "cuban", "cubic", "cumin", "curly", "Curry", "curse", "curve", "cycle", "cynic", "Czech", "daddy", "daily", "dairy", "Daisy", "dance", "dandy", "dated", "dazed", "death", "debut", "decay", "decor", "decoy", "decry", "defer", "deity", "delay", "delta", "demon", "denim", "dense", "depot", "depth", "Derby", "deter", "devil", "diary", "digit", "dimly", "diner", "dingy", "dirty", "disco", "ditch", "diver", "dizzy", "dodge", "dogma", "domed", "donor", "donut", "doubt", "dough", "douse", "dowry", "dozen", "draft", "drain", "drama", "drape", "drawl", "dread", "dream", "dress", "dried", "drift", "drill", "drink", "drive", "dryly", "drool", "droop", "drove", "drown", "drunk", "dryer", "dummy", "dusky", "dusty", "Dutch", "dwarf", "dwell", "dying", "eager", "eagle", "early", "earth", "eater", "easel", "ebony", "eerie", "edict", "eight", "eject", "elbow", "elder", "elect", "elite", "elude", "embed", "ember", "empty", "enact", "endow", "enemy", "enjoy", "ensue", "enter", "entry", "envoy", "epoch", "equal", "equip", "erase", "erect", "erode", "error", "erupt", "essay", "ethic", "ether", "ethos", "evade", "event", "every", "evict", "evoke", "exact", "exalt", "Excel", "exert", "exile", "exist", "expel", "extol", "extra", "exude", "fable", "facet", "faded", "faint", "fairy", "faith", "false", "famed", "fancy", "farce", "fatal", "fatty", "fault", "fauna", "favor", "feast", "fecal", "feces", "feign", "fella", "felon", "femur", "fence", "feral", "ferry", "fetal", "fetch", "fetus", "fever", "fewer", "fiber", "field", "fiery", "fifth", "fifty", "fight", "filth", "final", "fines", "fired", "fishy", "fixed", "flair", "flaky", "flail", "flake", "flame", "flank", "flare", "flash", "flask", "fleck", "fleet", "flesh", "flick", "flier", "fling", "flint", "flirt", "float", "flock", "frond", "flood", "floor", "Flora", "flour", "fluff", "fluid", "fluke", "flunk", "flush", "flute", "flyer", "focal", "focus", "foggy", "folly", "foray", "force", "forge", "forgo", "forth", "forty", "forum", "found", "foyer", "frail", "frame", "frank", "fraud", "freak", "fresh", "Fried", "frill", "frock", "front", "frost", "frown", "fruit", "fudge", "fully", "funky", "funny", "furor", "furry", "fussy", "fuzzy", "gamma", "gamot", "gaudy", "gauge", "gaunt", "gauze", "genie", "genre", "genus", "ghost", "giant", "giddy", "girth", "given", "giver", "gizmo", "glade", "gland", "glare", "glass", "glaze", "gleam", "glean", "glide", "glint", "gloat", "globe", "gloom", "glory", "gloss", "glove", "going", "goody", "gooey", "goofy", "goose", "gorge", "gouge", "gourd", "grace", "grade", "graft", "grand", "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "graze", "great", "greed", "Greek", "green", "greet", "grief", "grill", "grime", "grind", "gripe", "groan", "groin", "groom", "grope", "gross", "group", "grove", "growl", "grown", "gruff", "grunt", "guard", "guess", "guest", "guide", "guild", "guilt", "guise", "gully", "gumbo", "gusto", "gutsy", "gypsy", "habit", "hairy", "halve", "handy", "happy", "hardy", "harsh", "haste", "hasty", "hatch", "haunt", "havoc", "heady", "heart", "heave", "heavy", "hedge", "hefty", "hello", "hence", "heron", "hiker", "hilly", "hindu", "hinge", "hitch", "hoard", "hobby", "hoist", "Holly", "homey", "honey", "honor", "horde", "horny", "horse", "hotel", "hotly", "houch", "hound", "house", "hover", "hudge", "human", "humid", "humor", "hurry", "hyena", "icing", "ideal", "idiom", "idiot", "image", "imbue", "impel", "imply", "incur", "index", "indie", "inept", "inert", "infer", "inlet", "inner", "input", "inset", "irate", "irish", "irony", "Islam", "issue", "itchy", "ivory", "jaded", "jaunt", "jeans", "jelly", "jerky", "jetty", "jewel", "jihad", "joint", "joist", "Jolly", "judge", "juice", "juicy", "jumbo", "junta", "juror", "Karma", "kayak", "khaki", "kiosk", "knack", "knead", "kneel", "knife", "knock", "knoll", "known", "koran", "label", "labor", "laden", "ladle", "laity", "lance", "lanky", "lapel", "lapse", "large", "larva", "laser", "latch", "later", "latex", "Latin", "latte", "laugh", "layer", "leach", "leafy", "leaky", "learn", "lease", "leash", "least", "leave", "ledge", "leech", "leery", "lefty", "legal", "lemon", "leper", "levee", "lever", "level", "libel", "light", "liken", "lilac", "limbo", "limit", "lined", "linen", "liner", "lingo", "liter", "lithe", "liver", "livid", "llama", "loath", "lobby", "local", "locus", "lodge", "lofty", "logic", "loner", "loose", "loser", "louse", "lousy", "lover", "lower", "lowly", "loyal", "lucid", "lucky", "lumpy", "lunar", "lunch", "lunge", "lurch", "lurid", "lupus", "lying", "lymph", "Lynch", "lyric", "macho", "macro", "madam", "madly", "Mafia", "magic", "maize", "major", "maker", "mango", "mania", "manic", "manly", "manor", "maple", "march", "maron", "marry", "marsh", "mason", "match", "matte", "maxim", "Mayan", "maybe", "mayor", "meaty", "Mecca", "medal", "media", "medic", "melee", "melon", "mercy", "merge", "merit", "merry", "messy", "metal", "meter", "Metro", "micro", "midst", "might", "milky", "mimic", "mince", "miner", "minor", "minus", "misty", "mixed", "mixer", "model", "Modem", "moist", "mogul", "mommy", "money", "month", "moody", "Moose", "moral", "morph", "mossy", "motel", "motif", "motor", "motto", "mound", "mount", "mourn", "mouse", "mouth", "mover", "movie", "mower", "mucus", "mulch", "mummy", "munch", "mural", "murky", "mushy", "music", "musty", "muted", "naive", "naked", "nanny", "nasal", "nasty", "naval", "navel", "needy", "Negro", "nerve", "never", "newly", "nexus", "niche", "niece", "nifty", "night", "ninth", "noble", "noise", "noisy", "nomad", "noose", "north", "notch", "noted", "novel", "nurse", "nylon", "nymph", "oasis", "obese", "occur", "ocean", "oddly", "offer", "often", "Olive", "onion", "onset", "opera", "opine", "opium", "optic", "order", "orbit", "organ", "Oscar", "other", "otter", "ought", "outdo", "outer", "ovary", "overt", "owing", "oxide", "ozone", "pagan", "pager", "paint", "palsy", "panda", "panel", "panic", "papal", "paper", "parka", "parse", "party", "pasta", "paste", "patch", "patio", "Patty", "pause", "payer", "peace", "peach", "pearl", "pecan", "pedal", "peddy", "penal", "penis", "perch", "peril", "perky", "pesky", "petal", "petty", "phase", "phone", "phony", "photo", "piano", "picky", "piece", "piety", "pilot", "pinch", "pious", "pique", "pitch", "pivot", "pixel", "pizza", "place", "plaid", "plain", "plane", "plank", "plant", "plate", "plaza", "plead", "pluck", "plumb", "plume", "plump", "plunk", "plush", "poach", "point", "poise", "poker", "polar", "polio", "polka", "polyp", "ponce", "poppy", "porch", "posit", "posse", "pouch", "pound", "power", "prank", "preen", "press", "price", "prick", "pride", "prima", "prime", "print", "prior", "prism", "privy", "prize", "probe", "prone", "proof", "prong", "prose", "proud", "prove", "prowl", "proxy", "prune", "pubic", "pudgy", "puffy", "pulse", "punch", "pupil", "puppy", "puree", "purge", "purse", "pushy", "pussy", "quail", "quake", "qualm", "quark", "quash", "queer", "queen", "quell", "query", "quest", "queue", "quick", "quiet", "quill", "quilt", "quirk", "quite", "quota", "quote", "rabbi", "rabid", "racer", "radar", "radio", "radon", "rainy", "raise", "rally", "ranch", "range", "rapid", "rater", "ratio", "raven", "razor", "reach", "react", "ready", "realm", "rebel", "rebut", "recur", "refer", "regal", "rehab", "reign", "relax", "relay", "relic", "renal", "renew", "repay", "repel", "reply", "rerun", "reset", "resin", "retro", "reuse", "revel", "rhino", "rhyme", "rider", "ridge", "rifle", "right", "rigid", "rigor", "rinse", "ripen", "riser", "risky", "rival", "river", "rivet", "roach", "roast", "Robin", "robot", "rocky", "rodeo", "rogue", "Roman", "roomy", "roost", "rotor", "rough", "round", "rouse", "route", "rover", "rowdy", "royal", "ruddy", "rugby", "ruler", "rumor", "runny", "rural", "rusty", "saber", "sadly", "salon", "salsa", "salty", "Sandy", "saint", "salad", "sassy", "satin", "sauce", "saudi", "sauna", "saver", "savor", "savvy", "scale", "scalp", "scant", "scare", "scarf", "scary", "scene", "scent", "scoff", "scold", "scoop", "scoot", "scope", "score", "scorn", "scour", "scout", "scowl", "scrap", "screw", "scrub", "scuba", "scuff", "sedan", "seedy", "seige", "seize", "semon", "sense", "serum", "serve", "setup", "seven", "sever", "sewer", "shack", "shade", "shady", "shaft", "shake", "shaky", "shall", "shale", "shame", "shank", "shape", "shard", "share", "shark", "sharp", "shave", "shawl", "sheaf", "shear", "sheen", "sheep", "sheer", "sheet", "shelf", "shell", "shift", "shine", "shiny", "shirt", "shock", "shoot", "shore", "short", "shout", "shove", "showy", "shred", "shrub", "shrug", "shunt", "shyly", "sidle", "sieve", "sight", "silky", "silly", "since", "sinus", "siren", "sixth", "sixty", "skate", "skier", "skiff", "skill", "skirt", "skull", "skunk", "slack", "slain", "slang", "slant", "slash", "slate", "slave", "sleek", "sleep", "sleet", "slice", "slick", "slide", "slime", "slimy", "sling", "slink", "slope", "slosh", "sloth", "slump", "slush", "smack", "small", "smart", "smash", "smear", "smell", "smile", "smirk", "smite", "smock", "smoke", "smoky", "snack", "snail", "snake", "snare", "snarl", "sneak", "sneer", "sniff", "snipe", "snoop", "snore", "snort", "snout", "snowy", "snuff", "soapy", "sober", "soggy", "solar", "solid", "solve", "sonar", "sonic", "sorry", "sound", "south", "space", "spade", "spank", "spare", "spark", "spasm", "spate", "spawn", "speak", "spear", "speck", "speed", "spell", "spend", "spent", "sperm", "spice", "spicy", "Spike", "spiky", "spill", "spine", "spire", "spite", "splay", "split", "spoil", "spook", "spool", "spoon", "spore", "sport", "spout", "spray", "spree", "sprig", "squad", "squat", "squid", "spurn", "spurt", "stack", "stact", "staff", "stage", "staid", "stain", "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stare", "Stark", "start", "stash", "state", "stave", "steak", "steal", "steam", "steel", "steep", "steer", "stick", "stiff", "still", "stilt", "sting", "stink", "stint", "stock", "stoic", "stoke", "stomp", "stone", "stony", "stool", "stoop", "store", "storm", "story", "stove", "strap", "straw", "stray", "strew", "strip", "strum", "strut", "stuck", "study", "stuff", "stump", "stunt", "style", "suede", "sugar", "suite", "sully", "sunny", "super", "surge", "surly", "sushi", "swamp", "swarm", "swear", "sweat", "swede", "sweep", "sweet", "swell", "swift", "swine", "swing", "swipe", "swirl", "swish", "Swiss", "swoon", "swoop", "sword", "syrup", "table", "taboo", "tacit", "tacky", "taint", "taker", "tally", "talon", "tango", "tangy", "taper", "taste", "tasty", "taunt", "tawny", "teach", "tease", "teddy", "tempo", "tempt", "tenet", "tenor", "tense", "tenth", "tepid", "terse", "thank", "theft", "their", "theme", "there", "these", "thick", "thief", "thigh", "thing", "think", "third", "thorn", "those", "three", "throb", "throw", "thumb", "thump", "thyme", "tidal", "tiger", "tight", "tiled", "timer", "timid", "tinge", "tired", "title", "toast", "today", "token", "tonal", "tongs", "tonic", "tooth", "topic", "torch", "torso", "total", "totem", "touch", "tough", "towel", "tower", "toxic", "toxin", "trace", "track", "tract", "trade", "trail", "train", "trait", "tramp", "trash", "trawl", "tread", "treat", "trend", "triad", "trial", "tribe", "trick", "tried", "troll", "troop", "trope", "trout", "trove", "truce", "truck", "truly", "trump", "trunk", "trust", "truth", "tuber", "tulip", "tummy", "tumor", "tunic", "tutor", "tweak", "tweed", "twice", "twine", "twirl", "twist", "ulcer", "ultra", "uncle", "under", "undue", "unfit", "unify", "union", "unite", "unity", "untie", "until", "unwed", "unzip", "upper", "upset", "urban", "urine", "usage", "Usher", "usual", "usurp", "utter", "vague", "valet", "valid", "valor", "value", "valve", "vapor", "vault", "vegan", "venom", "venue", "verge", "verse", "video", "vigil", "vigor", "Villa", "vinyl", "viral", "virus", "visit", "visor", "vista", "vital", "vivid", "vocal", "vodka", "vogue", "voice", "vomit", "voter", "vouch", "vowel", "wacky", "wafer", "wager", "wagon", "waist", "waive", "wares", "waste", "watch", "water", "waver", "weary", "weave", "wedge", "weigh", "weird", "welsh", "whack", "whale", "wharf", "wheat", "wheel", "where", "which", "whiff", "while", "whine", "whirl", "whisk", "white", "whizz", "whole", "whoop", "whore", "whose", "widen", "widow", "width", "wield", "wince", "windy", "wiper", "wired", "wispy", "witch", "witty", "woman", "woody", "works", "world", "worry", "worth", "would", "wound", "wrack", "wrath", "wreak", "wreck", "wrest", "wring", "wrist", "write", "wrong", "yacht", "yearn", "yeast", "yield", "young", "yours", "youth", "yummy"
];
let currentRow;
let guesses = new Array(MAX_TRY);
let inputElements = new Array();
let rowElement = new Array();
let randChoice = (e) => e[Math.floor(Math.random() * e.length)];
let containerDiv = document.getElementById('container');
function init() {
    currentRow = 0;
    const reader = new FileReader();
    targetString = randChoice(wordPool).toUpperCase();
    for (let i = 0; i < MAX_TRY; ++i) {
        let ro = document.createElement('div');
        ro.classList.add('wordle_row');
        rowElement.push(ro);
        containerDiv.appendChild(ro);
        inputElements[i] = new Array();
        for (let j = 0; j < CHAR_NUMBER; ++j) {
            let ele = document.createElement('input');
            ele.classList.add('wordle_cell');
            ele.id = `cell${i}${j}`;
            if (i != 0)
                ele.disabled = true;
            ele.oninput = changeText;
            inputElements[i].push(ele);
            ro.appendChild(ele);
        }
    }
    inputElements[0][0].focus();
}
function getInputAt(row) {
    let s = '';
    for (let i = 0; i < CHAR_NUMBER; ++i) {
        s += inputElements[row][i].value;
    }
    guesses[row] = s;
    return s;
}
function checkGuess(row) {
    let s = getInputAt(row);
    let flag = true;
    let ret = new Array(CHAR_NUMBER);
    for (let i = 0; i < CHAR_NUMBER; ++i) {
        if (s[i] == targetString[i]) {
            ret[i] = 'green';
        }
        else {
            flag = false;
            if (targetString.includes(s[i])) {
                ret[i] = 'yellow';
            }
            else {
                ret[i] = "grey";
            }
        }
    }
    return ret;
}
function changeText(event) {
    let tar = event.target;
    let match = tar.id.match(/^cell([0-9])([0-9])$/);
    if (!match) {
        return;
    }
    let row = parseInt(match[1]);
    let col = parseInt(match[2]);
    if (!(typeof row == 'number' && typeof col == 'number'))
        return;
    currentRow = row;
    if (tar.value.match(/^[a-zA-Z]+$/)) {
        let s = tar.value;
        tar.value = s.slice(s.length - 1).toUpperCase();
        tar.style.animation = 'emphAnimation 400ms ease-in-out';
        tar.onanimationend = (e) => e.target.style.animation = 'none';
        let count = -1;
        for (let i = col + 1; i < CHAR_NUMBER; ++i) {
            if (inputElements[row][i].value === '') {
                count = i;
                break;
            }
        }
        if (count == -1)
            for (let i = 0; i < col; ++i) {
                if (inputElements[row][i].value === '') {
                    count = i;
                    break;
                }
            }
        if (count == -1) {
            let ret = checkGuess(row);
            inputElements[row].forEach(e => e.disabled = true);
            for (let [i, e] of inputElements[row].entries()) {
                e.classList.add(ret[i]);
            }
            if (ret.every(e => e == 'green'))
                alert('guessed!');
            if (row < MAX_TRY - 1) {
                currentRow++;
                inputElements[row + 1].forEach(e => e.disabled = false);
                inputElements[row + 1][0].focus();
            }
            else {
                alert('chance\'s over!');
            }
        }
        else {
            inputElements[row][count].focus();
        }
    }
    else {
        tar.value = '';
    }
}
window.addEventListener('keydown', (event) => {
    let _ele = document.activeElement;
    let match = _ele ? _ele.id.match(/^cell([0-9])([0-9])$/) : null;
    if (!match)
        return;
    let ele = _ele;
    let row = parseInt(match[1]), col = parseInt(match[2]);
    switch (event.code) {
        case 'ArrowLeft':
            event.preventDefault();
            if (col > 0)
                inputElements[row][col - 1].focus();
            break;
        case 'ArrowRight':
            event.preventDefault();
            if (col < inputElements[row].length - 1)
                inputElements[row][col + 1].focus();
            break;
        case 'Backspace':
            if (ele.value === '' && col > 0) {
                inputElements[row][col - 1].focus();
            }
    }
});
window.onload = init;
