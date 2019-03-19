// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const doctors = (name, specialty, address) => {
  return {
    name: name,
    specialty: specialty,
    address: address
  }
}

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const pet = (name, breed) => {
  return {
    name: name,
    breed: breed
  }
}

const BowWowKennels = [];

const Nas = pet("Nas","Pitbull")
const Lola = pet("Lola","Pug")
const Atticus = pet("Atticus","German Shepherd")

BowWowKennels.push(Nas, Lola, Atticus);


console.log(BowWowKennels)

// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

jumpStop = [];
chatten = [];
polar = [];

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old

const createJumpStopArtist = (artist, age, genre) => {
  return {
    artist: artist,
    age: age,
    genre: genre
  }
}

const createChattenArtist = (artist, age, genre) => {
  return {
    artist: artist,
    age: age,
    genre: genre
  }
}

const createPolarArtist = (artist, age, genre) => {
  return {
    artist: artist,
    age: age,
    genre: genre
  }
}

const bruceAtikins = createChattenArtist("Bruce Atikins", "23", "Country")

const jensenBrown = createPolarArtist("Jensen Brown", "20", "Pop")

const dreFunkz = createJumpStopArtist("Dre Funkz", "25", "Funk")

const dustaGrimes = createJumpStopArtist("Dusta Grimes", "21", "Rap")

const bartholomew = createChattenArtist("Bartholomew Danielson","23", "Bluegrass")

const avilee = createChattenArtist("Avilee Dallas", "19", "Country")

const austinKinkaid = createPolarArtist("Austin Kinkaid", "22", "Pop")

const loyoncé = createJumpStopArtist("Loyoncé Branis", "27", "Rap")

jumpStop.push(dreFunkz, dustaGrimes, loyoncé)

polar.push(jensenBrown, austinKinkaid)

chatten.push(bruceAtikins, bartholomew, avilee)

console.log(chatten)
console.log(polar)
console.log(jumpStop)






