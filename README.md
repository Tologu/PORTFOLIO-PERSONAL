# 🎨 Portfolio Personal - Tomas Dev

Un portfolio profesional moderno creado con **React + Vite + TypeScript** para mostrar tus proyectos como estudiante de DAW.

## 📋 Características

- ✨ Diseño moderno y responsivo
- 🎯 Secciones principales: Hero, Proyectos, Sobre mí, Contacto
- 📱 Totalmente optimizado para móviles
- ⚡ Construcción rápida con Vite
- 🔧 TypeScript para mejor experiencia de desarrollo
- 🎨 Estilos CSS modernos con gradientes

## 🚀 Instalación y uso

### Requisitos previos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para empezar

1. **Instalar dependencias** (ya hecho)
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:5173`

3. **Compilar para producción**
   ```bash
   npm run build
   ```
   Los archivos compilados estarán en la carpeta `dist/`

## 📁 Estructura del proyecto

```
src/
├── components/        # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/            # Páginas (para expansión futura)
├── styles/           # Archivos CSS
│   ├── Header.css
│   ├── Hero.css
│   ├── Projects.css
│   ├── About.css
│   ├── Contact.css
│   └── Footer.css
├── App.tsx           # Componente principal
├── main.tsx          # Punto de entrada
└── index.css         # Estilos globales
```

## 🎯 Próximos pasos para personalizar

1. **Actualiza tu información:**
   - Reemplaza "Tomas Dev" con tu nombre
   - Actualiza la descripción en Hero
   - Cambia el email en Contact

2. **Agrega tus proyectos:**
   - Edita el array `projects` en `src/components/Projects.tsx`
   - Agrega título, descripción, tecnologías y enlaces

3. **Personaliza estilos:**
   - Los colores principales están en los archivos CSS
   - Puedes cambiar la paleta de colores fácilmente

4. **Enlaces sociales:**
   - Actualiza los enlaces de GitHub, LinkedIn y Email en Contact

## 🌐 Despliegue

Algunas opciones para publicar tu portfolio:

- **Vercel**: Integración directa con GitHub, muy fácil
- **Netlify**: Otro servicio gratuito con buena documentación
- **GitHub Pages**: Opción gratuita usando GitHub
- **Servidor propio**: Con cualquier hosting que soporte Node

## 📚 Recursos útiles

- [React Docs](https://react.dev)
- [Vite Docs](https://vite.dev)
- [TypeScript Docs](https://www.typescriptlang.org)

## ✅ Checklist para antes de publicar

- [ ] Actualiza el título en `index.html`
- [ ] Reemplaza favicon en `public/`
- [ ] Agrega tus proyectos reales
- [ ] Añade fotografía o avatar
- [ ] Configura análisis (Google Analytics opcional)
- [ ] Prueba responsive en múltiples dispositivos
- [ ] Verifica velocidad de carga

---

¡Haz tu portfolio único y refleja tu personalidad como desarrollador! 🚀
