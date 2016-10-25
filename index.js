function shout(word) {
  return word.toUpperCase()
}


function whisper(word) {
  return word.toLowerCase()
}


function logShout(word) {
  console.log(word.toUpperCase())
}


function logWhisper(word) {
  console.log(word.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string.toUpperCase() !== string) {
    return "I can't hear you!"
  }

}
