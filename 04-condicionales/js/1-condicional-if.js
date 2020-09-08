var edad = 17;
var sexo = "masculino";

if (edad >= 18 && sexo == "masculino") {
  console.log("Señor, ya es mayor de edad");
} else if (edad == 70 && sexo == "masculino") {
  console.log("Señor, usted es un anciano");
} else if ((edad < 18 && sexo == "masculino") || sexo == "femenino") {
  console.log("Sos menor de edad");
}
