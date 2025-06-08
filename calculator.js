let results = [];

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
    let x = prompt("Enter the first number (x):");
    if (x === null) break;

    let y = prompt("Enter the second number (y):");
    if (y === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let result;
    let num1 = parseFloat(x);
    let num2 = parseFloat(y);

    if (isNaN(num1) || isNaN(num2)) {
        result = "Invalid number input";
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                results.push(result);
                break;
            case "-":
                result = num1 - num2;
                results.push(result);
                break;
            case "*":
                result = num1 * num2;
                results.push(result);
                break;
            case "/":
                if (num2 === 0) {
                    result = "Division by zero";
                } else {
                    result = num1 / num2;
                    results.push(result);
                }
                break;
            case "%":
                result = num1 % num2;
                results.push(result);
                break;
            default:
                result = "Invalid operator";
        }
    }

    document.write(
        `<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`
    );
}

document.write("</table>");

// Summary Table (2 points)
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;

    document.write("<h2 style='text-align:center;'>Summary of Valid Results</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(
        `<tr><td>${min}</td><td>${max}</td><td>${avg.toFixed(2)}</td><td>${total}</td></tr>`
    );
    document.write("</table>");
}
