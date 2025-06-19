const input = prompt("enters 3 the identical numbers:");
const num = Math.abs(input); // в абсолют
const validNum = String(num); // в рядок щоб потім прибрати пробіли
if (input === null) {
    alert("ok, bye");
}

else if (!validNum?.trim() || isNaN(+validNum) || !/^\d{3}$/.test(validNum)) {
        alert("error: invalid number");
      } 

else {
        const [a, b, c] = validNum.split(""); // розбиває рядок на 3 окремі символи
        if (a === b && c === b) {
          alert("the numbers " + Number(validNum) + " are identical");
        } else if (a === b || b === c || a === c) {
          alert("the numbers " + Number(validNum) + " are not all identical");
        } else {
          alert("numbers are different");
        }
      }