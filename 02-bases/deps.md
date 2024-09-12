https://www.npmjs.com/package/nodemon?activeTab=code

Ya que es bien tedioso estar ejecutando npm start para
ver los cambios hay una herramienta sumamente indispensable
que es nodemon etsa nos va permitir a nostros decirle a nodemon
que cuando detecte un cambio recargue la aplicacion 
para reflejar las ultimas aplicaciones de nuestro codigo
lo cual es muy util..

installacion 

npm install -g nodemon : instalando de manera global
ejecutar el comando como administrador o superUsuario

npm install --save-dev nodemon 

{npm install nodemon
no usar nodemon en producion no esta hecho para eso}

npm i -d nodemon : dependencia de desarrollo estas 
nunca llegan a producion


Como se usa:

escribir lo siguiente en package.json
en script
"dev": "nodemon (aqui el archivo de entrada en mi caso esta en src/app.js)",

/**Package.json:

npm init : instalacion de package.json

 * El archivo `package.json` es un archivo de metadatos para un proyecto de Node.js. Contiene información variada sobre el proyecto, como su nombre, versión, dependencias, scripts y más.
 * 
 * Este archivo generalmente se encuentra en el directorio raíz del proyecto y es utilizado por administradores de paquetes como npm o yarn para gestionar las dependencias y scripts del proyecto.
 * 
 * El archivo `package.json` sigue un formato JSON específico e incluye pares clave-valor que definen la configuración del proyecto. Algunos campos comúnmente utilizados en el archivo `package.json` son:
 * 
 * - `name`: El nombre del proyecto.
 * - `version`: La versión del proyecto.
 * - `description`: Una breve descripción del proyecto.
 * - `main`: El punto de entrada del proyecto.
 * - `dependencies`: Las dependencias de tiempo de ejecución del proyecto.
 * - `devDependencies`: Las dependencias de desarrollo del proyecto.
 * - `scripts`: Scripts personalizados que pueden ser ejecutados utilizando npm o yarn.
 * 
 * El archivo `package.json` es esencial para gestionar y construir proyectos de Node.js, ya que proporciona una ubicación centralizada para definir los detalles y dependencias del proyecto.
 */


Node-Modules:

Los node-modules son directorios que contienen las dependencias de un proyecto 
de Node.js. Estas dependencias son paquetes de código que se utilizan en el proyecto
 para agregar funcionalidad adicional.
Para instalar nodemon, puedes ejecutar el siguiente comando en la terminal:
npm install -g nodemon
El flag "-g" indica que se instalará de manera global, lo que significa que podrás 
utilizar nodemon en cualquier proyecto de Node.js en tu máquina.
También puedes instalar nodemon como una dependencia de desarrollo utilizando el 
siguiente comando:
npm install --save-dev nodemon
El flag "--save-dev" indica que nodemon es una dependencia de desarrollo, lo que 
significa que solo se utilizará durante el desarrollo del proyecto y no en producción.
Recuerda que nodemon es una herramienta muy útil para reiniciar automáticamente la 
aplicación cuando se detectan cambios en los archivos, lo que facilita el proceso de 
desarrollo y pruebas.
Espero que esta información te sea útil. Si tienes alguna otra pregunta, no dudes en
 preguntar.
