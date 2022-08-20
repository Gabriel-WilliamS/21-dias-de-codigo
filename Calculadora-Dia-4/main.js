function calculate(type, value) {
  if (type === "action") {
    if (value === "del") {
      const deleteLastString = document
        .getElementById("result")
        .value.slice(0, -1);

      document.getElementById("result").value = deleteLastString;
    }
    if (value === "c") {
      document.getElementById("result").value = "";
    }

    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "."
    ) {
      document.getElementById("result").value += value;
    }

    if (value === "=") {
      var value_field = eval(document.getElementById("result").value);

      document.getElementById("result").value = value_field;
    }
  } else if (type === "number") {
    document.getElementById("result").value += value;
  }
}
