btnPass.addEventListener("click", () => {
    const selectOne = Number(select1.value)
    const selectTwo = Number(select2.value)
    const selectThree = Number(select3.value)
    const resultPass = document.querySelector("#result-pass")
    if (selectOne === 9 && selectTwo === 1 && selectThree === 1) {
        resultPass.innerHTML = "Password 911 correcto"
    } else if (selectOne === 7 && selectTwo === 1 && selectThree === 4) {
        resultPass.innerHTML = "Password 714 correcto"
    } else {
        resultPass.innerHTML =" Password incorrecto"
    }
})