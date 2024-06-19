btn.addEventListener("click", () => {
    const sum = Number(input1.value) + Number(input2.value) + Number(input3.value)
    if (sum <= 10) {
        result.innerHTML = sum
    } else {
        result.innerHTML="demasiados"
    }
})