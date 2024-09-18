# Patron Adpatador

El patrón adaptador (Adapter Pattern) en Node.js es un patrón de diseño estructural que permite que dos interfaces incompatibles trabajen juntas. Funciona como un intermediario que "adapta" una clase o módulo existente para que pueda ser utilizado por otro sistema o componente sin necesidad de modificar su código original.


Video: archivo 05-factory.js

A que se refiere el patron adaptador imaginense ustedes la dependencia de uuid lo usan en toda su aplicacion y tienen muchos build si al momento de cambiar la dependencia de terceros por otra 
sera un problema mayor ya que hay que cambiar de muchos lugar el reastro de la dependencia instalada para eso hay que aplicar un principio de arquitectura en esta caso usaremos una capa de proteccion
llamada patron adaptador no es mas que crear nuestro propio codigo que adapta una dependecia de terceros y asi nuestro codigo principal no dependa de nuestro codigo de terceros asi en caso de que la dependencia falle sea facil de remover etc.

archivo plugins/..

