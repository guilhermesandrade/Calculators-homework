function ex1() {
  let n1 = Number(document.getElementById("n1").value)
  let n2 = Number(document.getElementById("n2").value)

  let result = n1 - n2

  alert("O resultado foi de: " + result)
}

function ex2() {
  let nu1 = Number(document.getElementById("nu1").value)
  let nu2 = Number(document.getElementById("nu2").value)
  let nu3 = Number(document.getElementById("nu3").value)

  let result2 = nu1 * nu2 * nu3

  alert("A multiplicação dos número resulta em: " + result2)
}

function ex3() {
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)

  if (num2 == 0) {
    alert("Divisor inválido!")
  } else {
    let result3 = num1 / num2

    alert("A divisão resulta em: " + result3)
  }
}

function ex4() {
  let numb1 = Number(document.getElementById("numb1").value)
  let numb2 = Number(document.getElementById("numb2").value)

  let result4 = (numb1 * 2 + numb2 * 3) / 5

  alert("A média Ponderada das notas foi de: " + result4)
}

function ex5() {
  let numbe1 = Number(document.getElementById("numbe1").value)

  let desconto = numbe1 * 0.1
  let result5 = numbe1 - desconto

  alert("O novo preço é de: R$" + result5)
}

function ex6() {}

function ex7() {}
