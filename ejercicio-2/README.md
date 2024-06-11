# Leyendo y escribiendo ficheros con NodeJS

Zoom genera un archivo de asistencia con la fecha.
La información esta separada por comas, siguiendo este formato
```
Nombre (nombre original),E-mail del usuario,Duración total (minutos),Invitado
```

## Iteración 1

Modifica el fichero app.js para leer el fichero _2abril_participants_94849208356.csv_  . Muestra cada una de las líneas por pantalla

## Iteración 2

Nos han pedido que informemos de quién ha venido a clase y quién no. Fijate que cada línea que leemos es es tratada como un _string_ 

Con la ayuda del método [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), crea un mensaje para mostrar por consola un mensaje indicando la persona que ha venido a clase

Puede haber nombres similares, no te preocupes.

## Iteración 3

Añade ahora también la cantidad de minutos que ha asistido dicha estudiante.

## Iteración 4

Sigue formateando el mensaje para ahora incluir la fecha en la que ha accedido la persona

## Iteración 5

Crea un fichero nuevo donde guardes toda esta información, de nombre **informe.txt**, que debes guardar en el directorio **files**

## DIFÍCIL: Iteración 6

Automatiza este proceso para que el script _itere_ por todo el directorio _files_ y automatices la tarea.

