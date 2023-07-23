// Initial value of the cats array
let cats = ["Milo", "Otis", "Garfield"];

// 1) Appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2) Prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3) Removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4) Removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5) Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
  // Create a new array with the current cats and the new cat
  const newCats = [...cats, name];
  return newCats;
}

// 6) Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
  // Create a new array with the new cat followed by the current cats
  const newCats = [name, ...cats];
  return newCats;
}

// 7) Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  // Create a new array without the last cat
  const newCats = cats.slice(0, -1);
  return newCats;
}

// 8) Removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  // Create a new array without the first cat
  const newCats = cats.slice(1);
  return newCats;
}
