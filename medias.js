class Media {
    constructor(title, rating, genres, year, description, seasons, services, imgPath, id) {
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.year = year;

        // Arrays
        this.genres = genres;
        this.seasons = seasons;
        this.services = services;

        //  Image path
        this.imgPath = imgPath;

        this.id = id;
    }
}

class Season {
    constructor(NumberOfEpisodes) {
        this.NumberOfEpisodes = NumberOfEpisodes;
    }
}

// === Tv Shows === //

let TheOffice = new Media(
    "The Office",
    10,
    ["comedy"],
    "2005",
    "The series depicts the everyday lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company. To simulate the look of an actual documentary, it was filmed in a single-camera setup, without a studio audience or a laugh track.",
    [new Season(25), new Season(20), new Season(26), new Season(25)],
    ["Netflix"],
    "Content/theoffice.jpg",
    "the_office");

let SouthPark = new Media(
    "South Park",
    7,
    ["comedy"],
    "1997",
    "The animated series is not for children. In fact, its goal seems to be to offend as many as possible as it presents the adventures of Stan, Kyle, Kenny and Cartman.",
    [new Season(12), new Season(12), new Season(12), new Season(12)],
    ["Hulu"],
    "Content/southpark.jpg",
    "south_park");

let DragonBallZ = new Media(
    "Dragon Ball Z",
    7,
    ["action"],
    "1989",
    "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. Dragon Ball Z teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.",
    [new Season(12), new Season(8), new Season(24), new Season(25)],
    ["Crunchyroll", "Hulu"],
    './Content/Dragon-Ball-Z.jpg',
    "dragon_ball_z");

let Dark = new Media(
    "Dark",
    10,
    ["sci-fi"],
    "2018",
    "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.",
    [new Season(12)],
    ["Netflix"],
    'Content/dark.jpg',
    "dark");

let WestWorld = new Media(
    "West World",
    5,
    ["sci-fi"],
    "2017",
    "Westworld isn't your typical amusement park. Intended for rich vacationers,\
     the futuristic park -- which is looked after by robotic \"hosts\" -- allows its \
     visitors to live out their fantasies through artificial consciousness. No matter how\
     illicit the fantasy may be, there are no consequences for the park's guests, allowing for\
     any wish to be indulged. \"Westworld\" -- which is based on the 1973 Michael Crichton movie of\
     the same name -- features an all-star cast that includes Oscar winner Anthony Hopkins and Golden Globe winner Ed Harris.",
    [new Season(10)],
    ["HBO GO"],
    'Content/westworld.jpg',
    "west_world");

let HighCastle = new Media(
    "The Man in the High Castle",
    6,
    ["sci-fi"],
    "2016",
    "This series, loosely based Philip K. Dick's novel of the same name, takes a look at what the world\
    Axis powers won the war, leading to the United States being divided into three parts, an area controlled\
    by the Japanese, a Nazi-controlled section, and a buffer zone between the two. Despite the oppression, a \
    new hope emerges when films turn up that seem to show a different world. A woman believes the films \
    contain the key to freedom and is determined to find their mysterious guardian.",
    [new Season(10)],
    ["Prime Video"],
    'Content/highcastle.png',
    "high_castle");

let SpongeBob = new Media(
    "Spongebob Squarepants",
    8,
    ["comedy"],
    "1999",
    "A square yellow sponge named SpongeBob SquarePants lives in a pineapple with\
     his pet snail, Gary, in the city of Bikini Bottom on the floor of the Pacific Ocean.\
     He works as a fry cook at the Krusty Krab. During his time off, SpongeBob has a knack for \
     attracting trouble with his starfish best friend, Patrick. Arrogant octopus Squidward Tentacles, \
     SpongeBob's neighbor, dislikes SpongeBob because of his childlike behavior.",
    [new Season(10), new Season(10), new Season(10), new Season(10)],
    ["Prime Video"],
    'Content/spongebob-example.jpg',
    "spongebob");

let Friends = new Media(
    "Friends",
    7,
    ["comedy"],
    "1987",
    "Three young men and three young women -- of the BFF kind -- live in the same\
     apartment complex and face life and love in New York. They're not above sticking\
     their noses into one another's business and swapping romantic partners, which always leads\
     to the kind of hilarity average people will never experience -- especially during breakups.",
    [new Season(10), new Season(10)],
    ["Netflix", "Prime Video"],
    'Content/Friends.jpg',
    "friends");

let GameOfThrones = new Media(
    "Game of Thrones",
    8,
    ["adventure"],
    "2015",
    "George R.R. Martin's best-selling book series `A Song of Ice and Fire' is brought to the screen as\
     HBO sinks its considerable storytelling teeth into the medieval fantasy epic. It's the depiction of two powerful\
     families - kings and queens, knights and renegades, liars and honest men - playing a deadly game for control of the\
     Seven Kingdoms of Westeros, and to sit atop the Iron Throne. Martin is credited as a co-executive producer and one of\
     the writers for the series, which was filmed in Northern Ireland and Malta.",
    [new Season(10), new Season(10)],
    ["HBO GO"],
    'Content/gameOfThrones.jpg',
    "gameofthrones");

let Shameless = new Media(
    "Shameless",
    4,
    ["drama"],
    "2017",
    "Oscar-nominated actor William H. Macy stars as Frank Gallagher, a single father of six who spends much of his\
     free time drinking at bars. The Gallagher children -- led by oldest daughter Fiona (Emmy Rossum), who takes on much\
     of the child-rearing responsibility due to her mother's absence -- manage to raise themselves in spite of Frank's lack of parenting\
     and unusual parenting style when he does choose to act like a father. The drama is an adaptation of the BAFTA Award-winning British\
     show of the same name.",
    [new Season(10), new Season(10)],
    ["Showtime"],
    'Content/shameless.jpg',
    "shameless");

let MissKobayashisDragonMaid = new Media(
    "Miss Kobayashi's Dragon Maid",
    9,
    ["comedy"],
    "2017",
    "Miss Kobayashi is your average office worker who lives a boring life, alone in her small apartment–until she saves the life of a female dragon in distress. The dragon, named Tohru, has the ability to magically transform into an adorable human girl (albeit with horns and a long tail!), who will do anything to pay off her debt of gratitude, whether Miss Kobayashi likes it or not. With a very persistent and amorous dragon as a roommate, nothing comes easy, and Miss Kobayashi’s normal life is about to go off the deep end!",
    [new Season(14)],
    ["Crunchyroll"],
    'Content/Kobayashi.jpg',
    "misskobayashisdragonmaid");

let Megalobox = new Media(
    "MEGALOBOX",
    10,
    ["action"],
    "2018",
    "A desolate land stretches out from the city of poverty. A motorcycle speeds recklessly, blowing clouds of sand and dust. The rider is the protagonist of this story – he has neither a name nor a past. All he has is his ring name, “Junk Dog” and a technique for rigging MEGALOBOX matches with his pal Gansaku Nanbu, which they use to support their hand-to-mouth lives. JD is bored, resigned, and unfulfilled. Yuri has been the reigning champion of MEGALOBOX for the past few years. He has the skills and presence of a true champion. This is a story of JD and his rival, Yuri.",
    [new Season(13)],
    ["Crunchyroll"],
    'Content/Megalobox.jpg',
    "Megalobox");

let CowboyBebop = new Media(
  "CowboyBebop",
  10,
  ["adventure", "sci-fi"],
  "1998",
  "The Bebop crew is just trying to make a buck. This motley lot of intergalactic loners teams up to track down fugitives and turn them in for cold hard cash. Spike is a hero whose cool façade hides a dark and deadly past. The pilot Jet is a bruiser of a brute who can’t wait to collect the next bounty. Faye Valentine is a femme fatale prone to breaking hearts and separating fools from their money. Along for the ride are the brilliant, but weird, hacker Ed and a super-genius Welsh Corgi named Ein.",
  [new Season(26)],
  ["Crunchyroll"],
  'Content/CowboyBebop.jpg',
  "CowboyBebop");

// == Movies == //

let Avengers = new Media(
    "Avengers",
    7,
    ["action"],
    "2012",
    "Earth's mightiest heroes must come together and learn to fight as a team if\
    they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Netflix"],
    'Content/Avengers.jpg',
    "avengers");

let BlackPanther = new Media(
    "Black Panther",
    8,
    ["action"],
    "2018",
    "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king.\
     When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a\
     conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies\
     and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Netflix"],
    'Content/black-panther.jpg',
    "blackpanther");

  let BeastsOfNoNation = new Media(
      "Beasts of No Nation",
      10,
      ["action"],
      "2015",
      "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      [new Season(1)], // 1 season, 1 episode = movie
      ["Netflix"],
      'Content/beasts-of-no-nation.png',
      "beasts-of-no-nation");

  let TwentyWeeks = new Media(
    "20 weeks",
    7,
    ["romance"],
    "2017",
    "A couple must decide on how to move forward when their baby is diagnosed with a serious health condition at the 20-week scan.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Hulu"],
    'Content/twentyweeks.jpg',
    "twentyweeks");

  let StarTrekIntoDarkness = new Media(
    "Star Trek: Into Darkness",
    7,
    ["sci-fi"],
    "2013",
    "The crew of the Starship Enterprise returns home after an act of terrorism within its own organization destroys most of Starfleet and what it represents, \
    leaving Earth in a state of crisis. With a personal score to settle, Capt. James T. Kirk (Chris Pine) leads his people (Zachary Quinto, Karl Urban, Zoë Saldana) \
    on a mission to capture a one-man weapon of mass destruction, thereby propelling all of them into an epic game of life and death.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Prime Video"],
    'Content/startrekintodarkness.jpg',
    "startrekintodarkness");

  let TheDarkKnight = new Media(
    "The Dark Knight",
    7,
    ["drama"],
    "2008",
    "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on \
    crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins \
    to tread a fine line between heroism and vigilantism.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Prime Video"],
    'Content/darkknight.jpg',
    "thedarkknight");

  let TheDarkKnightRises = new Media(
    "The Dark Knight Rises",
    6,
    ["drama"],
    "2012",
    "It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility \
    for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar \
    (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Prime Video"],
    'Content/darkknightrises.jpg',
    "thedarkknightrises");

  let ThorDarkWorld = new Media(
    "Thor: The Dark World",
    3,
    ["sci-fi"],
    "2013",
    "In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon, \
    the Aether, was buried in a secret location. Hundreds of years later, Jane Foster (Natalie Portman) finds the Aether and becomes its host, forcing Thor \
    (Chris Hemsworth) to bring her to Asgard before Dark Elf Malekith (Christopher Eccleston) captures her and uses the weapon to destroy the Nine Realms -- including Earth.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Prime Video"],
    'Content/thordarkworld.jpg',
    "thorddarkworld");

  let ZeroDarkThirty = new Media(
    "Zero Dark Thirty",
    8,
    ["drama"],
    "2012",
    "Following the terrorist attacks of Sept. 11, 2001, Osama bin Laden becomes one of the most-wanted men on the planet. The worldwide manhunt for the terrorist leader \
    occupies the resources and attention of two U.S. presidential administrations. Ultimately, it is the work of a dedicated female operative (Jessica Chastain) that proves \
    instrumental in finally locating bin Laden. In May 2011, Navy SEALs launch a nighttime strike, killing bin Laden in his compound in Abbottabad, Pakistan.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Prime Video"],
    'Content/zerodarkthirty.jpg',
    "zerodarkthirty");

let Medias = [TheOffice, SouthPark, DragonBallZ, Dark, WestWorld, HighCastle, SpongeBob, Friends, GameOfThrones, Shameless, Avengers, BlackPanther, BeastsOfNoNation,
  TwentyWeeks, StarTrekIntoDarkness, TheDarkKnight, TheDarkKnightRises, ThorDarkWorld, ZeroDarkThirty, MissKobayashisDragonMaid, Megalobox, CowboyBebop];
