// main.js
console.log("Welcome to the Community Portal");
window.onload = () => {
  alert("Page is fully loaded!");
};
const eventName = "Music Festival";
const eventDate = "2025-06-15";
let availableSeats = 50;

console.log(`Upcoming: ${eventName} on ${eventDate}. Seats: ${availableSeats}`);
availableSeats--;
console.log(`Seat booked! Remaining seats: ${availableSeats}`);
const events = [
  { name: "Yoga Camp", date: "2025-06-01", seats: 0 },
  { name: "Coding Bootcamp", date: "2025-07-10", seats: 20 }
];

events.forEach(event => {
  if (new Date(event.date) > new Date() && event.seats > 0) {
    console.log(`Event: ${event.name}`);
  }
});

try {
  let userSeatRequest = 1;
  if (userSeatRequest > 20) throw "Too many seats!";
  console.log("Registration successful");
} catch (err) {
  console.error("Error during registration:", err);
}
function addEvent(name, category) {
  console.log(`Added: ${name} (${category})`);
}

function registerUser(name) {
  console.log(`${name} has registered`);
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

// Closure example
function categoryCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const countMusic = categoryCounter();
console.log(countMusic());
console.log(countMusic());
function Event(name, seats) {
  this.name = name;
  this.seats = seats;
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const yoga = new Event("Yoga Camp", 0);
console.log(yoga.checkAvailability());

console.log(Object.entries(yoga));
let eventsList = ["Concert", "Cooking Workshop"];
eventsList.push("Art Class");

const musicEvents = eventsList.filter(e => e.includes("Concert"));

const displayCards = eventsList.map(e => `Event: ${e}`);
console.log(displayCards);
const container = document.querySelector("#eventList");

const newCard = document.createElement("div");
newCard.textContent = "Community Yoga";
newCard.className = "eventCard";

container.appendChild(newCard);
document.getElementById("registerBtn").onclick = () => {
  alert("Registered!");
};

document.getElementById("categorySelect").onchange = function () {
  console.log("Selected:", this.value);
};

document.getElementById("searchBox").addEventListener("keydown", function (e) {
  console.log("You typed:", e.key);
});
// Using Fetch
fetch("events.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function loadEvents() {
  try {
    document.getElementById("loading").style.display = "block";
    const res = await fetch("events.json");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Failed to load:", e);
  } finally {
    document.getElementById("loading").style.display = "none";
  }
}
const event = { name: "Cooking Class", date: "2025-06-30", seats: 10 };
const { name, date } = event;

const clonedEvents = [...eventsList];

function greet(user = "Guest") {
  console.log(`Hello, ${user}`);
}
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.elements["name"].value;
  const email = this.elements["email"].value;
  if (!name || !email) {
    alert("Please fill all fields");
    return;
  }
  console.log("Registered:", name, email);
});
function registerUser(data) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(json => {
      console.log("Submitted:", json);
      alert("Successfully registered!");
    })
    .catch(err => alert("Failed"));
}
setTimeout(() => registerUser({ name: "Anna", event: "Dance Class" }), 2000);
console.log("Form submitted");
console.log("Payload:", { name, email });
$('#registerBtn').click(() => alert("Registered via jQuery"));
$('.eventCard').fadeOut(1000);
