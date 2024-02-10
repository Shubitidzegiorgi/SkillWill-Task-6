// Task 1

/*
შექმენი button, რომელზე დაწკაპების
შემდეგაც გაიხსნება მოდალი და მოდალის
უკან შავი/გამჭვირვალე background
*/

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

//close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});