let rates =      [
  [1.0, "liltanjiro.png", "Lil Tanjiro", "90 Days", "Petite Luna"],
  [2.0, "lilnezuko.png", "Lil Nezuko", "90 Days", "Petite Luna"],
  [3.0, "lilzenitsu.png", "Lil Zenitsu", "90 Days", "Petite Luna"],
  [4.0, "automobean.png", "AutomoBean", "Permanent", "Regular"],
  [5.0, "slimebuggy.png", "SlimeBuggy", "Permanent", "Regular"],
  [6.0, "yeticab.png", "Yeticab", "Permanent", "Regular"],
  [7.0, "corgipup.png", "Corgi Pup", "Permanent", "Regular"],
  [8.0, "fennecfox.png", "Fennec Fox", "Permanent", "Regular"],
  [9.0, "whitebunny.png", "White Bunny", "Permanent", "Regular"],
  [11.75, "concentratedpremiumwateroflife.png", "Concentrated Premium Water of Life", "Permanent", "Regular"],
  [14.0, "strawbear.png", "Strawbear", "90 Days", "Regular"],
  [16.25, "bananabear.png", "Bananabear", "90 Days", "Regular"],
  [18.5, "cookiebear.png", "Cookiebear", "90 Days", "Regular"],
  [20.75, "mousemonkey.png", "Mouse Monkey", "90 Days", "Regular"],
  [23.0, "stjartmes.png", "Stjartmes", "90 Days", "Regular"],
  [25.25, "iceknight.png", "Ice Knight", "90 Days", "Regular"],
  [27.5, "butterfly.png", "Butterfly", "90 Days", "Regular"],
  [29.75, "harpseal.png", "Harp Seal", "90 Days", "Regular"],
  [32.0, "toucan.png", "Toucan", "90 Days", "Regular"],
  [33.9, "elephant.png", "Elephant", "90 Days", "Regular"],
  [35.8, "sassysnake.png", "Sassy Snake", "90 Days", "Regular"],
  [37.7, "bichon.png", "Bichon", "90 Days", "Regular"],
  [39.6, "beagle.png", "Beagle", "90 Days", "Regular"],
  [41.5, "frankie.png", "Frankie", "90 Days", "Regular"],
  [43.4, "craw.png", "Craw", "90 Days", "Regular"],
  [45.3, "adriano.png", "Adriano", "90 Days", "Regular"],
  [47.2, "bonkey.png", "Bonkey", "90 Days", "Regular"],
  [49.1, "silverhusky.png", "Silver Husky", "90 Days", "Regular"],
  [51.0, "kiwipuff.png", "Kiwi Puff", "90 Days", "Regular"],
  [52.9, "berrypuff.png", "Berry Puff", "90 Days", "Regular"],
  [54.8, "mangopuff.png", "Mango Puff", "90 Days", "Regular"],
  [56.7, "machaman.png", "Macha Man", "90 Days", "Regular"],
  [58.6, "ladyhottea.png", "Lady Hot Tea", "90 Days", "Regular"],
  [60.5, "captaincafe.png", "Captain Cafe", "90 Days", "Regular"],
  [62.4, "monkey.png", "Monkey", "90 Days", "Regular"],
  [64.3, "miniyeti.png", "Mini Yeti", "90 Days", "Regular"],
  [66.2, "turkey.png", "Turkey", "90 Days", "Regular"],
  [68.1, "penguin.png", "Penguin", "90 Days", "Regular"],
  [70.0, "jr.balrog.png", "Jr. Balrog", "90 Days", "Regular"],
  [72.5, "brownpuppy.png", "Brown Puppy", "90 Days", "Regular"],
  [75.0, "pinkbunny.png", "Pink Bunny", "90 Days", "Regular"],
  [77.5, "minikargo.png", "Mini Kargo", "90 Days", "Regular"],
  [80.0, "blackkitty.png", "Black Kitty", "90 Days", "Regular"],
  [82.5, "whitebunny.png", "White Bunny", "90 Days", "Regular"],
  [85.0, "panda.png", "Panda", "90 Days", "Regular"],
  [87.5, "dinoboy.png", "Dino Boy", "90 Days", "Regular"],
  [90.0, "dinogirl.png", "Dino Girl", "90 Days", "Regular"],
  [92.5, "hedgehog.png", "Hedgehog", "90 Days", "Regular"],
  [95.0, "kino.png", "Kino", "90 Days", "Regular"],
  [97.5, "babytiger.png", "Baby Tiger", "90 Days", "Regular"],
  [100.0, "skunk.png", "Skunk", "90 Days", "Regular"],
]

export const Rollpet = () => {
  let result = []
  for (let i = 0; i < 11; i++) {
    let roll = Math.random() * 100

    for (const row of rates) {
      if(row[0] > roll) {
        result.push(row)
        break
      }
    }
  }
  return result
};
