let clase = [
    {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name : "Juan",
      grades: [90, 54, 82, 76]
    },
    {
     name : "Diego",
     grades: [100, 100, 100, 100]
    }
   
  ];
  
  let students = [...clase];
  
  let classAverage = 0;
  
  for (let i = 0; i < clase.length; i++) {
    let studentAverage = +((clase[i].grades.reduce((acumulador, item) => acumulador + item, 0) / clase[i].grades.length).toFixed(2));
    
    students[i].grades = studentAverage;
    classAverage += studentAverage;
  
    console.log(`El promedio de ${clase[i].name} es: ${studentAverage}`);
  }

  classAverage = (classAverage / clase.length).toFixed(2);
  
  console.log(`El promedio general de la clase es: ${classAverage}`);
  
  let respuesta = {"classAverage": classAverage, "students": students};
  
  return respuesta;
  