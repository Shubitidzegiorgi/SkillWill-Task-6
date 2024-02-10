// Task 2

/*
შექმენი input და button
● input-ში მომხმარებელი ჩაწერს ფერს და
button ღილაკზე დაწკაპების შემდეგ body-ს
background შეიცვლება ჩაწერილ ფერად
● (ფერები რომლის ჩაწერაც შეუძლია: red,
blue, green, black, white)
● თუ სხვა ფერი ჩაწერა, გამოუტანე
შეტყობინება alert-ის საშუალებით
*/

function changeBackgroundColor() {
    let colorInput = document.getElementById("colorInput").value.toLowerCase();

    let allowedColors = ["red", "blue", "green", "black", "white"];

    if (allowedColors.includes(colorInput)) {
        document.body.style.backgroundColor = colorInput;
    } else {
        alert("You can only enter: red, blue, green, black, or white.");
    }
}

let changeColorBtn = document.getElementById("changeColorBtn");

changeColorBtn.addEventListener("click", changeBackgroundColor);

