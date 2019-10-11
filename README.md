# Taller Space Apps 2019

» 🚀👩🏽‍💻 Bienvenido al repositorio de práctica para el Bootcamp Space Apps 2019 Culiacán

## ✨ Introducción

Probablemente te encuentres aquí porque has decidido asistir al bootcamp del SpaceApps Challenge que se realizará en Culiacán el día 19 de Oct, hemos creado este repositorio 📚 con la finalidad de que no pierdas tiempo creando la estructura de tu proyecto. Al final del taller puedes llevarte una copia de este repo con tus modificaciones. 🤠

Esperamos que este taller sea de utilidad para ti.

Atte: **DevSpace**

## 📝 Requisitos

- Un editor de texto (¡VS Code funciona bien!)
- Node.JS v10+ instalado
- Git y Gitkraken
- Un navegador web

Si tienes algun problema instalando uno de los requisitos acercate con uno de los mentores con toda confianza.

## 📦 Instrucciones

Descargar el repositorio usando el botón verde de "Download repo" en la página de Github.

O si eres un valiente también puedes usar la terminal de comandos (recomendado para verte más cool 😎).

```bash
git clone https://github.com/DevSpaceMX/TallerSpaceApps2019.git
```

Una vez que se descargue el repositorio en tu computadora navega al directorio donde se encuentre y espera a instrucciones del 👨🏽‍🏫 mentor de la sesión.

Para los aventurados:

```bash
# navegar al directorio
cd TallerSpaceApps2019

# Instalar dependencias web
cd worldwind && npm install

# Hacer servidor
cd api && npm init # sigue las instrucciones
# Dependencias servidor
npm install express node-fetch body-parser --save
# Dependencias de desarrollo
npm install nodemon --save-dev
```

## Generando API para servicios de la NASA

![Web de api.nasa.gov](/ApiGov.png)
_Portal de APIs de la NASA_

Ve al siguiente enlace: <https://api.nasa.gov/> y registrate con tus datos.

![Formulario](/GenerarKey.png)

Una vez hechos estos pasos deberás de recibir un correo en tu bandeja entrada con un mensaje conteniendo tu API Key 🔑

## 🐢 Como ejecutar

Una vez instalado el proyecto y sus dependencias ahora solo falta ejecutar el cliente web y servidor

Para el cliente web y servidor solo necesitas ir al directorio de cada uno y escribir en la terminal
`npm start`

## Creditos

[Plantilla HTML Bootstrap](https://github.com/BlackrockDigital/startbootstrap)
