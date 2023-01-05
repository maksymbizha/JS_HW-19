function f(num, degree) {
    let result = 1;

    for (let i = 0; i < degree; i++) {
        result *= num;
    }

    return result;
}
alert(f(prompt(),prompt()));



