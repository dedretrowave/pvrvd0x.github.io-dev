;(function() {
    const text = ["HONEST", "PROFESSIONAL", "FRIENDLY"];

    let i = 0;
    let j = 1;
    let reverse = false;
    const interval = setInterval(type, 150);

    function type() {
        let nowText = text[i];
        document.querySelector(".header-heading__bold--type")
            .innerText = nowText.substr(0, j);

        if (j === nowText.length + 5) {
            reverse = true;
        }

        j += reverse ? -2 : 1;

        if (j <= 0) {
            j = 1;
            reverse = false;
            i++;
        }

        if (i === text.length) {
            i = 0;
        }
    }
})();