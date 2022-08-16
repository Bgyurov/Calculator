function calc() {
    const n1 = +document.getElementById('num1').value
    const n2 = +document.getElementById('num2').value
    let separator = document.getElementById('separator').value
    let result;



    switch (separator) {

        case '+':
            result = n1 + n2
            break;

        case '-':
            result = n1 - n2
            break;

        case '*':
            result = n1 * n2
            break;

        case '/':
            result = n1 / n2
            break;

        default:
            alert('Please write a separator!')
            break;
    }

    document.getElementById('sum').value = result


}