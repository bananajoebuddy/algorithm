```javascript
const random = Math.floor(Math.random() * 100);
let opponentChoice;
let outcome;

for (let i = 0; i <= random; i++) {
  if (i % 3 == 0) {
    opponentChoice = "rock";
  } else if (i % 2 == 0) {
    opponentChoice = "paper";
  } else {
    opponentChoice = "scissors";
  }
}

if (opponentChoice == "rock") {
  if (input == 1) {
    outcome = "win";
  } else if (input == 2) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
} else if (opponentChoice == "paper") {
  if (input == 2) {
    outcome = "win";
  } else if (input == 0) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
} else {
  if (input == 0) {
    outcome = "win";
  } else if (input == 1) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
}
history.push(outcome);
```

This is an example of sequencing

```javascript
if (input == 0) {
  output = "rock";
} else if (input == 1) {
  output = "paper";
} else {
  output = "scissors";
}
```

This is an example of selection

```javascript
for (let i = 0; i < history.length; i++) {
  if (history[i] == "win") {
    win++;
  } else if (history[i] == "lose") {
    lose++;
  } else {
    draw++;
  }

  DOMSelectors.history.insertAdjacentHTML(
    "afterbegin",
    `<div class="historyCard" id="${history[i]}">
        <h4>Game ${i + 1}: ${history[i].toUpperCase()}</h4>
        </div>`
  );
}
```

This is an example of iteration

```javascript
function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100);
  let opponentChoice;
  let outcome;

  for (let i = 0; i <= random; i++) {
    if (i % 3 == 0) {
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }

  if (opponentChoice == "rock") {
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  }
  history.push(outcome);

  DOMSelectors.history.innerHTML = "";
  DOMSelectors.content.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${outcome}">
    <p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    </div>
    `
  );
}
```

This is an example of algorithm
