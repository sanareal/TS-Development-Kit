console.log("2. Personal message:");
let personName: string="Eric";
let message: string="Hello Eric would you like to learn some python today?";
console.log(message);

console.log();

console.log("3. Name Cases:");
const name7='Sana Zahid';
console.log('Lowercase:', name7.toLowerCase());
console.log('Uppercase:', name7.toUpperCase());
console.log('Titlecase:', toTitleCase(name7));
function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}


console.log();

console.log("4. Famous Quote:");
let quote: string= "A person who never made a mistake never tried anything new.";
let author: string= "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

console.log();

console.log("5.Famous Quote 2:")
let famous_person: string= "Albert Einstein";
let quote2: string= "A person who never made a mistake never tried anything new.";
let message1: string=`${famous_person} once said, "${quote}"`;
console.log(message1);

console.log();

console.log("6.Stripping Names:")
let name1: string="\t\n   John Doe   \t\n";
console.log("Name with whitespace:", name1);
let strippedName: string=name1.trim();
console.log("Stripped name:", strippedName);

console.log();

// program: My First Progarm
// Author: Sana Zahid
// Date: 7-july-2023
console.log("7.Number Eight:");
console.log("Addition:", 6 + 2);
console.log("subtraction:", 10 - 2);
console.log("multiplication", 2 * 4);
console.log("Division:", 24 / 3);

console.log();

console.log("8. 5 + 3:");
// This program calculates the sum of two numbers and prints the result.
console.log( 5 + 3);
console.log( 5 + 3);
console.log( 5 + 3);
console.log( 5 + 3);

console.log();

// program: My First Progarm
// Author: Sana Zahid
// Date: 7-july-2023
console.log("9.Favorite Number:")
let favoriteNumber: number=8;
let message5: string=`My favorite number is ${favoriteNumber}.`;
console.log(message5)

console.log();

console.log("11.Names:")
let names: string[]=["Munazza", "Sofia", "Arham"];
for(let name of names){
    console.log(name);
}

console.log();

console.log("12.Greetings:");
for (let name of names) {
    console.log(`${name}, bonjour!`);
}

console.log();

console.log("13.Your Own Array:")
let transportation: string[]=["Ducati Sportsbike", "Rolls-Royce car", "Gulfstream Aerospace private jet"];
for(let item of transportation) {
    console.log(`I would like to own a ${item}.`);
}

console.log();

console.log("14.Guest List")
let people: string[]=["Mr. Zaman", "Ms. Rimsha", "Mr Edward"]
for(let guest of people){
    console.log(` ${guest} I would like to invite you to dinner. It would be such a great honor to have you join us for an evening of great conversation.`)
}

console.log();

console.log("15.Changing Guest List:")
console.log("Unfortunately, Mr. Zaman can't make it to the dinner.")
  people[0]="Ms. Sadaf";
for(let guest of people){
    console.log(` ${guest}, I would like to invite you to dinner. It would be such a great honor to hove you join us for an evening of great conversation.`)
}

console.log();

console.log("16.More Guests:")
console.log("Great news! We found a bigger dinner table!");
people.unshift("Ms. Maria");
const middleIndex=Math.floor(people.length / 2);
people.splice(middleIndex, 0, "Mr. Mark");
people.push("Mr. Rayan");
for (let guest of people){
    console.log(`${guest}, You're invited to a dinner gathering filled with great food and even better company. It would be such a great honor to host you.`)
}

console.log();

console.log("17.Shrinking Guest List:")
console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");
while(people.length > 2){
    const removedGuest= people.pop();
    console.log(`Sorry, ${removedGuest}, but we can no longer invite you to dinner.`)
}
 for (let guest of people){
    console.log(`Dear ${guest}, you are still invited to dinner. We look forward to seeing you.`)
 }
 people.pop();
 people.pop();
 console.log(people);

 console.log();

 console.log("18.Seeing The World:");
 let places: string[]=["Berlin", "Ottawa", "Paris", "Sydney", "Toronto"];
 console.log("Original Order:", places);
 let sortedPlaces: string[]=places.slice().sort();
 console.log("Alphabetical Order:", sortedPlaces);
 console.log("Original Order:", places);
 let reverseSortedPlaces: string[]=places.slice().sort((a, b) => b.localeCompare(a));
 console.log("Reverse Alphabetical Order:", reverseSortedPlaces);
 console.log("Original Order:", places);
 places.reverse();
 console.log("Reversed Order:", places);
 places.reverse();
 console.log("Original Order:", places);
 places.sort();
 console.log("Alphabetical Order:", places);
 let reverseSortedPlaces4: string[]=places.slice().sort((a, b) => b.localeCompare(a));
 console.log("Reverse Alphabetical Order:", reverseSortedPlaces);

 console.log();

 console.log("19. Dinner Guests");
 const numberOfGuests=people.length;
 console.log(`You are inviting ${numberOfGuests} people to dinner.`);

 console.log();

 console.log("20.Countries:");
 let countries: string[]=["Australia", "Saudia Arabia", "France", "England", "Italy", "Norway"];
 console.log("List of Countries:");
 for(let country of countries){
    console.log(country);
 }

 console.log();

  console.log("21. Information about Nowels:");
  interface Nowel{
    title: string;
    author: string;
    year: number;
    genre: string;
  }

  let nowels: Nowel[]=[
  {
    title: "The Enigma of Eternity",
    author: "Emily Watson",
    year: 2022,
    genre: "Science Fiction",
  },
  {
    title: "The Forgotten Tales",
    author: "David Anderson",
    year: 2017,
    genre: "Fantasy",
  },
  {
    title: "Whispering Shadows",
    author: "Sophia Williams",
    year: 2021,
    genre: "Thrillar",
  }
  ];

  console.log("Information about Nowels:");
  for (let nowel of nowels){
    console.log(`Title: ${nowel.title}`);
    console.log(`Author: ${nowel.author}`);
    console.log(`Year: ${nowel.year}`);
    console.log(`Genre: ${nowel.genre}`);
    console.log("------------------------");
  }

   console.log();

  console.log("22. Intentional Error:");
  let books: string[]=["Rich dad and Poor dad", "Think and Gow Rich", "The Alcamist"];

  // Intentional index error
  console.log(books[5]);

  // Corrected program
  console.log("List of Books:");
  for(let book of books){
    console.log(book);
  }

  console.log();

  console.log("23. Conditional Tests:")
  let car: string='subaru';

console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');

console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota');

console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');

console.log("Is car !== 'honda'? I predict true.");
console.log(car !== 'honda');

console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');

console.log("Is car.length > 5? I predict true.");
console.log(car.length > 5);

console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');


console.log();

console.log("24. More Conditional Tests:")
let car1: string ='subaru';
let age: number =6;
let fruits: string[] =['mango', 'orange', 'kiwi'];

console.log("Tests for equality and inequality with strings:");
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

console.log("Is car != 'Toyota'? I predict true.");
console.log(car != 'Toyota');

console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');

console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');

console.log("Tests using the lowercase function:");
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() == 'SUBARU'? I predict false.");
console.log(car.toLowerCase() == 'SUBARU');

console.log("Numerical tests:");
console.log("Is age == 6? I predict true.");
console.log(age == 6);

console.log("Is age != 12? I predict true.");
console.log(age != 12);

console.log("Is age > 1? I predict true.");
console.log(age > 1);

console.log("Is age < 11? I predict true.");
console.log(age < 11);

console.log("Is age >= 4? I predict true.");
console.log(age >= 4);

console.log("Is age <= 14? I predict false.");
console.log(age <= 14);

console.log("Tests using 'and' and 'or' operators:");
console.log("Is car == 'subaru' and age == 6? I predict true.");
console.log(car == 'subaru' && age == 6);

console.log("Is car == 'subaru' or age == 1? I predict true.");
console.log(car == 'subaru' || age == 1);

console.log();

console.log("25.Alien Color#1:")
let alein_color9: string='green';
if (alein_color9 === 'green'){
    console.log("Congratulations! You just earned 5 points!");
}
let alein_color2: string='red';
if (alein_color2 === 'green'){
    console.log("Congratulations! You just earned 5 points!");
}

console.log();


console.log("26.Alien Colors#2:")
let alein_color4: string='green';
if (alein_color4 === 'green'){
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else{
    console.log("Congratulations You just earned 10 points.")
}
let alein_color3: string='red';
if (alein_color3 === 'green'){
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else{
    console.log("Congratulations! You just earned 10 points.")
}

console.log();


console.log("27. Alien Colors#3:")
let alien_color6: string='green';
if (alien_color6 === 'green') {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color6 === 'yellow') {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color6 === 'red') {
  console.log("Congratulations! You just earned 15 points.");
}
 
let alien_color5: string='yellow';
  if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
  } else if (alien_color5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
  } else if (alien_color5 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
  }
  
  let alien_color: string='red';
  if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
  } else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
  } else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
  }
  
  console.log();

  console.log("28. Stages of Life:")
  let age1: number=12;
  if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

console.log();

console.log("29. Favorite fruit:")
let favorite_fruits: string[]=['kiwi', 'banana', 'avacado'];
if (favorite_fruits[0] === 'kiwi') {
  console.log("You really like kiwies!");
}
if (favorite_fruits[1] === 'banana') {
  console.log("You really like bananas!");
}
if (favorite_fruits[2] === 'avacado') {
  console.log("You really like avacadoes!");
}
if (favorite_fruits.indexOf('orange') !== -1) {
  console.log("You really like oranges!");
}
if (favorite_fruits.indexOf('strawberry') !== -1) {
  console.log("You really like strawberries!");
}

console.log();

console.log("30: Hello Admin");
let usernames: string[]=['admin', 'Eric', 'Mark', 'Bill', 'Ben'];
for (let username of usernames){
  if (username === 'admin'){
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

console.log();

console.log("31. No Users:")
let usernames6: string[]=['admin', 'Eric', 'Mark', 'Bill', 'Ben'];
if (usernames6.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames6) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
// Empty the usernames array
usernames6=[];
if (usernames6.length === 0) {
  console.log("We need to find some users!");
}

console.log();

console.log("32. Checking Usernames:")
let current_users: string[]=['John', 'Bella', 'Dua', 'Sarah', 'Stanley'];
let new_users: string[]=['Eric', 'John', 'Mia', 'Sarah', 'Ana'];
for (let new_username of new_users){
  let usernameTaken = false;
   for (let current_username of current_users){
    if (new_username.toLowerCase() === current_username.toLowerCase()){
      usernameTaken = true;
      break;
    }
  }
  if (usernameTaken){
    console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}

console.log();

console.log("33. Ordinal Numbers:")
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
  let ordinal = '';
  if (number === 1) {
    ordinal = 'st';
  } else if (number === 2) {
    ordinal = 'nd';
  } else if (number === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }
  console.log(`${number}${ordinal}`);
}

console.log();

console.log("34. Pizzas:");
let favorite_pizzas: string[]=['pepperoni','Vegetarian','BBQ chicken'];
for (let pizza of favorite_pizzas){
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

console.log();

console.log("35. Animals with same charcteristics:");
let animals: string[] = ['Dog','Cat','Hamster'];
for (let animal of animals) {
  console.log(animal);
}
console.log();
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}
console.log();
console.log("Any of these animals would make a great pet!");

console.log();

console.log("36. T-shirts:");
function make_shirt(size: string, message: string) {
    console.log(`The T-shirt size is ${size} and it will have the message "${message}" printed on it.`);
  }
  
  make_shirt("Medium", "Be kind")
  
console.log();

console.log("37. Large shirts");
function make_shirt8(size: string = "large", message: string = "I love TypeScript") {
    console.log(`The T-shirt size is ${size} and it will have the message "${message}" printed on it.`);
  } 
  make_shirt8(); // Large shirt with default message
  make_shirt8("medium"); // Medium shirt with default message 
  make_shirt("small", "Stay positive!"); // Custom size and message

  console.log();

  console.log("38. Cities:");
  function describe_city(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
  }
  describe_city("London", "United Kingdom"); // City in specified country
  describe_city("Paris"); // City with default country
  describe_city("Sydney", "Australia"); // City in specified country

  console.log();
  
  console.log("39. Country and cities:");
  function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Seoul", "Korea"));
  console.log(city_country("Berlin", "Germany"));
  
  console.log();

  console.log("40.Albums and Tracks:");
  function make_album(artist: string, title: string, tracks?: number): any {
    const album = {
      artist: artist,
      title: title
    };
    if (tracks !== undefined) {
      album["tracks"] = tracks;
    }
    return album;
  }
  console.log(make_album("Artist X", "Album X", 10));
   console.log();

   console.log("41. Magicians:");
   function show_magicians7(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  const magicians: string[] = ["Harry Potter", "Merlin", "Gandalf", "Albus Dumbledore"];
  show_magicians(magicians);

   console.log();

   console.log("42. Great Magicians:");
   function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  } 
  function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  } 
  const magicians5: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  make_great(magicians);
  show_magicians(magicians);
  
console.log();

console.log("43. Unchanged Magicians:");
function make_great0(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) {
      greatMagicians.push(`The Great ${magician}`);
    }
  
    return greatMagicians;
  }
  
  function show_magicians2(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians29: string[] = ["John", "Alice", "Mark"];
  const originalMagicians: string[] = [...magicians29];
  const greatMagicians: string[] = make_great0([...magicians29]);
  
  console.log("Original Magicians:");
  show_magicians(originalMagicians);
  
  console.log("Great Magicians:");
  show_magicians(greatMagicians);

  console.log();

console.log("44. Sandwiches:");
function makeSandwich(items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Items: " + items.join(", "));
    console.log("---------------------------");
  }
  
  // Call the function with different numbers of arguments
  makeSandwich(["Bread", "Boiledegg", "Mayonese"]);
  makeSandwich(["Bread", "Chickenpatty", "Lettuce", "Tomato"]);
  makeSandwich(["Bread", "Peanut Butter", "Jam"]);

  console.log();

  console.log("45. Cars:");
  function createCar(manufacturer: string, model: string, ...options: string[]): object {
    const car = {
      manufacturer: manufacturer,
      model: model,
      options: options
    };
  return car;
  }
  const car6 = createCar('Toyota', 'Corolla', 'Color: Red', 'Feature: Navigation');
  console.log(car6);
  const car2 = createCar('Ford', 'Mustang', 'Color: Blue', 'Feature: Leather Seats');
  console.log(car2);
  
  
  
  
  

  

  
  

  

  











      
  


  

  