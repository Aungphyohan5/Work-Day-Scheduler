// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();

$('#currentDay').text(today.format('dddd, MMMM YYYY'))
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

