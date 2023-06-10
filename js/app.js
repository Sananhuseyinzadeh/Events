let btn = document.getElementById('btn');
let sl = document.getElementById('sl')
btn.onclick = () =>{
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = document.getElementById('num2').value;

    let sum = 0;
    if (isNaN(num1) || isNaN(num2)) {
        sl.innerHTML = 'reqem daxil ele'
    }
    else {
        for ( x = num1; x <= num2; x++) {
            sum += x;
            
        }
        sl.innerHTML = sum
    }
}    

let push = document.getElementById('push');
  let y = 150;
  let z = 100;

push.onclick = () => {
    y += 50;
    z += 25;
    push.style.width = `${y}px`
    push.style.height = `${z}px`
}