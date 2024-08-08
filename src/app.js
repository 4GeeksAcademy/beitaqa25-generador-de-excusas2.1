let parts = {
  who: ["The dog", "My grandma", "The mailman", "My bird"],
  action: ["ate", "peed", "crushed", "broke"],
  what: ["my homework", "my phone", "the car"],
  when: ["before the class", "when I was sleeping", "while I was exercising","during my lunch"]
};

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomExcuse() {
  return `${getRandomElement(parts.who)} ${getRandomElement(
    parts.action
  )} ${getRandomElement(parts.what)} ${getRandomElement(parts.when)}`;
}

function displayExcuse() {
  document.getElementById("excuse").textContent = generateRandomExcuse();
}

window.onload = displayExcuse;
