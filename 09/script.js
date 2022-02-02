function volume(){
  let litres =  prompt("Введіть об'єм в літрах.");
  let galones = litres * 0.26417205235815;
  let metr = litres * 0.001;
  let pint = litres * 2.1133764188652;
  let barel = litres * 0.0062898107704321;

  alert(`Об'єм в галонах: ${galones} `);
  alert(`Об'єм в метрах кубічних: ${metr} `);
  alert(`Об'єм в пінтах: ${pint} `);
  alert(`Об'єм в барелах: ${barel} `);

  console.log(`Об'єм в літрах: ${litres} `);
  console.log(`Об'єм в галонах: ${galones} `);
  console.log(`Об'єм в метрах кубічних: ${metr} `);
  console.log(`Об'єм в пінтах: ${pint} `);
  console.log(`Об'єм в барелах: ${barel} `);
}

function equation(){
    let a = prompt("Введіть a: ");
    if (a == 0){
        alert("Помилка! Значення a не може дорівнювати нулю.")
    }
    else{
    let b = prompt("Введіть b: ");
    alert(`${a}x + ${b} = 0`);
    let x = -b / a;
    alert(x);
    console.log(x);
    }
}