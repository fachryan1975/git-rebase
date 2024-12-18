//proses 1 (pencet, jadi alert)
// var buttons = document.querySelectorAll('button')

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click",function(){
//     alert("stipid")
//   })

// }

//proses 2(pencet,jadi music)

// var buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     const audio = new Audio("./sounds/crash.mp3");
//     audio.play()
//   });
// }

//proses 3(pencet satu button x,jadi music button x, dan yang lainnya tidak aktif)

// var buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   var attributes = document.querySelectorAll("button")[i].getAttribute("class");
//   if (attributes === "w drum") {
//     buttons[i].addEventListener("click", function () {
//       const audio = new Audio("./sounds/crash.mp3");
//       audio.play();
//     });
//   }
// }

//proses 4(pencet satu button x,jadi music button x, dan yang lainnya aktif)
// var buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   var attributes = document.querySelectorAll("button")[i].getAttribute("class");
//   if (attributes === "w drum") {
//     buttons[i].addEventListener("click", function () {
//       const audio = new Audio("./sounds/crash.mp3");
//       audio.play();
//     });
//   }else if (attributes === "a drum") {buttons[i].addEventListener("click", function () {
//     const audio = new Audio("./sounds/kick-bass.mp3");
//     audio.play();
//   });
//   }else if (attributes === "s drum") {buttons[i].addEventListener("click", function () {
//     const audio = new Audio("./sounds/snare.mp3");
//     audio.play();
//   });
//   }else if (attributes === "d drum") {buttons[i].addEventListener("click", function () {
//     const audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
//   });
//   }else if (attributes === "j drum") {buttons[i].addEventListener("click", function () {
//     const audio = new Audio("./sounds/tom-2.mp3");
//     audio.play();
//   });
//   }else if (attributes === "k drum") {buttons[i].addEventListener("click", function () {
//     const audio = new Audio("./sounds/tom-3.mp3");
//     audio.play();
//   });
//   }else if (attributes === "l drum") {buttons[i].addEventListener("click", function () {
//     const audio = new Audio("./sounds/tom-4.mp3");
//     audio.play();
//   });
//   }
// }

//proses 5(penyederhanaan function 4)
// var buttons = document.querySelectorAll("button");
// var words = ["w drum","a drum","s drum","d drum","j drum","k drum","l drum"]

// var music = [
//   "./sounds/crash.mp3",
//   "./sounds/kick-bass.mp3",
//   "./sounds/snare.mp3",
//   "./sounds/tom-1.mp3",
//   "./sounds/tom-2.mp3",
//   "./sounds/tom-3.mp3",
//   "./sounds/tom-4.mp3",
// ];

// for (let i = 0; i < buttons.length; i++) {
//   var attributes = document.querySelectorAll("button")[i].getAttribute("class");
//   if (attributes === words[i]) {buttons[i].addEventListener("click", function () {
//       const audio = new Audio(music[i]);
//       audio.play();
//     });
//   }
// }

// Proses 6(menggunakan switch statements)
// var buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     var buttonz = this.innerHTML;
//     switch (buttonz) {
//       case "w":
//         const crash = new Audio("./sounds/crash.mp3");
//         crash.play();
//         break;

//       case "a":
//         const kickBass = new Audio("./sounds/kick-bass.mp3");
//         kickBass.play();
//         break;

//       case "s":
//         const snare = new Audio("./sounds/snare.mp3");
//         snare.play();
//         break;

//       case "d":
//         const tom1 = new Audio("./sounds/tom-1.mp3");
//         tom1.play();
//         break;

//       case "j":
//         const tom2 = new Audio("./sounds/tom-2.mp3");
//         tom2.play();
//         break;

//       case "k":
//         const tom3 = new Audio("./sounds/tom-3.mp3");
//         tom3.play();
//         break;

//       case "l":
//         const tom4 = new Audio("./sounds/tom-4.mp3");
//         tom4.play();
//         break;

//       default:

//     }
//   });
// }

// proses 7(menggabungkan push button dengan keypress menggunakan switch methode)

// var buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     var buttonz = this.innerHTML;
//     switch (buttonz) {
//       case "w":
//         const crash = new Audio("./sounds/crash.mp3");
//         crash.play();
//         break;

//       case "a":
//         const kickBass = new Audio("./sounds/kick-bass.mp3");
//         kickBass.play();
//         break;

//       case "s":
//         const snare = new Audio("./sounds/snare.mp3");
//         snare.play();
//         break;

//       case "d":
//         const tom1 = new Audio("./sounds/tom-1.mp3");
//         tom1.play();
//         break;

//       case "j":
//         const tom2 = new Audio("./sounds/tom-2.mp3");
//         tom2.play();
//         break;

//       case "k":
//         const tom3 = new Audio("./sounds/tom-3.mp3");
//         tom3.play();
//         break;

//       case "l":
//         const tom4 = new Audio("./sounds/tom-4.mp3");
//         tom4.play();
//         break;

//       default:
//     }
//   });
// }

//   document.addEventListener("keypress", function (event) {
//     var keys = event.key;

//     switch (keys) {
//         case "w":
//         const crash = new Audio("./sounds/crash.mp3");
//         crash.play();
//         break;

//       case "a":
//         const kickBass = new Audio("./sounds/kick-bass.mp3");
//         kickBass.play();
//         break;

//       case "s":
//         const snare = new Audio("./sounds/snare.mp3");
//         snare.play();
//         break;

//       case "d":
//         const tom1 = new Audio("./sounds/tom-1.mp3");
//         tom1.play();
//         break;

//       case "j":
//         const tom2 = new Audio("./sounds/tom-2.mp3");
//         tom2.play();
//         break;

//       case "k":
//         const tom3 = new Audio("./sounds/tom-3.mp3");
//         tom3.play();
//         break;

//       case "l":
//         const tom4 = new Audio("./sounds/tom-4.mp3");
//         tom4.play();
//         break;

//       default:
//     }

//   });

/// proses 8(meringkas gabungan dari push dan klik)

// Detecting button press
// var buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {

//     var buttonz = this.textContent;

//     makeSound(buttonz)

//   });
// }

//Detecting keyboard press
// document.addEventListener("keypress", function (event) {
//   makeSound(event.key)
// })

// function makeSound(key) {

//    switch (key) {

//      case "w":
//        const crash = new Audio("./sounds/crash.mp3");
//        crash.play();
//        break;

//      case "a":
//        const kickBass = new Audio("./sounds/kick-bass.mp3");
//        kickBass.play();
//        break;

//      case "s":
//        const snare = new Audio("./sounds/snare.mp3");
//        snare.play();
//        break;

//      case "d":
//        const tom1 = new Audio("./sounds/tom-1.mp3");
//        tom1.play();
//        break;

//      case "j":
//        const tom2 = new Audio("./sounds/tom-2.mp3");
//        tom2.play();
//        break;

//      case "k":
//        const tom3 = new Audio("./sounds/tom-3.mp3");
//        tom3.play();
//        break;

//      case "l":
//        const tom4 = new Audio("./sounds/tom-4.mp3");
//        tom4.play();
//        break;

//      default:
//    }

// }

// proses 9 (pakai if)

//   var buttonContent = document.querySelectorAll("button")
//   var music = [
//     "./sounds/crash.mp3",
//     "./sounds/kick-bass.mp3",
//     "./sounds/snare.mp3",
//     "./sounds/tom-1.mp3",
//     "./sounds/tom-2.mp3",
//     "./sounds/tom-3.mp3",
//     "./sounds/tom-4.mp3",
//   ];

//   var words = ["w","a","s","d","j","k","l"]

//   for (let i = 0; i < buttonContent.length; i++) {
//     var textContent = buttonContent[i].textContent

//     if (textContent === words[i]) {buttonContent[i].addEventListener("click", function(){
//         var crash = new Audio(music[i]);
//         crash.play()
//     })
//     }
//   }

// document.addEventListener("keypress", function (event) {
//   var keys = event.key;

// for (let i = 0; i < buttonContent.length; i++) {
//   if (keys === words[i]) {
//     var crash = new Audio(music[i]);
//     crash.play();
//   }
// }

// })

// proses 10 (pakai if di ringkas)
// const sounds = {
//   w: "./sounds/crash.mp3",
//   a: "./sounds/kick-bass.mp3",
//   s: "./sounds/snare.mp3",
//   d: "./sounds/tom-1.mp3",
//   j: "./sounds/tom-2.mp3",
//   k: "./sounds/tom-3.mp3",
//   l: "./sounds/tom-4.mp3",
// };

// const playSound = (key) => {
//   const soundPath = sounds[key];
//   if (soundPath) {
//     const audio = new Audio(soundPath);
//     audio.play();
//   }
// };

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button, index) => {
//   button.addEventListener("click", () => playSound(button.textContent));
// });

// document.addEventListener("keypress", (event) => playSound(event.key));

//latihan 11 (PENGULANGAN)
// click

// document.querySelectorAll("button")[0].addEventListener("click",function () {
//   var crash = new Audio("./sounds/crash.mp3")
//   crash.play()
// })

// document.querySelectorAll("button")[1].addEventListener("click", function () {
//   var kickBass = new Audio("./sounds/kick-bass.mp3");
//   kickBass.play();
// });

// document.querySelectorAll("button")[2].addEventListener("click", function () {
//   var snare = new Audio("./sounds/snare.mp3");
//   snare.play();
// });

// document.querySelectorAll("button")[3].addEventListener("click", function () {
//   var tom1 = new Audio("./sounds/tom-1.mp3");
//   tom1.play();
// });

//click
// var btn = document.querySelectorAll("button")

// var music = [
//       "./sounds/crash.mp3",
//       "./sounds/kick-bass.mp3",
//       "./sounds/snare.mp3",
//       "./sounds/tom-1.mp3",
//       "./sounds/tom-2.mp3",
//       "./sounds/tom-3.mp3",
//       "./sounds/tom-4.mp3",
// ];

// var words = ["w", "a", "s", "d", "j", "k", "l"];

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     var valueClass = btn[i].textContent;
//     drumKit(valueClass);
//   });
// }

// //keyboard
// document.addEventListener("keypress",function (event) {
//   var keys = event.key
//   drumKit(keys);
// })

// function drumKit(kit) {
//   for (let i = 0; i < words.length; i++) {

//     var valueClass = btn[i].textContent;
//     if (kit === words[i]) {
//       var soundEffect = new Audio(music[i]);
//       soundEffect.play();
//     }
//   }
// }

// Latihan 12 (iseng cobain aja)

//click
// var btn = document.querySelectorAll("button")

// for (let i = 0; i < btn.length; i++) {

//  btn[i].addEventListener("click",function () {

// var content = this.textContent;
//  drumKit(content);
//  active(content);

//  })

// }

// //button
// document.addEventListener("keypress",function (event) {
//   var keys = event.key

//   drumKit(keys)
//   active(keys)

// })

// function drumKit(variable) {

//    switch (variable) {
//      case "w":
//        var crash = new Audio("./sounds/crash.mp3");
//        crash.play();
//        break;

//      case "a":
//        var kickBass = new Audio("./sounds/kick-bass.mp3");
//        kickBass.play();
//        break;

//      case "s":
//        var snare = new Audio("./sounds/snare.mp3");
//        snare.play();
//        break;

//      case "d":
//        var tom1 = new Audio("./sounds/tom-1.mp3");
//        tom1.play();
//        break;

//      case "j":
//        var tom2 = new Audio("./sounds/tom-2.mp3");
//        tom2.play();
//        break;

//      case "k":
//        var tom3 = new Audio("./sounds/tom-3.mp3");
//        tom3.play();
//        break;

//      case "l":
//        var tom4 = new Audio("./sounds/tom-4.mp3");
//        tom4.play();
//        break;

//      default:
//    }

// }

// function active(press) {
//  var activeButton = document.querySelector("."+press);
//  activeButton.classList.add("pressed")

// setTimeout(function(){
//  activeButton.classList.remove("pressed");

// }, 100);

// }

// latihan aja(repetition)

// click
var btn = document.querySelectorAll("button");
var music = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];

var words = ["w", "a", "s", "d", "j", "k", "l"];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var sound = new Audio(music[i]);
    sound.play();

    pressButtoon(btn[i]);
  });

  document.addEventListener("keypress", function (event) {
    var keys = event.key;

    if (keys === words[i]) {
      var sound = new Audio(music[i]);
      sound.play();

      pressButtoon(btn[i]);
    }
  });
}

function pressButtoon(variable) {
  variable.classList.add("pressed");

  setTimeout(function () {
    variable.classList.remove("pressed");
  }, 100);
}

document.querySelector("#title").addEventListener("click", function () {
  var hold = document.querySelector("#title");
  console.log(hold);
});
