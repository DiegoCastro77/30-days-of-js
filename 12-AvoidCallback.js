function runCode() {
    const strings = [];
    return doTask1()
      .then((rta1) => {
        strings.push(rta1);
        return doTask2();
      })
      .then((rta2) => {
        strings.push(rta2);
        return doTask3();
      })
      .then((rta3) => {
        strings.push(rta3);
        return strings;
      });
  }
  
  // Llama a la función runCode y muestra el resultado
  runCode()
    .then(response => console.log(response))
    .catch(error => console.error(error));