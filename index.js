function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
  return string.toLowerCase();
}
function logShout (door) {
  console.log(door.toUpperCase())
}
console.log(logShout("hello"))
//
function logWhisper (door) {
  console.log(door.toLowerCase())
};
console.log(logWhisper("HELLO"))
//
function sayHiToHeadphonedRoommate(string){
  if(string.toLowerCase()===string){
  return "I can't hear you!"
  }
let newString = string.toUpperCase()
   if (string == newString){
    return "YES INDEED!"
   }
  if (string == "Let\'s have dinner together!"){
    return "I would love to!"
  }
 }
 let answer = sayHiToHeadphonedRoommate("Let\'s have dinner together!")
 console.log(answer)


