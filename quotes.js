const inspirationalQuotes = [
  "La vita è ciò che accade mentre sei occupato a fare altri progetti. - John Lennon",
  "Il modo in cui inizi la giornata determinerà spesso il suo esito. - Stephen R. Covey",
  "Il successo non è definito da ciò che fai ogni tanto; è definito da ciò che fai ogni giorno. - Unknown",
  "Il modo migliore per predire il futuro è crearlo. - Peter Drucker",
  "Non è mai troppo tardi per essere ciò che avresti potuto essere. - George Eliot",
  "La vita è una serie di opportunità che possiamo o meno sfruttare. - Ellen Glasgow",
  "Fai del tuo meglio e dimentica il resto. - Tony Horton",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  return inspirationalQuotes[randomIndex];
}

module.exports = { getRandomQuote };
