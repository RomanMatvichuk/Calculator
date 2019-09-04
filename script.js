var x = 0, y = 0, z = 0;
var input1 = document.getElementById("x");
var input2 = document.getElementById("y");
var operator = document.getElementById("operator");
var btn = document.getElementById("btn");
var resultBlock = document.getElementById("result")

function resultFunc(symb) {
    var item = document.createElement("p");
    var text = document.createTextNode(x + symb + y + " = " + z);
    item.appendChild(text);
    resultBlock.appendChild(item);
}

btn.onclick = function(){
    x = Number(input1.value);
    y = Number(input2.value);
    if (isNaN(x) || isNaN(y)){
        var item = document.createElement("p");
        var text = document.createTextNode("Det går inte utan siffror!");
        item.appendChild(text);
        resultBlock.appendChild(item);
    }
    else {
        switch (operator.value){
            case "+":
                z = x + y;
                resultFunc(" + ");
                break;
            case "-":
                z = x - y;
                resultFunc(" - ");
                break;
            case "*":
                z = x * y;
                resultFunc(" * ");
                break;
            case "/":
                z = x / y;
                resultFunc(" / ");
                break;

        }
        
    }

}
