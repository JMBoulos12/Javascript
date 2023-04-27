



/**
  #Instructions
  Generate the lyrics of the song 'I Know an Old Lady Who Swallowed a Fly'.

  While you could copy/paste the lyrics, or read them from a file, this problem is much more interesting if you approach it algorithmically.

  This is a cumulative song of unknown origin.

  This is one of many common variants.

  I know an old lady who swallowed a fly.
  I don't know why she swallowed the fly. Perhaps she'll die.

  I know an old lady who swallowed a spider.
  It wriggled and jiggled and tickled inside her.
  She swallowed the spider to catch the fly.
  I don't know why she swallowed the fly. Perhaps she'll die.

  I know an old lady who swallowed a bird.
  How absurd to swallow a bird!
  She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
  She swallowed the spider to catch the fly.
  I don't know why she swallowed the fly. Perhaps she'll die.

  I know an old lady who swallowed a cat.
  Imagine that, to swallow a cat!
  She swallowed the cat to catch the bird.
  She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
  She swallowed the spider to catch the fly.
  I don't know why she swallowed the fly. Perhaps she'll die.

  I know an old lady who swallowed a dog.
  What a hog, to swallow a dog!
  She swallowed the dog to catch the cat.
  She swallowed the cat to catch the bird.
  She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
  She swallowed the spider to catch the fly.
  I don't know why she swallowed the fly. Perhaps she'll die.

  I know an old lady who swallowed a goat.
  Just opened her throat and swallowed a goat!
  She swallowed the goat to catch the dog.
  She swallowed the dog to catch the cat.
  She swallowed the cat to catch the bird.
  She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
  She swallowed the spider to catch the fly.
  I don't know why she swallowed the fly. Perhaps she'll die.

  I know an old lady who swallowed a cow.
  I don't know how she swallowed a cow!
  She swallowed the cow to catch the goat.
  She swallowed the goat to catch the dog.
  She swallowed the dog to catch the cat.
  She swallowed the cat to catch the bird.
  She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
  She swallowed the spider to catch the fly.
  I don't know why she swallowed the fly. Perhaps she'll die.

  I know an old lady who swallowed a horse.
  She's dead, of course!
  
  27-April-2023
*/


export class Song {
  verse(n) {
    let verse = `I know an old lady who swallowed a ${
      Song.data[n - 1].animal
    }.\n`;
    verse += Song.data[n - 1].description;
    if (n < 8) {
      for (let i = n - 1; i > 0; i--) {
        verse += `She swallowed the ${Song.data[i].animal} to catch the ${
          Song.data[i - 1].animal + (Song.data[i - 1].extension || "")
        }.\n`;
      }
      verse += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
    }
    return verse;
  }
  verses(m, n) {
    let verse = "";
    for (let i = m; i <= n; i++) {
      verse += this.verse(i);
      verse += "\n";
    }
    return verse;
  }
}
Song.data = [
  {
    animal: "fly",
    description: "",
  },
  {
    animal: "spider",
    extension: " that wriggled and jiggled and tickled inside her",
    description: "It wriggled and jiggled and tickled inside her.\n",
  },
  {
    animal: "bird",
    description: "How absurd to swallow a bird!\n",
  },
  {
    animal: "cat",
    description: "Imagine that, to swallow a cat!\n",
  },
  {
    animal: "dog",
    description: "What a hog, to swallow a dog!\n",
  },
  {
    animal: "goat",
    description: "Just opened her throat and swallowed a goat!\n",
  },
  {
    animal: "cow",
    description: "I don't know how she swallowed a cow!\n",
  },
  {
    animal: "horse",
    description: "She's dead, of course!\n",
  },
];
