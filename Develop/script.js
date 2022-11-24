
//Current day HTML line 20
var today = dayjs();

$('#currentDay').text(today.format('dddd, D MMMM YYYY'))

// Current time (hour)
var currentTime = today.format('H')
console.log('current hour is ' + currentTime)


// variable for text-input
var input9 = document.getElementById('9AM') // HTML line 36
var input10 = document.getElementById('10AM')  // HTML line 45
var input11 = document.getElementById('11AM')  // HTML line 54
var input12 = document.getElementById('12PM')  // HTML line 61
var input1 = document.getElementById('1PM')  // HTML line 68
var input2 = document.getElementById('2PM')  // HTML line 75
var input3 = document.getElementById('3PM')  // HTML line 82
var input4 = document.getElementById('4PM') // HTML line 89
var input5 = document.getElementById('5PM') // HTML line 96

// variable for saveBtn
var saveBtn9 = document.getElementById('save-Btn9') // HTML line 37
var saveBtn10 = document.getElementById('save-Btn10') // HTML line 46
var saveBtn11 = document.getElementById('save-Btn11') // HTML line 55
var saveBtn12 = document.getElementById('save-Btn12') // HTML line 62
var saveBtn1 = document.getElementById('save-Btn1') // HTML line 69
var saveBtn2 = document.getElementById('save-Btn2') // HTML line 76
var saveBtn3 = document.getElementById('save-Btn3') // HTML line 83
var saveBtn4 = document.getElementById('save-Btn4') // HTML line 90
var saveBtn5 = document.getElementById('save-Btn5') // HTML line 97


let hour9 = document.getElementById('hour-9') // 9AM
let hour10 = document.getElementById('hour-10') //10AM
let hour11 = document.getElementById('hour-11') //11AM
let hour12 = document.getElementById('hour-12') //12PM
let hour13 = document.getElementById('hour-1') //1PM
let hour14 = document.getElementById('hour-2') //2PM
let hour15 = document.getElementById('hour-3') //3PM
let hour16 = document.getElementById('hour-4') //4PM
let hour17 = document.getElementById('hour-5') //5PM

hour9 = 9
hour10 = 10
hour11 = 11
hour12 = 12
hour13 = 13
hour14 = 14
hour15 = 15
hour16 = 16
hour17 = 17

//click function for local Storage//
saveBtn9.onclick = function () {
  var userInput = input9.value;
  localStorage.setItem('9AM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input9.innerHTML = localStorage.getItem('9AM')
})

saveBtn10.onclick = function () {
  var userInput = input10.value;
  localStorage.setItem('10AM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input10.innerHTML = localStorage.getItem('10AM')
})

saveBtn11.onclick = function () {
  var userInput = input11.value;
  localStorage.setItem('11AM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input11.innerHTML = localStorage.getItem('11AM')
})

saveBtn12.onclick = function () {
  var userInput = input12.value;
  localStorage.setItem('12PM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input12.innerHTML = localStorage.getItem('12PM')
})

saveBtn1.onclick = function () {
  var userInput = input1.value;
  localStorage.setItem('1PM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input1.innerHTML = localStorage.getItem('1PM')
})

saveBtn2.onclick = function () {
  var userInput = input2.value;
  localStorage.setItem('2PM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input2.innerHTML = localStorage.getItem('2PM')
})

saveBtn3.onclick = function () {
  var userInput = input3.value;
  localStorage.setItem('3PM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input3.innerHTML = localStorage.getItem('3PM')
})

saveBtn4.onclick = function () {
  var userInput = input4.value;
  localStorage.setItem('4PM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input4.innerHTML = localStorage.getItem('4PM')
})

saveBtn5.onclick = function () {
  var userInput = input5.value;
  localStorage.setItem('5PM', userInput)
  $('#message').append('<p>Appointment added to <span>local Storage ✔️</span></p>')
}
window.addEventListener('load', function () {
  input5.innerHTML = localStorage.getItem('5PM')
})

// console.log(hour9)

//color-coded for time block accroding to past,present and future//
if (currentTime == hour9) {
  $('#9AM').css("background-color", "red")
} else if (currentTime > hour9) {
  $('#9AM').css("background-color", "grey")
} else {
  $('#9AM').css("background-color", "#77DD78")
}

if (currentTime == hour10) {
  $('#10AM').css("background-color", "red")
} else if (currentTime > hour10) {
  $('#10AM').css("background-color", "grey")
} else {
  $('#10AM').css("background-color", "#77DD78")
}

if (currentTime == hour11) {
  $('#11AM').css("background-color", "red")
} else if (currentTime > hour11) {
  $('#11AM').css("background-color", "grey")
} else {
  $('#11AM').css("background-color", "#77DD78")
}

if (currentTime == hour12) {
  $('#12PM').css("background-color", "red")
} else if (currentTime > hour12) {
  $('#12PM').css("background-color", "grey")
} else {
  $('#12PM').css("background-color", "#77DD78")
}

if (currentTime == hour13) {
  $('#1PM').css("background-color", "red")
} else if (currentTime > hour13) {
  $('#1PM').css("background-color", "grey")
} else {
  $('#1PM').css("background-color", "#77DD78")
}

if (currentTime == hour14) {
  $('#2PM').css("background-color", "red")
} else if (currentTime > hour14) {
  $('#2PM').css("background-color", "grey")
} else {
  $('#2PM').css("background-color", "#77DD78")
}

if (currentTime == hour15) {
  $('#3PM').css("background-color", "red")
} else if (currentTime > hour15) {
  $('#3PM').css("background-color", "grey")
} else {
  $('#3PM').css("background-color", "#77DD78")
}

if (currentTime == hour16) {
  $('#4PM').css("background-color", "red")
} else if (currentTime > hour16) {
  $('#4PM').css("background-color", "grey")
} else {
  $('#4PM').css("background-color", "#77DD78")
}

if (currentTime == hour17) { // 8 == 17
  $('#5PM').css("background-color", "red")
} else if (currentTime > hour17) { // 8 > 17
  $('#5PM').css("background-color", "grey")
} else {
  $('#5PM').css("background-color", "#77DD78")
}
