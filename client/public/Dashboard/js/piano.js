$(document).ready(function () {
    //audio downloaded from http://theremin.music.uiowa.edu/MISpiano.html
    
    const c4= new Audio("../sounds/01_C4")
    const db4 = new Audio("../sounds/02_Db4.wav")
    const d4 = new Audio("../sounds/03_D4.wav")
    const eb4 = new Audio("../sounds/04_Eb4.wav")
    const e4 = new Audio("../sounds/05_E4.wav")
    const f4 = new Audio("../sounds/06_F4.wav")
    const gb4 = new Audio("../sounds/07_Gb4.wav")
    const g4 = new Audio("../sounds/08_G4.wav")
    const ab4 = new Audio("../sounds/09_Ab4.wav")
    const a4 = new Audio("../sounds/10_A4.wav")
    const bb4 = new Audio("../sounds/11_Bb4.wav")
    const b4 = new Audio("../sounds/12_B4.wav")
    const c5 = new Audio("../sounds/13_C5.wav")
    const db5 = new Audio("../sounds/14_Db5.wav")
    const d5 = new Audio("../sounds/15_D5.wav")
    const eb5 = new Audio("../sounds/16_Eb5.wav")
    const e5 = new Audio("../sounds/17_E5.wav")
    const f5 = new Audio("../sounds/18_F5.wav")

    c4.preload
    
    
       $(document).keydown(function (e) {
           if (e.keyCode === 65) {
               console.log("key code captured")
               $("#A").css("background-color", "cyan")
               c4.preload
               c4.play()
           }
           else if (e.keyCode === 83) {
               console.log("key code captured")
               $("#S").css("background-color", "cyan")
               d4.play()
           }
           else if (e.keyCode === 68) {
               console.log("key code captured")
               $("#D").css("background-color", "cyan")
               e4.play()
           }
           else if (e.keyCode === 70) {
               console.log("key code captured")
               $("#F").css("background-color", "cyan")
               f4.play()
           }
           else if (e.keyCode === 71) {
               console.log("key code captured")
               $("#G").css("background-color", "cyan")
               g4.play()
           }
           else if (e.keyCode === 72) {
               console.log("key code captured")
               $("#H").css("background-color", "cyan")
               a4.play()
           }
           else if (e.keyCode === 74) {
               console.log("key code captured")
               $("#J").css("background-color", "cyan")
               b4.play()
           }
           else if (e.keyCode === 75) {
               console.log("key code captured")
               $("#K").css("background-color", "cyan")
               c5.play()
           }
           else if (e.keyCode === 76) {
               console.log("key code captured")
               $("#L").css("background-color", "cyan")
               d5.play()
           }
           else if (e.keyCode === 186) {
               console.log("key code captured")
               $("#semi-colon").css("background-color", "cyan")
               f5.play()
           }
           else if (e.keyCode === 87) {
               console.log("key code captured")
               $("#W").css("background-color", "yellow")
               db4.play()
           }
           else if (e.keyCode === 69) {
               console.log("key code captured")
               $("#E").css("background-color", "yellow")
               eb4.play()
           }
           else if (e.keyCode === 84) {
               console.log("key code captured")
               $("#T").css("background-color", "yellow")
               gb4.play()
           }
           else if (e.keyCode === 89) {
               console.log("key code captured")
               $("#Y").css("background-color", "yellow")
               ab4.play()
           }
           else if (e.keyCode === 85) {
               console.log("key code captured")
               $("#U").css("background-color", "yellow")
               bb4.play()
           } 
           else if (e.keyCode === 79) {
               console.log("key code captured")
               $("#O").css("background-color", "yellow")
               db5.play()
           }
           else if (e.keyCode === 80) {
               console.log("key code captured")
               $("#P").css("background-color", "yellow")
               eb5.play()
    
           }
       })
    
       $(document).keyup(function (e) {
           if (e.keyCode === 65) {
               console.log("A released")
               $("#A").css("background-color", "white")
               c4.pause()
               c4.currentTime = 0
           }
           else if (e.keyCode === 83) {
               console.log("S released")
               $("#S").css("background-color", "white")
               d4.pause()
               d4.currentTime=0
    
           }
           else if (e.keyCode === 68) {
               console.log("D released")
               $("#D").css("background-color", "white")
               e4.pause()
               e4.currentTime=0
           }
           else if (e.keyCode === 70) {
               console.log("F released")
               $("#F").css("background-color", "white")
               f4.pause()
               f4.currentTime=0
           }
           else if (e.keyCode === 71) {
               console.log("G released")
               $("#G").css("background-color", "white")
               g4.pause()
               g4.currentTime=0
           }
           else if (e.keyCode === 72) {
               console.log("H released")
               $("#H").css("background-color", "white")
               a4.pause()
               a4.currentTime=0
           }
           else if (e.keyCode === 74) {
               console.log("J released")
               $("#J").css("background-color", "white")
               b4.pause()
               b4.currentTime=0
           }
           else if (e.keyCode === 75) {
               console.log("K released")
               $("#K").css("background-color", "white")
               c5.pause()
               c5.currentTime=0
           }
           else if (e.keyCode === 76) {
               console.log("L released")
               $("#L").css("background-color", "white")
               d5.pause()
               d5.currentTime=0
           }
           else if (e.keyCode === 186) {
               console.log("; released")
               $("#semi-colon").css("background-color", "white")
               f5.pause()
               f5.currentTime=0
           }
           else if (e.keyCode === 87) {
               console.log("W released")
               $("#W").css("background-color", "black")
               db4.pause()
               db4.currentTime=0
           }
           else if (e.keyCode === 69) {
               console.log("E released")
               $("#E").css("background-color", "black")
               eb4.pause()
               eb4.currentTime=0
           }
           else if (e.keyCode === 84) {
               console.log("T released")
               $("#T").css("background-color", "black")
               gb4.pause()
               gb4.currentTime=0
           }
           else if (e.keyCode === 89) {
               console.log("Y released")
               $("#Y").css("background-color", "black")
               ab4.pause()
               ab4.currentTime=0
           }
           else if (e.keyCode === 85) {
               console.log("U released")
               $("#U").css("background-color", "black")
               bb4.pause()
               bb4.currentTime=0
           } 
           else if (e.keyCode === 79) {
               console.log("O released")
               $("#O").css("background-color", "black")
               db5.pause()
               db5.currentTime=0
           }
           else if (e.keyCode === 80) {
               console.log("P released")
               $("#P").css("background-color", "black")
               eb5.pause()
               eb5.currentTime=0
           }
       })
    
    })