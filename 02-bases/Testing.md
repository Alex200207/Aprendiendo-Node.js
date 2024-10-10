introduccion a Pruebas Unitarias y de intergracion
Que son?

No son una perdida de tiempo...

Prueba unitarias:

Usualmente nos vamos a enfocar en hacer pequenas pruebas de manera atomamica ejplo : probar si una clase genera la instancia que necesitamos
que una funcion trabaje de la forma que nosotros queremos. esperamos un comportamiento deseado en parte minisuculas.

Intregracion:

enfocadas en como trabajan esos diferentes elementos en conjunto .


carateristicas de las pruebas

-tienen que ser faciles de escribir
-faciles de leer
-tienen que ser confiables
-rapidas
-Principalmente unitarias por que empezamos desde lo pequeno
probablemente ya todo este probado.

para lograr esto esta la terminologia AAA
o pasos 
A: Arrange (Arreglar)
A: Act (Actuar)
A: Assert (Afirmar)

Primer paso Arrange:

Preparamos el estado inicial Tomamos nuestro sujeto de prueba
-Inicializar variables
-importaciones necesarias

Act : Aplicamos estimulos
Vamos a simular metodos
-llamar metodos
-simular clicks
-realizar acciones sobre el paso anterior

Assert : Observar el comportamiento resultante

-Son los resultados esperados
-eje: Que algo cambie incremente o bien nada suceda.

mitos

-Hacen que mi aplicacion no tenga errores (falso)
-Las prueban no pueden fallar (falso)
-hacen mas lenta mi aplicacion (falso) estos archivod nunca llegan a produccion.

-Es una perdida de tiempo (falso) 
-Hay que probar todo (no) puede llevar mucho tiempo procuren realizar la 
ruta critica de su aplicacion








