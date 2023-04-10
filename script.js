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

function ex6() {
  let number1 = Number(document.getElementById("number1").value)
  let number2 = Number(document.getElementById("number2").value)

  let comissao = number2 * 0.04
  let result6 = number1 + comissao

  alert(
    "A comissão do funcionário é de R$ " +
      comissao +
      " ,logo seu salário final é de R$ " +
      result6
  )
}

function ex7() {
  let weight = Number(document.getElementById("weight").value)

  let more = weight * 0.15
  let less = weight * 0.2

  let resultmore7 = weight + more
  let resultless7 = weight - less

  alert(
    "Seu peso caso engorde 15% é de " +
      resultmore7 +
      " kg, e seu peso caso emagreça 20% é de " +
      resultless7 +
      " kg."
  )
}

function ex8() {
  let weight1 = Number(document.getElementById("weight1").value)

  let result8 = weight1 * 1000

  alert("O seu peso em gramas é de: " + result8 + " g.")
}

function ex9() {
  let bb = Number(document.getElementById("bb").value)
  let mb = Number(document.getElementById("mb").value)
  let height = Number(document.getElementById("height").value)

  let result9 = ((bb + mb) * height) / 2

  alert("A área do trapézio é: " + result9)
}

function ex10() {
  let side = Number(document.getElementById("side").value)

  let result10 = side * side

  alert("A área do quadrado é: " + result10)
}

function ex11(){

  let salary= Number(document.getElementById("salary").value)
  let increase
  let fsalary

  if (salary <= 300) {
    increase = salary * 0.15
    fsalary = salary + increase
  } else if ((salary > 300) && (salary <= 600)) {
    increase = salary * 0.1
    fsalary = salary + increase
  } else if ((salary > 600) && (salary <= 900)) {
    increase = salary * 0.05
    fsalary = salary + increase
  }else{

    increase = salary * 0
    fsalary = salary + increase
  }

document.getElementById("fsalary").innerHTML = "O salário final é de R$ " + fsalary

}
