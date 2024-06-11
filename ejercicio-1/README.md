# JSON para almacenar datos

Según [20 minutos](https://www.20minutos.es/noticia/5458479/0/hacienda-envia-cartas-contribuyentes-alertar-posibles-errores-declaracion-renta/), hacienda enviará 80000 cartas a contribuyentes que han cometido un _error_ en la declaración de la renta. 

La ministra nos ha pedido un script para automatizar esta tarea, y dado un DNI, saber si hay que enviarle una notificación a dicho contribuyente o no.

## Iteración 1

Carga el JSON usando NodeJS, y muestra **todo** el contenido del JSON por el terminal


## Iteración 2

Modifica tu script para ahora mostrar solo el nombre de cada una de las personas de este fichero. Debes recorrer el array de objetos y mostrar solo el nombre de cada persona. 

## Iteración 3

Cambia el valor de la variable _dni_ a un dni, que exista, o no, en el fichero JSON. Muestra un mensaje por consola indicando dicha persona tiene notificaciones pendientes con hacienda o no. Mira el ejemplo.

Estas ante un reto algorítmico. Es el caso de uso de buscar un elemento en un array si cumple cierta condición. 

## Iteración 4

La ministra nos ha pedido un registro de toda esta actividad. Guarda en un fichero de nombre **notificaciones.txt** el mensaje que muestras por consola en la iteración anterior.

No debes sobreescribir el contenido del fichero si no añadir la información al final del mismo.




