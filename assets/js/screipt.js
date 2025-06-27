let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >= 0 && hours <12){
        speak("Good Moarning")
    }
    else if(hours >=12 && hours < 16){
        speak("Good afternoon Sir")
    }
    else {
        speak("Good Evening chiatti")
    }
}
window.addEventListener('load',()=>{
  //  wishMe()
})
let SpeechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition
let recognition = new SpeechRecognition()
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerHTML = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})
function takeCommand(command){
    btn.style.display = "flex"
    voice.style.display = "none"
    command = command.toLowerCase()
    if(command.includes("hello")){
        speak("Hello Sir, How can I help you")
    }
    else if(command.includes("who are you")){
    speak("I am chitti your personal assistant, created by your Ram Asare sir")
    }
    else if(command.includes("how are you")){
        speak("I am fine sir, how are you")
    }
    else if(command.includes("what is your name")){
        speak("My name is chiatti, I am your personal assistant")
    }
    else if(command.includes("what is the time")){
        let time = new Date().toLocaleTimeString()
        speak(`The current time is ${time}`)
    }
    else if(command.includes("what is the date")){
        let date = new Date().toLocaleDateString()
        speak(`The current date is ${date}`)
    }
    else if(command.includes("open google")){
        window.open("https://www.google.com")
    }
    else if(command.includes("open youtube")){
        window.open("https://www.youtube.com")
    }
    else if(command.includes("open facebook")){
        window.open("https://www.facebook.com")
    }
    else if(command.includes("open instagram")){
        window.open("https://www.instagram.com")
    }
    else if(command.includes("open whatsapp")){
        window.open("https://web.whatsapp.com")
    }
    else if(command.includes("open twitter")){
        window.open("https://www.twitter.com")
    }
    else if(command.includes("open linkedin")){
        window.open("https://www.linkedin.com")
    }
    else{
        let finalText = "This is what i found on internet" + command.replace("search","") || ("Chitti", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${command.replace("search","")}`)
    }
}