function transfer(){
    const cardNumberValue = document.body.querySelector("#cardNumber");
    const cardNameValue = document.body.querySelector("#cardHolder");
    const cardDate = document.body.querySelector("#expDate");
    const cardCvv = document.body.querySelector("#cvv");

    document.body.querySelector(".cardContainer > p").textContent = Number(cardNumberValue.value);
    document.body.querySelector(".cardContainer div span:nth-of-type(1)").textContent = cardNameValue.value;
    document.body.querySelector(".cardContainer div span:nth-of-type(2)").textContent = cardDate.value;
    document.body.querySelector(".cvv").textContent = cardCvv.value;
}