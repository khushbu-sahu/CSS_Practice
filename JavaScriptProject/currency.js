const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form  button");
const fromCurr =document.querySelector(".from select");
const toCurr =document.querySelector(".to select");

// for (code in countryList){
//     console.log(code , countryList[code]);
// }
for(let select of dropdowns){
    for (currCode in countryList){
        // console.log(code , countryList[code]);
        let newOption = document.createElement("option");
        newOption.innerText =currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode==="USD"){
        newOption.selected="selected";
        } else if(select.name === "to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change" ,(evt) =>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) =>{
    // console.log(element);
    let currCode=element.value;
    // console.log(currCode);
    let countyCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countyCode}/flat/64.png`;
   let img= element.parentElement.querySelector("img");
   img.src=newSrc;
};

btn.addEventListener("click", (evt)=>{
evt.preventDefault();
let amount = document.querySelector(".amount input");
let amtValue =amount.value;
if(amtValue === "" || amtValue < 1){
    amtValue = 1;
    amount.value = "1";
}
// console.log(amtValue);
console.log(fromCurr , toCurr);
// const URL =`$(BASE_URL)/${fromCurr}/${toCurr}.json`;

});




