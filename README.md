# Reto Práctico Semana 3: El Salto a Astro y Componentes

**Hola, José Ángel.** ¡Felicidades por sobrevivir a tu primera semana con JavaScript!

Ahora que ya entiendes cómo interactúan HTML, CSS y JS, vamos a modernizar tu forma de trabajar. En Oryon utilizamos **Astro** para desarrollar landings rápidas y escalables. Tu misión esta semana es aprender las bases de este framework y migrar tu tarjeta de presentación a esta nueva tecnología.

---

## 🎯 Tu Misión para la Semana 3
Quiero que reconstruyas tu tarjeta de presentación (con todo y su botón de modo oscuro), pero esta vez utilizando un proyecto inicializado en Astro y dividiendo tu código en **Componentes**.

Para lograr esto, deberás investigar y aprender lo siguiente:
* **La Terminal y Node.js:** Cómo usar el comando `npm create astro@latest` para generar la base de un proyecto.
* **Estructura de Astro:** Para qué sirve la carpeta `src/pages` y la carpeta `src/components`.
* **Componentes `.astro`:** Cómo se divide un archivo de Astro (el *Frontmatter* arriba con `---` y el *Template* HTML abajo).
* **Migración de código:** Cómo pasar tu HTML, tu CSS y tu `<script>` de JavaScript hacia adentro de un componente de Astro.

---

## 📚 Recursos de Estudio
Astro tiene una de las mejores documentaciones del mundo web. Te sugiero leer la introducción y seguir su tutorial básico:

- **[Documentación Oficial de Astro: https://docs.astro.build/es/getting-started/]**
- **[Curso de Astro de MiduDev: https://youtu.be/RB5tR_nqUEw?si=SbqVVNU85yhfyGpN]**

---

## 🛠️ Instrucciones y Flujo de Trabajo

### Paso 1: Actualizar el repositorio actual
Para mantener todo nuestro progreso en un solo lugar, usaremos el mismo repositorio de las semanas anteriores. **Ya he borrado los archivos HTML, CSS y JS de la rama `main`** para dejar el espacio limpio.
* Mueve tu consola a la rama `main` y haz un `git pull origin main` para descargar estos cambios y tener tu carpeta en blanco.

### Paso 2: Inicializar Astro y crear tu rama
* Crea una nueva rama llamada `feature/migracion-astro` y muévete a ella.
* Abre la terminal dentro de la carpeta del repositorio e inicializa el proyecto ejecutando: `npm create astro@latest .` (**nota el punto al final** para que se instale directamente en esa carpeta y no cree otra adentro). Sigue las instrucciones de la terminal (elige un proyecto vacío).

### Paso 3: Componentizar tu Tarjeta
* Dentro de la carpeta `src/components`, crea un componente llamado `Card.astro`.
* Pega ahí la estructura HTML de tu tarjeta, tus estilos CSS dentro de una etiqueta `<style>`, y la lógica de tu botón de modo oscuro dentro de una etiqueta `<script>`.
* Importa y renderiza ese componente dentro de tu página principal en `src/pages/index.astro`.

### Paso 4: Registrar y Subir (Conventional Commits)
* Revisa que el proyecto funcione en tu navegador local (usando `npm run dev`).
* Prepara tus archivos y crea tu *commit* usando nuestro estándar (ej. `feat: inicializa proyecto en astro y migra tarjeta de perfil`).
* Sube tu rama al repositorio remoto en GitHub.

### Paso 5: El Entregable (Pull Request)
Abre un nuevo **Pull Request** hacia `main`. En la descripción, cuéntame brevemente cuál fue la mayor diferencia o dificultad que notaste al trabajar con Astro en comparación con un HTML normal.

**Asígname como revisor** y envíame el enlace directo por mensaje cuando estés listo. ¡Mucho éxito!
