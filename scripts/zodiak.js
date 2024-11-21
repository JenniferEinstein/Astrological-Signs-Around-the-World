/* Plan:
1. user puts in birthday
2. program takes in the birthday
    a. adds birthday to DOM (but I can also do this from the API)
    b. sends it to API to get Hebrew birthday
        i. adds Hebrew birthday to the DOM
        ii. figures out what the Hebrew zodiac is. 
            I. adds Hebrew zodiac to the DOM.
    c. parses the year and figures out what Chinese zodiac calendar year is appropriate.
        i. puts into the DOM: year of the ANIMAL
*/

/*========== Create Variables ========*/

let bYear;
let bMonthDay;
let birthDate = bYear + "-" + bMonthDay;


//======== Creating and Selecting Elements =========

let p = document.createElement("p");
let label = document.querySelector("label");
let gregorian = document.querySelector("#gregorian");
let birthdayGrab = document.querySelector("#birthday")
let submission = document.querySelector(".form");


/*=============== Event Listener I ========
  user submits birthday */
submission.addEventListener("submit", (e) => {
  e.preventDefault();


//clear the form of any previous astrological sign
//clearZodiacSigns()  does not work at this time



/*  validateForm()

   if (birthday==="" || birthday==="mm/dd/yyyy") {
     return "Please enter a valid date of birth."
    }

   function validateForm(){
     if(document.birthday.submit.value == "" || document.birthday.submit.value == "mm/dd/yyyy") {       //has the user entered a birthday
      document.getElementById("errors").innerHTML="Please enter a valid date of birth.";       //message to display on failed validation
     }
   }


   if (document.birthdayForm.date.value == "" || submission=="mm/dd/yyyy") {
     return "Please enter a valid date of birth."
   }

*/


  let birthday = document.getElementById("birthday").value;
  bYear = birthday.slice(0, 4);
  bMonth = birthday.slice(5, 7);
  bDay = birthday.slice(8, 10);
  bMonthDay = birthday.slice(5, 10);
  birthDate = bYear + "-" + bMonthDay;


  let birthdayG="";  //starting this with an empty value

  try {
    birthdayG = bMonth + " " + bDay + ", " + bYear + ",";
    document.getElementById("birthdayG").innerHTML = birthdayG;
  } catch (error) {
    ("There has been an error before line 50");
  }

  getChineseZodiac(bYear); //calls function for Chinese Zodiak
  gregorian_sign(bDay, bMonth); //calls function for Zodiak


  console.log("birthDate", birthDate); //What is the birthDate variable?
  console.log("birthday", birthday); //What is the birthday variable?
});
//document.getElementById("birthday").value = ""
//=============Determine Gregorian Zodiac Sign==========

function gregorian_sign(bDay, bMonth) {
  let astro_sign = "";

  // checks month and date within the range of a specified zodiac
  if (bMonth == "12") {
    if (bDay < 22) astro_sign = "Sagittarius";
    else astro_sign = "Capricorn";
  } else if (bMonth == "01") {
    if (bDay < 20) astro_sign = "Capricorn";
    else astro_sign = "Aquarius";
  } else if (bMonth == "02") {
    if (bDay < 19) astro_sign = "Aquarius";
    else astro_sign = "Pisces";
  } else if (bMonth == "03") {
    if (bDay < 21) astro_sign = "Pisces";
    else astro_sign = "Aries";
  } else if (bMonth == "04") {
    if (bDay < 20) astro_sign = "Aries";
    else astro_sign = "Taurus";
  } else if (bMonth == "05") {
    if (bDay < 21) astro_sign = "Taurus";
    else astro_sign = "Gemini";
  } else if (bMonth == "06") {
    if (bDay < 21) astro_sign = "Gemini";
    else astro_sign = "Cancer";
  } else if (bMonth == "07") {
    if (bDay < 23) astro_sign = "Cancer";
    else astro_sign = "Leo";
  } else if (bMonth == "08") {
    if (bDay < 23) astro_sign = "Leo";
    else astro_sign = "Virgo";
  } else if (bMonth == "09") {
    if (bDay < 23) astro_sign = "Virgo";
    else astro_sign = "Libra";
  } else if (bMonth == "10") {
    if (bDay < 23) astro_sign = "Libra";
    else astro_sign = "Scorpio";
  } else if (bMonth == "11") {
    if (bDay < 22) astro_sign = "Scorpio";
    else astro_sign = "Sagittarius";
  }

  console.log("astro sign is", astro_sign); //this works

 document.getElementById("gregorianSpan").innerHTML =
astro_sign; 
}


//============ EVENT LISTENER HERE II ==========

//===== Get the Hebrew Date from Gregorian Date======

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(
    `https://www.hebcal.com/converter?cfg=json&date=${birthDate}&g2h=1&strict=1`,
    "Hello from the other side birthdate"
  );

  //===========ask the program to get the result============

  fetch(
    `https://www.hebcal.com/converter?cfg=json&date=${birthDate}&g2h=1&strict=1`
  ).then((response) => {
    response.json().then((hebcal) => {
      console.log("hebcal response", hebcal);

      //Display Hebrew Date
      document.getElementById(
        "birthdayH"
      ).innerHTML = `${hebcal.hm} ${hebcal.hd}, ${hebcal.hy}.`;


      // Map Gregorian month numbers to names
      const gregorianMonths = [
        "", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      // Display Gregorian Date
      const gregorianMonthName = gregorianMonths[hebcal.gm];
      document.getElementById(
        "birthdayG"
      ).innerHTML = `${gregorianMonthName} ${hebcal.gd}, ${hebcal.gy}.`;

      // Map Hebrew months to zodiac signs
      const hebrewZodiacSigns = {
        "Nisan": "Aries",
        "Iyyar": "Taurus",
        "Iyar": "Taurus",
        "Sivan": "Gemini",
        "Tammuz": "Cancer",
        "Tamuz": "Cancer",
        "Av": "Leo",
        "Elul": "Virgo",
        "Tishrei": "Libra",
        "Chesvan": "Scorpio",
        "Kislev": "Sagittarius",
        "Tevet": "Capricorn",
        "Shevat": "Aquarius",
        "Adar": "Pisces",
        "Adar II": "Pisces"
      };
      
      
      // Determine and display Hebrew zodiac sign
      const hAstroSign = hebrewZodiacSigns[hebcal.hm];
      document.getElementById("hebrewSpan").innerHTML = hAstroSign;
    }).catch(error => console.error("Error parsing JSON response:", error));
  }).catch(error => console.error("Fetch error:", error));
});




//==========Find zodiac animal of Chinese Calendar======
// this function with an array replaces a long if/else statement

function getChineseZodiac(bYear) {
  bYear = parseInt(bYear, 10); // Ensure bYear is an integer
  console.log("bYear is now a", typeof bYear);

  const zodiacAnimals = [
    "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox",
    "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"
  ];

  // Get the zodiac animal based on the remainder
  const animal = zodiacAnimals[bYear % 12];

  // Update the DOM element with the result
  document.getElementById("chineseYear").innerHTML = `the Year of the ${animal}`;
}


// ======    Find the Celtic Tree Sign ======
// Map each Celtic tree zodiac sign to its date range
const celticTreeZodiac = [
  { sign: "the Birch tree", start: "12-24", end: "01-20" },
  { sign: "the Rowan tree", start: "01-21", end: "02-17" },
  { sign: "the Ash tree", start: "02-18", end: "03-17" },
  { sign: "the Alder tree", start: "03-18", end: "04-14" },
  { sign: "the Willow tree", start: "04-15", end: "05-12" },
  { sign: "the Hawthorn tree", start: "05-13", end: "06-09" },
  { sign: "the Oak tree", start: "06-10", end: "07-07" },
  { sign: "the Holly tree", start: "07-08", end: "08-04" },
  { sign: "the Hazel tree", start: "08-05", end: "09-01" },
  { sign: "the Vine", start: "09-02", end: "09-29" },
  { sign: "Ivy", start: "09-30", end: "10-27" },
  { sign: "the Reed tree", start: "10-28", end: "11-24" },
  { sign: "the Elder tree", start: "11-25", end: "12-23" }
];

// Helper function to check if a date is within a range
function isDateInRange(monthDay, start, end) {
  if (start > end) { // range wraps around the year end
    return monthDay >= start || monthDay <= end;
  }
  return monthDay >= start && monthDay <= end;
}

// Function to determine Celtic tree zodiac sign
function getCelticTreeZodiac(bMonthDay) {
  for (let i = 0; i < celticTreeZodiac.length; i++) {
    const { sign, start, end } = celticTreeZodiac[i];
    if (isDateInRange(bMonthDay, start, end)) {
      return sign;
    }
  }
  return "Unknown";
}

// Function to determine the correct article for the Celtic tree sign
function getArticle(sign) {
  const vowels = ["A", "E", "I", "O", "U"];
  return vowels.includes(sign.charAt(0).toUpperCase()) ? "an" : "a";
}

// ==== celtic event listener =====
submission.addEventListener("submit", (e) => {
  e.preventDefault();

  let birthday = document.getElementById("birthday").value;
  bYear = birthday.slice(0, 4);
  bMonthDay = birthday.slice(5, 10); // Format as "MM-DD"

  // Calculate Celtic tree zodiac and update the DOM
  const celticSign = getCelticTreeZodiac(bMonthDay);
  //const article = getArticle(celticSign);

  document.getElementById("celticSpan").innerHTML = `${celticSign}`;

});



function clearZodiacSigns(){
  document.getElementById("gregorianSign").innerHTML = "";
  document.getElementById("gregorianSpan").innerHTML = "";
  document.getElementById("hebrewSign").innerHTML = "";
  document.getElementById("hebrewSpan").innerHTML = "";
  document.getElementById("chineseSign").innerHTML = "";
  document.getElementById("chineseYear").innerHTML = "";
  document.getElementById("celticSign").innerHTML = "";
  document.getElementById("celticSpan").innerHTML = "";
}
//note: this won't work outside of a function because an error says that there is an uncaught typeError. Cannot set properties of null (inner.HTML)
//but the same thing happens when I call the function inside of event listener one. Worse, everything becones undefined except the Hebrew astrological sign. 


/* ======= didn't use =====
   function addElement() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(astro_sign);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }



/*
function leadingZeroMonth(dateMonth){
    return (dateMonth.getDate)
}

//Alternate  method: using the async keyword because the promise of the fetch was not resolving.

// document.querySelector("form").addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const response = await fetch(`https://www.hebcal.com/converter?cfg=json&date=${birthDate}&g2h=1&strict=1`)
//     const data = await response.json()
//     console.log(data)
// })

const dateFormatted = `${birthday.getYear()}-${birthday.getMonth()}-${birthday.getDate()}`

console.log(changeDateFormat('date', "MM/dd/yyyy", 'yyyy-MM-dd'))
function changeDateFormat(value, inputFormat, outputFormat) {
    let outputSplitter="-";
    let strOutputFormat = outputFormat.split(outputSplitter).map(i =>
        i.toUpperCase());
    if (strOutputFormat.length !=3) {
        strOutputFormat = outputFormat.split('-');
        outputSplitter = "-"
    }
}



document.getElementById("submit");
btn.addEventListener("click", func);
function func() {
    console.log(document.getElementById("number").value)
}
*/
