async function thisIsSyncFunction() {
  let result = 0;

  await fetch("https://condequiz.azurewebsites.net/data")
    .then(res => res.json())
    .then(response => {
      result = response.data;
    });
  return result;
}

const number1 = thisIsSyncFunction();
const calculation = number1 * 10;
console.log(calculatoion);


