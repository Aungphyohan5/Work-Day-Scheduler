// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var today = dayjs();

$('#currentDay').text(today.format('dddd, D MMMM YYYY'))

var currentTime = today.format('H')
console.log(currentTime)

var yesterday = dayjs().isBefore(dayjs(currentTime))
console.log(yesterday)

var equal = dayjs().isSame(dayjs(currentTime))
console.log(equal)

var incoming = dayjs().isAfter(dayjs(currentTime))
console.log(incoming)



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var input9 = document.getElementById('9AM')
var input10 = document.getElementById('10AM')
var input11 = document.getElementById('11AM')
var input12 = document.getElementById('12PM')
var input1 = document.getElementById('1PM')
var input2 = document.getElementById('2PM')
var input3 = document.getElementById('3PM')
var input4 = document.getElementById('4PM')
var input5 = document.getElementById('5PM')


var saveBtn9 = document.getElementById('save-Btn9')
var saveBtn10 = document.getElementById('save-Btn10')
var saveBtn11 = document.getElementById('save-Btn11')
var saveBtn12 = document.getElementById('save-Btn12')
var saveBtn1 = document.getElementById('save-Btn1')
var saveBtn2 = document.getElementById('save-Btn2')
var saveBtn3 = document.getElementById('save-Btn3')
var saveBtn4 = document.getElementById('save-Btn4')
var saveBtn5 = document.getElementById('save-Btn5')


saveBtn9.onclick = function () {
  var userSchedule = input9.value;
  localStorage.setItem('9AM', userSchedule)
}
window.addEventListener('load', function () {
  input9.innerHTML = localStorage.getItem('9AM')
})

saveBtn10.onclick = function () {
  var userSchedule = input10.value;
  localStorage.setItem('10AM', userSchedule)
}
window.addEventListener('load', function () {
  input10.innerHTML = localStorage.getItem('10AM')
})

saveBtn11.onclick = function () {
  var userSchedule = input11.value;
  localStorage.setItem('11AM', userSchedule)
}
window.addEventListener('load', function () {
  input11.innerHTML = localStorage.getItem('11AM')
})

saveBtn12.onclick = function () {
  var userSchedule = input12.value;
  localStorage.setItem('12PM', userSchedule)
}
window.addEventListener('load', function () {
  input12.innerHTML = localStorage.getItem('12PM')
})

saveBtn1.onclick = function () {
  var userSchedule = input1.value;
  localStorage.setItem('1PM', userSchedule)
}
window.addEventListener('load', function () {
  input1.innerHTML = localStorage.getItem('1PM')
})

saveBtn2.onclick = function () {
  var userSchedule = input2.value;
  localStorage.setItem('2PM', userSchedule)
}
window.addEventListener('load', function () {
  input2.innerHTML = localStorage.getItem('2PM')
})

saveBtn3.onclick = function () {
  var userSchedule = input3.value;
  localStorage.setItem('3PM', userSchedule)
}
window.addEventListener('load', function () {
  input3.innerHTML = localStorage.getItem('3PM')
})

saveBtn4.onclick = function () {
  var userSchedule = input4.value;
  localStorage.setItem('4PM', userSchedule)
}
window.addEventListener('load', function () {
  input4.innerHTML = localStorage.getItem('4PM')
})

saveBtn5.onclick = function () {
  var userSchedule = input5.value;
  localStorage.setItem('5PM', userSchedule)
}
window.addEventListener('load', function () {
  input5.innerHTML = localStorage.getItem('5PM')
})

// var hours = dayjs().set('hour', 9).format('hA');
// console.log(hours)


// var hour = document.querySelectorAll('.hour')
// console.log(hour)


// var hour9AM = hour[0].textContent = dayjs().set('hour', 9).format('hA');
// console.log(hour[0].textContent)
// var hour10AM = hour[1].textContent = dayjs().set('hour', 10).format('hA');
// var hour11AM = hour[2].textContent = dayjs().set('hour', 11).format('hA');
// var hour12PM = hour[3].textContent = dayjs().set('hour', 12).format('hA');
// var hour1PM = hour[4].textContent = dayjs().set('hour', 13).format('hA');
// var hour2PM = hour[5].textContent = dayjs().set('hour', 14).format('hA');
// var hour3PM = hour[6].textContent = dayjs().set('hour', 15).format('hA');
// var hour4PM = hour[7].textContent = dayjs().set('hour', 16).format('hA');
// var hour5PM = hour[8].textContent = dayjs().set('hour', 17).format('hA');
// console.log(hour5PM)


// var hours = [hour9AM, hour10AM, hour11AM, hour12PM, hour1PM, hour2PM, hour3PM, hour4PM, hour5PM]
// console.log(hours)





// if (currentTime == hour10AM) {
//   $('#4PM').css("background-color", "yellow")
// }

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


console.log(currentTime)

console.log(hour9)

//color-coded for time block accroding to past,present and future.
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