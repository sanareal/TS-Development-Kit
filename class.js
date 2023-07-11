var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("2. Personal message:");
var personName = "Eric";
var message = "Hello Eric would you like to learn some python today?";
console.log(message);
console.log();
console.log("3. Name Cases:");
var name7 = 'Sana Zahid';
console.log('Lowercase:', name7.toLowerCase());
console.log('Uppercase:', name7.toUpperCase());
console.log('Titlecase:', toTitleCase(name7));
function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\w/g, function (match) { return match.toUpperCase(); });
}
console.log();
console.log("4. Famous Quote:");
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
console.log();
console.log("5.Famous Quote 2:");
var famous_person = "Albert Einstein";
var quote2 = "A person who never made a mistake never tried anything new.";
var message1 = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message1);
console.log();
console.log("6.Stripping Names:");
var name1 = "\t\n   John Doe   \t\n";
console.log("Name with whitespace:", name1);
var strippedName = name1.trim();
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
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log();
// program: My First Progarm
// Author: Sana Zahid
// Date: 7-july-2023
console.log("9.Favorite Number:");
var favoriteNumber = 8;
var message5 = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message5);
console.log();
console.log("11.Names:");
var names = ["Munazza", "Sofia", "Arham"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
console.log();
console.log("12.Greetings:");
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var name_2 = names_2[_a];
    console.log("".concat(name_2, ", bonjour!"));
}
console.log();
console.log("13.Your Own Array:");
var transportation = ["Ducati Sportsbike", "Rolls-Royce car", "Gulfstream Aerospace private jet"];
for (var _b = 0, transportation_1 = transportation; _b < transportation_1.length; _b++) {
    var item = transportation_1[_b];
    console.log("I would like to own a ".concat(item, "."));
}
console.log();
console.log("14.Guest List");
var people = ["Mr. Zaman", "Ms. Rimsha", "Mr Edward"];
for (var _c = 0, people_1 = people; _c < people_1.length; _c++) {
    var guest = people_1[_c];
    console.log(" ".concat(guest, " I would like to invite you to dinner. It would be such a great honor to have you join us for an evening of great conversation."));
}
console.log();
console.log("15.Changing Guest List:");
console.log("Unfortunately, Mr. Zaman can't make it to the dinner.");
people[0] = "Ms. Sadaf";
for (var _d = 0, people_2 = people; _d < people_2.length; _d++) {
    var guest = people_2[_d];
    console.log(" ".concat(guest, ", I would like to invite you to dinner. It would be such a great honor to hove you join us for an evening of great conversation."));
}
console.log();
console.log("16.More Guests:");
console.log("Great news! We found a bigger dinner table!");
people.unshift("Ms. Maria");
var middleIndex = Math.floor(people.length / 2);
people.splice(middleIndex, 0, "Mr. Mark");
people.push("Mr. Rayan");
for (var _e = 0, people_3 = people; _e < people_3.length; _e++) {
    var guest = people_3[_e];
    console.log("".concat(guest, ", You're invited to a dinner gathering filled with great food and even better company. It would be such a great honor to host you."));
}
console.log();
console.log("17.Shrinking Guest List:");
console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");
while (people.length > 2) {
    var removedGuest = people.pop();
    console.log("Sorry, ".concat(removedGuest, ", but we can no longer invite you to dinner."));
}
for (var _f = 0, people_4 = people; _f < people_4.length; _f++) {
    var guest = people_4[_f];
    console.log("Dear ".concat(guest, ", you are still invited to dinner. We look forward to seeing you."));
}
people.pop();
people.pop();
console.log(people);
console.log();
console.log("18.Seeing The World:");
var places = ["Berlin", "Ottawa", "Paris", "Sydney", "Toronto"];
console.log("Original Order:", places);
var sortedPlaces = places.slice().sort();
console.log("Alphabetical Order:", sortedPlaces);
console.log("Original Order:", places);
var reverseSortedPlaces = places.slice().sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", reverseSortedPlaces);
console.log("Original Order:", places);
places.reverse();
console.log("Reversed Order:", places);
places.reverse();
console.log("Original Order:", places);
places.sort();
console.log("Alphabetical Order:", places);
var reverseSortedPlaces4 = places.slice().sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", reverseSortedPlaces);
console.log();
console.log("19. Dinner Guests");
var numberOfGuests = people.length;
console.log("You are inviting ".concat(numberOfGuests, " people to dinner."));
console.log();
console.log("20.Countries:");
var countries = ["Australia", "Saudia Arabia", "France", "England", "Italy", "Norway"];
console.log("List of Countries:");
for (var _g = 0, countries_1 = countries; _g < countries_1.length; _g++) {
    var country = countries_1[_g];
    console.log(country);
}
console.log();
console.log("21. Information about Nowels:");
var nowels = [
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
for (var _h = 0, nowels_1 = nowels; _h < nowels_1.length; _h++) {
    var nowel = nowels_1[_h];
    console.log("Title: ".concat(nowel.title));
    console.log("Author: ".concat(nowel.author));
    console.log("Year: ".concat(nowel.year));
    console.log("Genre: ".concat(nowel.genre));
    console.log("------------------------");
}
console.log();
console.log("22. Intentional Error:");
var books = ["Rich dad and Poor dad", "Think and Gow Rich", "The Alcamist"];
// Intentional index error
console.log(books[5]);
// Corrected program
console.log("List of Books:");
for (var _j = 0, books_1 = books; _j < books_1.length; _j++) {
    var book = books_1[_j];
    console.log(book);
}
console.log();
console.log("23. Conditional Tests:");
var car = 'subaru';
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
console.log("24. More Conditional Tests:");
var car1 = 'subaru';
var age = 6;
var fruits = ['mango', 'orange', 'kiwi'];
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
console.log("25.Alien Color#1:");
var alein_color9 = 'green';
if (alein_color9 === 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
var alein_color2 = 'red';
if (alein_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
console.log();
console.log("26.Alien Colors#2:");
var alein_color4 = 'green';
if (alein_color4 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations You just earned 10 points.");
}
var alein_color3 = 'red';
if (alein_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
console.log();
console.log("27. Alien Colors#3:");
var alien_color6 = 'green';
if (alien_color6 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color6 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color6 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
var alien_color5 = 'yellow';
if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color5 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
var alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
console.log();
console.log("28. Stages of Life:");
var age1 = 12;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
console.log();
console.log("29. Favorite fruit:");
var favorite_fruits = ['kiwi', 'banana', 'avacado'];
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
var usernames = ['admin', 'Eric', 'Mark', 'Bill', 'Ben'];
for (var _k = 0, usernames_1 = usernames; _k < usernames_1.length; _k++) {
    var username = usernames_1[_k];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
console.log();
console.log("31. No Users:");
var usernames6 = ['admin', 'Eric', 'Mark', 'Bill', 'Ben'];
if (usernames6.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _l = 0, usernames6_1 = usernames6; _l < usernames6_1.length; _l++) {
        var username = usernames6_1[_l];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Empty the usernames array
usernames6 = [];
if (usernames6.length === 0) {
    console.log("We need to find some users!");
}
console.log();
console.log("32. Checking Usernames:");
var current_users = ['John', 'Bella', 'Dua', 'Sarah', 'Stanley'];
var new_users = ['Eric', 'John', 'Mia', 'Sarah', 'Ana'];
for (var _m = 0, new_users_1 = new_users; _m < new_users_1.length; _m++) {
    var new_username = new_users_1[_m];
    var usernameTaken = false;
    for (var _o = 0, current_users_1 = current_users; _o < current_users_1.length; _o++) {
        var current_username = current_users_1[_o];
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log("The username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
}
console.log();
console.log("33. Ordinal Numbers:");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _p = 0, numbers_1 = numbers; _p < numbers_1.length; _p++) {
    var number = numbers_1[_p];
    var ordinal = '';
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(number).concat(ordinal));
}
console.log();
console.log("34. Pizzas:");
var favorite_pizzas = ['pepperoni', 'Vegetarian', 'BBQ chicken'];
for (var _q = 0, favorite_pizzas_1 = favorite_pizzas; _q < favorite_pizzas_1.length; _q++) {
    var pizza = favorite_pizzas_1[_q];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
console.log();
console.log("35. Animals with same charcteristics:");
var animals = ['Dog', 'Cat', 'Hamster'];
for (var _r = 0, animals_1 = animals; _r < animals_1.length; _r++) {
    var animal = animals_1[_r];
    console.log(animal);
}
console.log();
for (var _s = 0, animals_2 = animals; _s < animals_2.length; _s++) {
    var animal = animals_2[_s];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log();
console.log("Any of these animals would make a great pet!");
console.log();
console.log("36. T-shirts:");
function make_shirt(size, message) {
    console.log("The T-shirt size is ".concat(size, " and it will have the message \"").concat(message, "\" printed on it."));
}
make_shirt("Medium", "Be kind");
console.log();
console.log("37. Large shirts");
function make_shirt8(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The T-shirt size is ".concat(size, " and it will have the message \"").concat(message, "\" printed on it."));
}
make_shirt8(); // Large shirt with default message
make_shirt8("medium"); // Medium shirt with default message 
make_shirt("small", "Stay positive!"); // Custom size and message
console.log();
console.log("38. Cities:");
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("London", "United Kingdom"); // City in specified country
describe_city("Paris"); // City with default country
describe_city("Sydney", "Australia"); // City in specified country
console.log();
console.log("39. Country and cities:");
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Seoul", "Korea"));
console.log(city_country("Berlin", "Germany"));
console.log();
console.log("40.Albums and Tracks:");
function make_album(artist, title, tracks) {
    var album = {
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
function show_magicians7(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["Harry Potter", "Merlin", "Gandalf", "Albus Dumbledore"];
show_magicians(magicians);
console.log();
console.log("42. Great Magicians:");
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magicians5 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicians);
show_magicians(magicians);
console.log();
console.log("43. Unchanged Magicians:");
function make_great0(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        greatMagicians.push("The Great ".concat(magician));
    }
    return greatMagicians;
}
function show_magicians2(magicians) {
    for (var _i = 0, magicians_4 = magicians; _i < magicians_4.length; _i++) {
        var magician = magicians_4[_i];
        console.log(magician);
    }
}
var magicians29 = ["John", "Alice", "Mark"];
var originalMagicians = __spreadArray([], magicians29, true);
var greatMagicians = make_great0(__spreadArray([], magicians29, true));
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
console.log();
console.log("44. Sandwiches:");
function makeSandwich(items) {
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
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };
    return car;
}
var car6 = createCar('Toyota', 'Corolla', 'Color: Red', 'Feature: Navigation');
console.log(car6);
var car2 = createCar('Ford', 'Mustang', 'Color: Blue', 'Feature: Leather Seats');
console.log(car2);
