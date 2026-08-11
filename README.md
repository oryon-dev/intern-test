# Reto Práctico Semana 2: JavaScript y Manipulación del DOM

**Hola, José Ángel. ¡Felicidades por completar tu primer Pull Request con éxito!**

Esta semana damos el siguiente paso. Ya tenemos la estructura (HTML) y el diseño (CSS) de tu tarjeta; ahora vamos a darle vida e interactividad usando **JavaScript**.

---

## 🎯 Tu Misión para la Semana 2
Quiero que agregues un botón a tu tarjeta de presentación que, al hacerle clic, cambie los colores de toda la tarjeta a un **"Modo Oscuro"** (fondo oscuro, letras claras), y que si le vuelves a dar clic, regrese al modo claro original.

Para lograr esto, deberás investigar y aplicar los siguientes conceptos base de JavaScript:
* **Variables:** La diferencia y uso de `let` y `const`.
* **Funciones:** Cómo crear bloques de código que ejecuten acciones.
* **Selección del DOM:** Cómo atrapar un elemento de tu HTML desde tu archivo JavaScript (investiga sobre `document.querySelector`).
* **Eventos:** Cómo detectar cuándo el usuario hace clic en el botón (investiga sobre `addEventListener`).
* **Clases de CSS:** Cómo inyectarle o quitarle una clase de estilos a tu tarjeta usando JavaScript (investiga sobre `classList.toggle`).

---

## 📚 Recurso de Estudio
Para entender cómo conectar JavaScript con tu HTML de forma sencilla, te sugiero revisar este material:

- [ Introducción a la programación con JavaScript](https://www.youtube.com/watch?v=Z34BF9PCfYg)
- [Lista de reproducción - Curso de JavaScript - TodoCode](https://www.youtube.com/watch?v=x5YUu0eUc8s&list=PLQxX2eiEaqbwnzKnmqHDl0rkRvp_T7Q_W)

> Nota: Recuerda que los recusos solo son sugerencias de parte mía, puedes usar los recursos que encuentres o mas te agraden. De igual forma recuerda que no es necesario verlo de principio a fin, siempre prioriza la practica y ver lo que realmente te vaya a servir (sin olvidarte de los conceptos base).
---

## 🛠️ Instrucciones y Flujo de Trabajo

### Paso 1: Actualizar tu entorno local
Mueve tu consola a la rama principal (`main`) y asegúrate de descargar los últimos cambios aprobados usando `git pull origin main`.

### Paso 2: Crear tu nueva rama de trabajo
Crea una nueva rama específica para este reto llamada `feature/dark-mode` y muévete a ella.

### Paso 3: El Código
* Agrega la etiqueta de un botón en tu archivo `index.html`.
* Crea un nuevo archivo llamado `script.js` y enlázalo a tu HTML (usando la etiqueta `<script>`).
* **💡 Pista de arquitectura:** La forma más limpia de lograr esto no es cambiando los colores uno por uno en JS. Lo ideal es crear una clase (por ejemplo, `.dark-theme`) en tu archivo `style.css` que contenga los colores oscuros, y utilizar JavaScript únicamente para agregar o quitar esa clase de tu HTML.

### Paso 4: Registrar y Subir (Conventional Commits)
* Una vez que funcione, prepara tus archivos y crea un *commit* recordando nuestro estándar de la agencia. Por ejemplo: `feat: agrega boton y logica de modo oscuro`.
* Sube tu rama al repositorio remoto (`git push`).

### Paso 5: El Entregable (Pull Request)
Abre un nuevo **Pull Request** hacia `main`. Ponle un título claro, descríbeme brevemente en los comentarios cómo solucionaste la lógica del botón, y **asígname como revisor**. 

Cuando hayas terminado, envíame el enlace directo de tu PR por mensaje. 

¡Mucho éxito! Tómate tu tiempo para entender la lógica de la programación y avísame si la consola te marca algún error para destrabarte.