## Batería de Pruebas Automatizadas App MAX

### Qué se necesita para correrla

1. **Node.js** para correr Appium y el proyecto. https://nodejs.org/en/download
1. **Appium** (el servidor que envía comandos al dispositivo) https://appium.io/docs/en/latest/quickstart/install/
1. Este repositorio (**`git clone git@github.com:rafael-mazariegos-distelsa/appium-typescript-base.git`**)
1. Las dependencias del repositorio (**`npm install`**). WebDriverIO, Appium, UIAutomator2.
1. En el **.env**, es necesario configurar la plataforma (**`PLATFORM=android`**)
1. Opcional: **Appium Inspector** para obtener los locators de elementos de la app: https://github.com/appium/appium-inspector

### Dónde está lo importante

- **.env**: Variables de entorno del proyecto.
- **wdio.conf.ts**: Configuración del WebDriverIO.
- **/test/specs**: Tests automatizados.
- **/pages**: Objetos de páginas (POM).

### Cómo correr los tests

``` npm run wdio ```

Para correr todos los tests especificados en el campo `specs` de `wdio.conf.ts`. Actualmente corre todo lo que está en /test/specs
