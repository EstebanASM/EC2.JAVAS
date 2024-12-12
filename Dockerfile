# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto 8585
EXPOSE 8084

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
