// Task 3

/*
შექმენი input, სადაც მომხმარებელს
შესაძლებლობა ექნება შეიტანოს “:”- ით
ერთმანეთისგან გამოყოფილი რიცხვები,
average ღილაკზე დაწკაპების შემდეგ
დაითვალე ამ რიცხვების საშუალო და
გამოუტანე ეკრანზე
● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს
*/

function calculateAverage() {
    let numberInput = document.getElementById("numberInput").value;

    let numbersArray = numberInput.split(":").map(Number);

    let sum = numbersArray.reduce((total, num) => {
        return total + num;
    }, 0);

    let average = sum / numbersArray.length;

    document.getElementById("averageResult").textContent = "Average: " + average.toFixed(2);
}

let calculateAverageBtn = document.getElementById("calculateAverageBtn");

calculateAverageBtn.addEventListener("click", calculateAverage);
