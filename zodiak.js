/* Plan:
1. user puts in birthday
2. program takes in the birthday
    a. adds birthday to DOM 
    b. sends it to API to get Hebrew birthday
        i. adds Hebrew birthday to the DOM
        ii. figures out what the Hebrew zodiac is. 
            I. adds Hebrew zodiac to the DOM.
    c. parses the year and figures out what Chinese zodiac calendar year is appropriate.
        i. puts into the DOM: year of the ANIMAL
*/

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
    bDay = birthday.slice(8,10);
    bMonthDay = birthday.slice(5,10);
    birthDate = bYear+"-"+bMonthDay;
 
    let birthdayG 
    let birthdayH
try {
    birthdayG = bMonthDay+", "+bYear
    document.getElementById("birthdayG").innerHTML(birthdayG)
} catch (error) {
    "There has been an error before line 50"    
}
    chineseYear(bYear);  //this calls the chineseYear function
    // ratYear(bYear);
    // oxYear(bYear);
    // tigerYear(bYear);


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

//===============Creating Elements============


let p = document.createElement("p")



//================== Selecting Elements ===================

let label = document.querySelector("label")

//============ EVENT LISTENER HERE!!!!==================
//=========== Get the Hebrew Date from Gregorian ==========

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

    //==========Find zodiac animal of Chinese Calender======


    function chineseYear(bYear) {  
    if (bYear === 1900 || bYear === 1912|| bYear === 1924 || bYear === 1936 || bYear === 1948 || bYear === 1960 || bYear === 1972 || bYear === 1984 || bYear === 1996 || bYear === 2008 || bYear === 2020 || bYear === 2032) {
        document.getElementById("chineseYear").innerHTML = "the Year of the Rat"
        } else if (bYear === 1901 || bYear === 1913 ||bYear === 1925 || bYear === 1937 || bYear === 1949 || bYear === 1961 || bYear === 1973 || bYear === 1985 || bYear === 1997 || bYear === 2009 || bYear === 2021 || bYear === 2033) {
            document.getElementById("chineseYear").innerHTML = "the Year of the Ox"
        } else if (bYear === 1902 || bYear === 1914 || bYear === 1926 || bYear === 1938 || bYear === 1950 || bYear === 1962 || bYear === 1974 || bYear === 1986 || bYear === 1998 || bYear === 2010 || bYear === 2022 || bYear === 2034) {
            document.getElementById("chineseYear").innerHTML = "the Year of the Tiger"
        } else if (bYear === 1903 || bYear === 1915 || bYear === 1927 || bYear === 1939 || bYear === 1951 || bYear === 1963 || bYear === 1975 || bYear === 1987 || bYear === 1999 || bYear === 2011 || bYear === 2023 || bYear === 2035) {
            document.getElementById("chineseYear").innerHTML = "the Year of the Rabbit"
        }else if (bYear === 1904 || bYear === 1916 || bYear === 1928 || bYear === 1940 || bYear === 1952 || bYear === 1964 || bYear === 1976 || bYear === 1988 || bYear === 2000 || bYear === 2012 || bYear === 2024 || bYear === 2036) {
            document.getElementById("chineseYear").innerHTML = "the Year of the Dragon"
        }else if (bYear === 1905 || bYear === 1917 || bYear === 1929 || bYear === 1941 || bYear === 1953 || bYear === 1965 || bYear === 1977 || bYear === 1989 || bYear === 2001 || bYear === 2013 || bYear === 2025 || bYear === 2037) {
            document.getElementById("chineseYear").innerHTML = "the Year of the Snake"
            } else if (bYear === 1906 || bYear === 1918 || bYear === 1930 || bYear === 1942 || bYear === 1954 || bYear === 1966 || bYear === 1978 ||1990 || bYear === 2002 || bYear === 2014 || bYear === 2026 || bYear === 2038) {
                document.getElementById("chineseYear").innerHTML = "the Year of the Horse"
            } else if (bYear === 1895 || bYear === 1907 || bYear === 1919 || bYear === 1931 ||1943 || bYear === 1955 || bYear === 1967 || bYear === 1979 || bYear === 1991 || bYear === 2003 || bYear === 2015 || bYear === 2027 || bYear === 2039) {
                document.getElementById("chineseYear").innerHTML = "the Year of the Goat"
            }else if (bYear === 1896 || bYear === 1908 || bYear === 1920 || bYear === 1932 || bYear === 1944 || bYear === 1956 || bYear === 1968 || bYear === 1980 || bYear === 1992 || bYear === 2004 || bYear === 2016 || bYear === 2028 || bYear === 2040) {
                document.getElementById("chineseYear").innerHTML = "the Year of the Monkey"
                    } else if (bYear === 1897 || bYear === 1909 || bYear === 1921 || bYear === 1933 ||bYear === 1945 || bYear === 1957 || bYear === 1969 || bYear === 1981 || bYear === 1993 || bYear === 2005 || bYear === 2017 || bYear === 2029 || bYear === 2041) {
                        document.getElementById("chineseYear").innerHTML = "the Year of the Rooster"
                            }else if (bYear === 1898 || bYear === 1910 || bYear === 1922 || bYear === 1934 || bYear === 1946 || bYear === 1958 || bYear === 1970 || bYear === 1982 || bYear === 1994 || bYear === 2006 || bYear === 2018 || bYear === 2030 || bYear === 2042) {
                                document.getElementById("chineseYear").innerHTML = "the Year of the Dog"
                                    }else if (bYear === 1899 || bYear === 1911 || bYear === 1923 || bYear === 1935 ||1947 || bYear === 1959 || bYear === 1971 || bYear === 1983 || bYear === 1995 || bYear === 2007 || bYear === 2019 || bYear === 2031 || bYear === 2043) {
                                        document.getElementById("chineseYear").innerHTML = "the Year of the Pig"
                                            }
}

  



//since the Chinese Zodiac is on a 12 year cycle, a function to iterate every 12 years should be helpful. It was not.

//split the birthday into the component parts. 


/*
What am I trying to do here? I want to get all the years for each Chinese Zodiac Animal. 

//=================== Gregorian Calendar ===============
//explain Gregorian Calendar. Put an I next to Gregorian and do a mouseover listener? link to somewhere for more information? I tried many ways on my own. It turns out that it was a capitalization error possibly. I found that I could use the title attribute to do this. But then I couldn't use CSS or a link.


/* =================== Footer ====


*/

/* ======= didn't use =====
 
/* ===================Grid========
let container = document.getElementById("grid");
let cell = document.createElement("div");
cell.innerText = "TEXT1";
container.appendChild(cell);
cell.innerText = "TEXT2";
container.appendChild(cell);




====footer====
this didn't really work. I could only use the br once and it was clumsy anyway.
const email = "jennifereinstein@pursuit.org"
const privacyPolicy = "/privacy.html"
const br = document.createElement("br")

footerHR.append("Author: Jennifer Einstein")
footerHR.append(br)
footerHR.append(`email`)
footerHR.append(privacyPolicy)
*/
/* ============== date formatting didn't use ==========


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
