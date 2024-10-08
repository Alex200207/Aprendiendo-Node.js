# Pasos para usar Node con TypeScript con Nodemon
Más información - [Docs Oficiales](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

1. Instalar TypeScript y tipos de Node, como dependencia de desarrollo:
  ```bash
  npm i -D typescript @types/node
  ```
   - `npm i -D typescript @types/node`: Este comando instala TypeScript y los tipos de Node.js como dependencias de desarrollo.

2. Inicializar el archivo de configuración de TypeScript (Se puede configurar al gusto):
  ```bash
  npx tsc --init --outDir dist/ --rootDir src
  ```
   - `npx tsc --init --outDir dist/ --rootDir src`: Este comando inicializa un archivo de configuración de TypeScript y especifica los directorios de salida y raíz.

3. **Opcional** - Para transpilar el código, se puede usar este comando:
  ```bash
  npx tsc
  npx tsc --watch 
  ```
   - `npx tsc`: Este comando transpila el código TypeScript a JavaScript.
   - `npx tsc --watch`: Este comando transpila el código y sigue observando los cambios para transpilar automáticamente.

4. Configurar Nodemon y Node-TS:
  ```bash
  npm install -D ts-node nodemon
  ```
   - `npm install -D ts-node nodemon`: Este comando instala `ts-node` y `nodemon` como dependencias de desarrollo.

5. Crear archivo de configuración de Nodemon - **nodemon.json**:
  ```json
  {
    "watch": ["src"],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "npx ts-node ./src/app.ts"
  }
  ```
   - Este archivo configura `nodemon` para observar cambios en archivos `.ts` y `.js` en el directorio `src` y ejecutar `ts-node` para el archivo `app.ts`.

6. Crear script para correr en desarrollo en el **package.json**:
  ```json
  "scripts": {
    "dev": "nodemon",
    "dev:npx": "npx nodemon" // En caso de no querer instalar nodemon
  }
  ```
   - `"dev": "nodemon"`: Este script ejecuta `nodemon` para desarrollo.
   - `"dev:npx": "npx nodemon"`: Este script ejecuta `nodemon` usando `npx` sin necesidad de instalarlo globalmente.

7. Instalar rimraf (Herramienta que funciona similar al rm -f para eliminar directorios):
  ```bash
  npm install -D rimraf
  ```
   - `npm install -D rimraf`: Este comando instala `rimraf` como una dependencia de desarrollo.

8. Crear scripts en el **package.json** para construir e iniciar en producción:
  ```json
  "scripts": {
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
  }
  ```
   - `"build": "rimraf ./dist && tsc"`: Este script elimina el directorio `dist` y luego transpila el código TypeScript.
   - `"start": "npm run build && node dist/app.js"`: Este script construye el proyecto y luego ejecuta el archivo `app.js` en el directorio `dist`.
