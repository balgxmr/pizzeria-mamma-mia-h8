// Sirve para formatear el precio con separador de miles
// Source: https://es.stackoverflow.com/questions/312677/javascript-usar-coma-como-separador-de-miles o https://es.stackoverflow.com/a/312786
export const formatoSeparador = (number) => {
  if (typeof number !== "number" || isNaN(number)) {
    return "0"; // Devuelve "0" si el valor no es un número válido
  }
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1,";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
};
