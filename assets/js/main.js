function transfer(){
    const cardNumberValue = document.body.querySelector("#cardNumber").value;
    const cardNameValue = document.body.querySelector("#cardHolder");
    const cardDate = document.body.querySelector("#expDate");
    const cardCvv = document.body.querySelector("#cvv");
    
    const cardNumberFormatted = cardNumberValue.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');

    document.body.querySelector(".cardContainer > p").textContent = cardNumberFormatted;
    document.body.querySelector(".cardContainer div span:nth-of-type(1)").textContent = cardNameValue.value;
    document.body.querySelector(".cardContainer div span:nth-of-type(2)").textContent = cardDate.value;
    document.body.querySelector(".cvv").textContent = cardCvv.value;
}