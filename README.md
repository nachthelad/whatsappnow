# WhatsApp Sin Agendar - Next.js Version

Una aplicación web moderna para enviar mensajes de WhatsApp sin agendar el contacto. Recreada con Next.js 14, React 18 y Tailwind CSS.

## 🚀 Características

- **Envío directo**: Envía mensajes de WhatsApp sin guardar el contacto
- **Selector de país**: Incluye selector de código de país para números internacionales
- **Diseño moderno**: Interfaz elegante con Tailwind CSS
- **PWA completa**: Instalable como aplicación nativa
- **Responsive**: Funciona perfectamente en móvil y desktop
- **Offline**: Funciona sin conexión gracias al Service Worker
- **Validación**: Validación de números de teléfono en tiempo real
- **UX mejorada**: Animaciones, notificaciones y estados de carga
- **SEO optimizado**: Meta tags completos para mejor indexación
- **TypeScript**: Código tipado para mayor seguridad
- **Performance**: Optimizado con Next.js 14

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Phone Input**: react-phone-input-2
- **PWA**: Service Worker + Manifest
- **Build**: Turbopack (Next.js bundler)
- **Deployment**: Vercel, Netlify, etc.

## 📦 Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd whatsappnow
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   npm run dev
   ```

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Ejecutar en producción**

   ```bash
   npm start
   ```

## 🎨 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con hot reload
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de ESLint

## 📱 Uso

1. Abre la aplicación en tu navegador
2. Selecciona tu país en el selector de código de país
3. Ingresa el número de teléfono completo (con código de país)
4. Escribe tu mensaje (opcional)
5. Haz clic en "Enviar mensaje"
6. Se abrirá WhatsApp con el mensaje pre-llenado

## 🔧 Configuración

### Variables de Entorno

- `NEXT_PUBLIC_APP_URL` - URL de la aplicación (opcional)

### Personalización

- **Colores**: Edita `tailwind.config.js` para cambiar los colores de WhatsApp
- **Iconos**: Reemplaza los archivos en `public/images/`
- **Estilos**: Modifica `app/globals.css` para personalizar componentes
- **País por defecto**: Cambia `country="ar"` en `components/WhatsAppForm.tsx`
- **Países preferidos**: Modifica `preferredCountries` en el componente

## 📁 Estructura del Proyecto

```
whatsappnow/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── send-whatsapp/ # WhatsApp API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx
│   ├── WhatsAppForm.tsx
│   ├── DonationSection.tsx
│   ├── LoadingOverlay.tsx
│   └── Notification.tsx
├── public/               # Static files
│   ├── images/           # Icons and images
│   ├── manifest.json     # PWA manifest
│   └── sw.js            # Service Worker
├── next.config.js        # Next.js config
├── tailwind.config.js    # Tailwind config
├── postcss.config.js     # PostCSS config
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

## 🌟 Mejoras Implementadas

### Frontend

- ✅ **Next.js 14** con App Router
- ✅ **React 18** con hooks modernos
- ✅ **TypeScript** para type safety
- ✅ **Componentes modulares** para mejor mantenimiento
- ✅ **Estado local** con useState y useEffect
- ✅ **Formularios controlados** con validación en tiempo real
- ✅ **Selector de país** con react-phone-input-2
- ✅ **Búsqueda de países** integrada
- ✅ **Animaciones suaves** con CSS transitions
- ✅ **Responsive design** optimizado para móvil

### Backend

- ✅ **API Routes** de Next.js
- ✅ **Validación server-side** para mayor seguridad
- ✅ **Error handling** robusto
- ✅ **TypeScript** en el backend también

### Performance

- ✅ **Turbopack** para builds más rápidos
- ✅ **Code splitting** automático
- ✅ **Image optimization** con Next.js Image
- ✅ **Static generation** donde sea posible
- ✅ **Bundle analyzer** integrado

### SEO & PWA

- ✅ **Meta tags** completos para SEO
- ✅ **Open Graph** para redes sociales
- ✅ **Twitter Cards** optimizadas
- ✅ **PWA manifest** actualizado
- ✅ **Service Worker** mejorado
- ✅ **Offline support** completo

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
vercel --prod
```

### Netlify

```bash
netlify deploy --prod
```

### Railway

```bash
railway up
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Optimizaciones

### Performance

- **Lazy loading** de componentes
- **Code splitting** automático
- **Image optimization** con Next.js
- **Bundle size** optimizado
- **Caching** inteligente

### SEO

- **Meta tags** dinámicos
- **Structured data** para rich snippets
- **Sitemap** automático
- **Robots.txt** optimizado

### Accessibility

- **ARIA labels** completos
- **Keyboard navigation** mejorada
- **Screen reader** compatible
- **Color contrast** optimizado

## 📄 Licencia

MIT License - ver archivo LICENSE para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Autor**: nachthelad
- **Cafecito**: [cafecito.app/nachthelad](https://cafecito.app/nachthelad)

---

⭐ Si te gustó el proyecto, ¡dale una estrella al repositorio!
