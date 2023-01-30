
        function somar() {
            var tn1 = document.getElementById('txtn1')
        var tn2 = document.getElementById('txtn2')
        var res = document.getElementById('res')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var s = n1 + n2
            res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
        }

        function multiplicar() {
            var tn3 = document.getElementById('txtn3')
            var tn4 = document.getElementById('txtn4')
            var mult = document.getElementById('mult')
            var n3 = Number(tn3.value)
            var n4 = Number(tn4.value)
            var m = n3 * n4
            mult.innerHTML = `A multiplicação entre ${n3} e ${n4} é igual a <strong>${m}</strong>`
        }

        function dividir() {
            var tn5 = document.getElementById('txtn5')
            var tn6 = document.getElementById('txtn6')
            var divi = document.getElementById('divi')
            var n5 = Number(tn5.value)
            var n6 = Number(tn6.value)
            var d = n5 / n6
            divi.innerHTML = `A divisão entre ${n5} e ${n6} é igual a <strong>${d}</strong>`
        }
         