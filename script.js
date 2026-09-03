let theme = "Dark";

let lightDark = document.querySelector(".grid-item-17");

lightDark.addEventListener("click", () => {
    if (theme === "Light") {
        lightDark.innerText = "🌙";
        theme = "Dark";
    } else if (theme === "Dark") {
        lightDark.innerText = "🔆";
        theme = "Light";
    }
});

let Expression = document.querySelector(".Expression");
let Result = document.querySelector(".Result");

let div1 = document.querySelector(".grid-item-1");
let div2 = document.querySelector(".grid-item-2");
let div3 = document.querySelector(".grid-item-3");
let div4 = document.querySelector(".grid-item-4");
let div5 = document.querySelector(".grid-item-5");
let div6 = document.querySelector(".grid-item-6");
let div7 = document.querySelector(".grid-item-7");
let div8 = document.querySelector(".grid-item-8");
let div9 = document.querySelector(".grid-item-9");
let div10 = document.querySelector(".grid-item-10");
let div11 = document.querySelector(".grid-item-11");
let div12 = document.querySelector(".grid-item-12");
let div13 = document.querySelector(".grid-item-13");
let div14 = document.querySelector(".grid-item-14");
let div15 = document.querySelector(".grid-item-15");
let div16 = document.querySelector(".grid-item-16");
let div17 = document.querySelector(".grid-item-17");
let div18 = document.querySelector(".grid-item-18");
let div19 = document.querySelector(".grid-item-19");
let div20 = document.querySelector(".grid-item-20");

div18.addEventListener("click", () => {
    Result.value = Result.value + 0;
});
div13.addEventListener("click", () => {
    Result.value = Result.value + 1;
});
div14.addEventListener("click", () => {
    Result.value = Result.value + 2;
});
div15.addEventListener("click", () => {
    Result.value = Result.value + 3;
});
div9.addEventListener("click", () => {
    Result.value = Result.value + 4;
});
div10.addEventListener("click", () => {
    Result.value = Result.value + 5;
});
div11.addEventListener("click", () => {
    Result.value = Result.value + 6;
});
div5.addEventListener("click", () => {
    Result.value = Result.value + 7;
});
div6.addEventListener("click", () => {
    Result.value = Result.value + 8;
});
div7.addEventListener("click", () => {
    Result.value = Result.value + 9;
});
div19.addEventListener("click", () => {
    Result.value = Result.value + ".";
});

div2.addEventListener("click", () => {
    Result.value = "";
});

let previousNumber;
let currentNumber;
let operation;

div16.addEventListener("click", () => {
    if (Result.value !== "") {
        previousNumber = Number(Result.value);
        Result.value = "";
        operation = "Add";
    }
});


div12.addEventListener("click", () => {
       if (Result.value !== "") {
        previousNumber = Number(Result.value);
        Result.value = "";
        operation = "Subtract";
    }
});


div8.addEventListener("click", () => {
    if (Result.value !== "") {
        previousNumber = Number(Result.value);
        Result.value = "";
        operation = "Multiply";
    }
});


div4.addEventListener("click", () => {
    if (Result.value !== "") {
        previousNumber = Number(Result.value);
        Result.value = "";
        operation = "Divide";
    }
});

div3.addEventListener("click", () => {
      if (Result.value !== "") {
        previousNumber = Number(Result.value);
        Result.value = "";
        operation = "Percent";
    }
});

div1.addEventListener("click", () => {
    let current = Result.value;
    Result.value = current.slice(0, -1);
});

div20.addEventListener("click", () => {
    if (operation === "Add") {
        currentNumber = Number(Result.value);
        Result.value = previousNumber + Number(Result.value);
        previousNumber = Result.value;

    } else if (operation === "Subtract") {
        currentNumber = Number(Result.value);
        Result.value = previousNumber - Number(Result.value);
        previousNumber = Result.value;

    } else if (operation === "Multiply") {
                currentNumber = Number(Result.value);
        Result.value = previousNumber * Number(Result.value);
        previousNumber = Result.value;

    } else if (operation === "Divide") {
                currentNumber = Number(Result.value);
        Result.value = currentNumber === 0 ? "Error" : previousNumber / currentNumber;
        previousNumber = Result.value;

    } else if (operation === "Percent") {
        currentNumber = Number(Result.value);
        Result.value = (previousNumber * currentNumber) / 100;
        previousNumber = Result.value;
    }
});
