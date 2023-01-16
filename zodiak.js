
//function changeDateFormat(date){}

//Challenge: When I first tried this method, I didn't get leading zeroes, so I went back and added that to the month and day when necessary.
//Challenge: for some reason, my month is one less than it should be. Apparently, this is a known issues since the months are base 10 and start at 0. I will add one.
//Challenge. I cannot use the variable outside of the function. Changing let to var didn't work. Eventually used globalThis.


// const birthday = new Date('1/01/1973') //why does this work?


let bYear
let bMonthDay 
let birthDate = bYear+"-"+bMonthDay
let birthday 

let submission = document.querySelector(".form")

submission.addEventListener("submit",(e) => {
    e.preventDefault();
    birthday = document.getElementById("birthday").value;
    bYear = birthday.slice(0,4);
    bMonth = birthday.slice(5,7);
    bDay = birthday.slice(8,10)
    bMonthDay = birthday.slice(5,10)
    birthDate = bYear+"-"+bMonthDay
 
    chineseYear(bYear)

console.log(bYear)  //what will the year be defined as?
console.log("month",bMonth)  //what will the month be defined as?
console.log("day", bDay)  //what will the day be defined as?
console.log("birthDate", birthDate)  //What is the birthDate variable?
console.log("birthday", birthday)  //What is the birthday variable?
})



//==================Determine Gregorian Zodiac Sign==========

// const daysGZ=[21,]
// const signsGZ=["Aries"]

// JavaScript program to display astrological sign
// or Zodiac sign for given date of birth
 
// Function to calculate sum
// digits of n
function zodiac_sign(day, month)
    {
        let astro_sign="";
           
        // checks month and date within the
        // valid range of a specified zodiac
        if (month == "december"){
               
            if (day < 22)
            astro_sign = "Sagittarius";
            else
            astro_sign ="capricorn";
        }
               
        else if (month == "january"){
            if (day < 20)
            astro_sign = "Capricorn";
            else
            astro_sign = "aquarius";
        }
               
        else if (month == "february"){
            if (day < 19)
            astro_sign = "Aquarius";
            else
            astro_sign = "pisces";
        }
               
        else if(month == "march"){
            if (day < 21)
            astro_sign = "Pisces";
            else
            astro_sign = "aries";
        }
        else if (month == "april"){
            if (day < 20)
            astro_sign = "Aries";
            else
            astro_sign = "taurus";
        }
               
        else if (month == "may"){
            if (day < 21)
            astro_sign = "Taurus";
            else
            astro_sign = "gemini";
        }
               
        else if( month == "june"){
            if (day < 21)
            astro_sign = "Gemini";
            else
            astro_sign = "cancer";   }
               
            else if (month == "july"){
                if (day < 23)
                astro_sign = "Cancer";
                else
                astro_sign = "leo";
            }
                   
            else if( month == "august"){
                if (day < 23)
                astro_sign = "Leo";
                else
                astro_sign = "virgo";
            }
                   
            else if (month == "september"){
                if (day < 23)
                astro_sign = "Virgo";
                else
                astro_sign = "libra";
            }
                   
            else if (month == "october"){
                if (day < 23)
                astro_sign = "Libra";
                else
                astro_sign = "scorpio";
            }
                   
            else if (month == "november"){
                if (day < 22)
                astro_sign = "scorpio";
                else
                astro_sign = "sagittarius";
            }
                   
            document.write(astro_sign);
        }

//===============Creating Elements===================================


let p = document.createElement("p")

//===================Grid========
let container = document.getElementById("grid");
let cell = document.createElement("div");
cell.innerText = "TEXT1";
container.appendChild(cell);
cell.innerText = "TEXT2";
container.appendChild(cell);
cell.innerText = "TEXT3";
container.appendChild(cell);
cell.innerText = "TEXT4";
container.appendChild(cell);
cell.innerText = "TEXT5";
container.appendChild(cell);



//==================Selecting Elements================================

let label = document.querySelector("label")

///============EVENT LISTENER HERE!!!!=========================

//===================Get the Hebrew Date from Gregorian==========

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`https://www.hebcal.com/converter?cfg=json&date=${birthDate}&g2h=1&strict=1`,"Hello from the other side birthdate");

    // console.log(`https://www.hebcal.com/converter?cfg=json&date=${document.querySelector("#birthday").value}&g2h=1&strict=1`,"Hello from the other side birthday");


//===========ask the program to get the result============

    fetch(`https://www.hebcal.com/converter?cfg=json&date=${birthDate}&g2h=1&strict=1`)
    .then((response) => {     
// Take the result and do something with it.

        console.log("Fetch was successful!");
        const answer =  response.json() //returns result, translated by JSON
        .then((response) => {
                console.log(response)
        }
        )
      });

} )



//Alternate  method: using the async keyword because the promise of the fetch was not resolving.

// document.querySelector("form").addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const response = await fetch(`https://www.hebcal.com/converter?cfg=json&date=${birthDate}&g2h=1&strict=1`)
//     const data = await response.json()
//     console.log(data)
// })

    //==================Find zodiac animal of Hebrew Date==========


function chineseYear(bYear) {
    if (bYear === 1900 | 1912| 1924 | 1936 | 1948 | 1960 | 1972 | 1984 | 1996 | 2008 | 2020 | 2032) {
        document.getElementById("cYear").innerHTML = "the Year of the Rat"
    } else if (bYear === 1901 |1913 |1925 |1937 | 1949| 1961 | 1973 |1985 | 1997 | 2009 | 2021 | 2033) {
        document.getElementById("cYear").innerHTML = "the Year of the Ox"
    }


}

//since the Chinese Zodiac is on a 12 year cycle, a function to iterate every 12 years should be helpful

//split the birthday into the component parts. 


function plusTwelve (year){
    for (let i=year; i<2100; i++){
        year+=12
    }
}
/*
What am I trying to do here? I want to get all the years for each Chinese Zodiac Animal. 

// if (year = 1900 
const rat = 
// const ox =
// const tiger =
// const rabbit=
// const dragon=
// const snake=
// const horse=
// const sheep=
// const monkey=
// const rooster=
// const dog=
// const pig=
*/


//===================Gregorian Calendar===============================
//explain Gregorian Calendar. Put an I next to Gregorian and do a mouseover listener? link to somewhere for more information? I tried many ways on my own. It turns out that it was a capitalization error possibly. I found that I could use the title attribute to do this. But then I couldn't use CSS or a link.


/* =======didn't use=====
 

*/
/* ==============date formatting didn't use=================


/*
   console.log(birthday.getFullYear) //is not a Function at HTMLFormElement.<Anonymous.
   y=document.getElementById("birthday").value.getFullYear();//is not a Function at HTMLFormElement.<Anonymous.
   console.log(y)



*/

    // const x = new Date()  //this gives the current date
    // document.getElementById("birthday").innerHTML=x.getFullYear();
    // console.log("x",x)
   

    // let dateMonth = 1+(birthday.getMonth()); console.log("first instance of month",dateMonth)
    // p=document.createElement(p).value("dateMonth");
    // if(dateMonth<10){dateMonth = `0${dateMonth}`}; 
    // console.log("month", dateMonth);

    // let dateDay = birthday.getDate(); 
    // if(dateDay<10){dateDay = `0${dateDay}`}; 
    // console.log("day", dateDay);

    // const dateYear = birthday.getYear(); console.log("year", dateYear);
    // const dateFormatted = dateYear+"-"+dateMonth+"-"+dateDay; console.log("date",dateFormatted)

/*
function leadingZeroMonth(dateMonth){
    return (dateMonth.getDate)
}

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

const dte = new Date();
const simpleDateFormatter  = new simpleDateFormatter(yyyy-MM-dd);
simpleDateFormatter.format(dte)
try {
    date = sdfSource.parse(dateTime);
} catch (parseException e) {
    e.printStackTrace();
}
return sdfDestination.format(date)


document.getElementById("submit");
btn.addEventListener("click", func);
function func() {
    console.log(document.getElementById("number").value)
}
*/

/*  ===========Mouseover didn't use================



// const gregorian = document.getElementById("gregorian")
// gregorian.addEventListener("mouseover",(e) => {
//     e.preventDefault();
//     alert("mouse over text")
//     e.target.innerText = "test this"
// })

// function mouseover(){
//     document.getElementById("gregorian").style.color = "red"
// }


class="hovertext01" data-hover="This is the data hover. See if i like it better."

*/
