
function getDates() {
   const day = document.querySelector('#day').value;
   const month = document.querySelector('#month').value;
   const year = document.querySelector('#year').value;
   const years = document.querySelector('.years');
   const months = document.querySelector('.months');
   const days = document.querySelector('.days');
   const form = document.querySelector('.form');
   const button = document.querySelector('button');
   const error = document.querySelector('.error');

   let today = new Date();
   let yearCount = today.getFullYear();
   let monthCount = 1 + today.getMonth();
   let dayCount = today.getDate();
   var allMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   if (day > dayCount) {
      dayCount = dayCount + allMonths[monthCount - 1];
      monthCount = monthCount - 1;
   }

   if (month > monthCount) {
      monthCount = monthCount + 12;
      yearCount = yearCount - 1;
   }

   var m = monthCount - month;
   var d = dayCount - day;
   var y = yearCount - year;

   days.innerText = d;
   months.innerText = m;
   years.innerText = y;

   var subBtn = document.getElementById('button');
   let required = document.querySelector('.req');
   let required2 = document.querySelector('.req2');
   let required3 = document.querySelector('.req3');
   let required4 = document.querySelector('.req4');
   let required5 = document.querySelector('.req5');
   let required6 = document.querySelector('.req6');
   let alerts1 = document.querySelector('.alerts');
   let alerts2 = document.querySelector('.alerts2');
   let dateFonts = document.querySelector('.dates');
   let inputOne = document.querySelector('.input');
   let inputTwo = document.querySelector('.input2');
   let inputTre = document.querySelector('.input3');
   

   if (day === "" || month === "" || year === "") {
      dateFonts.style.color = "red";
      required.style.display = "block";
      required2.style.display = "block";
      required3.style.display = "block";
      inputOne.style.border = "1px red solid";
      inputTwo.style.border = "1px red solid";
      inputTre.style.border = "1px red solid";
      days.innerText = "- -";
      months.innerText = "- -";
      years.innerText = "- -";
      required.innerText = "This is field required";
      required2.innerText = "This is field required";
      required3.innerText = "This is field required";
   } else {
      dateFonts.style.color = "grey";
      required.style.display = "none";
      required2.style.display = "none";
      required3.style.display = "none";
      inputOne.style.border = "1px lightgrey solid";
      inputTwo.style.border = "1px lightgrey solid";
      inputTre.style.border = "1px lightgrey solid";
   }

   if (day < 0 || day > 31) {
      
      inputOne.style.border = "1px red solid";
      days.innerText = "- -";
      alerts1.style.display = "none";
      alerts2.style.display = "flex";
      required4.style.display = "block";
      dateFonts.style.color = "red";
      required4.innerText = "Must be a valid day";
   }
   if (month < 0 || month > 12) {
      
      inputTwo.style.border = "1px red solid";
      months.innerText = "- -";
      alerts1.style.display = "none";
      alerts2.style.display = "flex";
      required5.style.display = "block";
      dateFonts.style.color = "red";
      required5.innerText = "Must be a valid month";
   }
   if (year > 2024) {
      
      inputTre.style.border = "1px red solid";
      years.innerText = "- -";
      alerts1.style.display = "none";
      alerts2.style.display = "flex";
      required6.style.display = "block";
      dateFonts.style.color = "red";
      required6.innerText = "Must be in the past";
   } else {
      alerts1.style.display = "flex";
      alerts2.style.display = "none";
   }
   
};































