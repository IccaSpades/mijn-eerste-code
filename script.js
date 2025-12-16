// 1. De database met wijsheden (een 'Array')
const quotes = [
    "Programmeren is 10% schrijven en 90% begrijpen waarom het niet werkt.",
    "Fouten maken is het bewijs dat je probeert.",
    "Code is als humor. Als je het moet uitleggen, is het niet goed.",
    "De beste manier om te leren is door te bouwen.",
    "Elke expert was ooit een beginner.",
    "Slaap is ook een debugger.",
    "Het werkt op mijn machine! ¯\\_(ツ)_/¯",
    "Delete code is vaak beter dan write code."
  ];
  
  // 2. We zoeken de elementen uit je HTML
  const display = document.getElementById("quote-display");
  const button = document.getElementById("generate-btn");
  
  // 3. De functie: Wat moet er gebeuren?
  function showRandomQuote() {
    // Kies een willekeurig getal
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Pak de zin die bij dat nummer hoort
    const randomQuote = quotes[randomIndex];
    
    // Zet de tekst in het scherm
    display.textContent = randomQuote;
  }
  
  // 4. De koppeling: Luister naar een 'klik'
  button.addEventListener("click", showRandomQuote);