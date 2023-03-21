// fetch('https://restcountries.com/v2/name/georgia')
// .then(response => response.json())
// .then(data => {
// console.log(data);
// });



// const result = document.querySelector("#result")
// const obj = {
//     0: 0,
//     A: 11,
//     10: 10,
//     K: 4,
//     D: 3,
//     J: 2
// }
// btn.addEventListener('click', () => {
//     const inputedString = document.querySelector('#input').value;
//    const array = inputedString.split(' ');
//    let score = 0;
//    for(const element of array) {
//     if(!obj[element]) {
//     alert('bruh');
//     setTimeout(() => {
//         window.location.href = "https://www.youtube.com/shorts/qNJRXqaDrdU"
//         }, 3000)
//     }
//     score += obj[element];
//    }
//    if (score < 31) result.innerHTML = `Oops, you lose :( your score: ${score}`;
//    else if (score > 31) result.innerHTML = `Congrats, you won! your score is: ${score}`;
//    else result.innerHTML = score;
// });

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const img = document.querySelector("img");
const p = document.querySelectorAll("p");
const select = document.querySelector("select");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
        getAndRenderDataFromApi();
  }
});
btn.addEventListener("click", () => {
  getAndRenderDataFromApi();
});
function getAndRenderDataFromApi() {
  const inputedValue = document.querySelector("#input").value;
  if (inputedValue === "russia") alert("fuck you");
  else {
    fetch(`https://restcountries.com/v2/name/${inputedValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status && data.status === 404) {
          input.style.color = "red";
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong country, Try again",
          });
        } else {
          select.addEventListener("change", () => {
            dataInput(data[0]);
          });
          dataInput(data[0]);
        }
      });
  }
};
function dataInput(data) {
  img.setAttribute("src", data.flags.png);
  if (select.value === "Georgian") {
    p[0].innerHTML = `სახელი: ${data.name}`;
    p[1].innerHTML = `დედაქალაქი: ${data.capital}`;
    p[2].innerHTML = `რეგიონი: ${data.region}`;
    p[3].innerHTML = `მოსახლეობა: ${data.population}`;
  } else {
    p[0].innerHTML = `name: ${data.name}`;
    p[1].innerHTML = `capital: ${data.capital}`;
    p[2].innerHTML = `region: ${data.region}`;
    p[3].innerHTML = `population: ${data.population}`;
  }
}
