val = []
maior_val = ''
menor_val = 101
soma = 0

function adicionar() {
    txtnum = document.querySelector("#txtnum")
    num = Number(txtnum.value)
    txtnum.value = ''
    sel = document.querySelector("#sel")
    
    if (num < 1 || num > 100 || num == null) {
        alert("Valor fora dos padrões, tente novamente!")
        window.location.reload()
    } else {
        val.push(num)
        item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        sel.appendChild(item)
    }
    if (num > maior_val) {
        maior_val = num
    }
    if (num < menor_val) {
        menor_val = num
    }
}

function finalizar() { 
    res.innerHTML = `<p>Ao todo temos <strong>${val.length}</strong> números cadastrados</p><br>`
    res.innerHTML += `<p>O maior valor informado foi <strong>${maior_val}</strong></p><br>`
    res.innerHTML += `<p>O menor valor informado foi <strong>${menor_val}</strong></p><br>`
    for (let i = 0; i < val.length; i++) {
        soma += val[i]
    }
    res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong></p><br>`
    media = (soma/val.length)
    res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong></p><br>`
}