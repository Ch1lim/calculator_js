let a = prompt("Введите первый операнд", []);
let b = prompt("Введите второй операнд", []);

if (
( a === "0" && Number(b) ) || 
Number(a) && Number(b) ||
( Number(b) && a === "0" ) ||
( a === "0" && b === "0" )
) {

    let c = prompt("Введите операцию, которую хотите совершить с операндами\nДоступны:\n+\n-\n%\n*\n/",[])
    if (c === "+") {
        alert(+a + +b);
    }else if (c === "-") {
        alert(a - b);
    }else if (c === "/") {
        let resDivision;
        resDivision = (a / b)
        if (isNaN(resDivision)){
            alert("Eror")
        }else{
            alert(resDivision)
        }
    }else if (c === "*") {
        alert(a * b);
    }else if (c === "%") {
        alert(a % b);
    }else {
        alert("Введена неверная операция, перезагрузите страницу");
    }

}else {
    alert("Error\nВведены неверный(е) операнд(ы)\nПерезагрузите страницу и попробуйте сначала)");
}


