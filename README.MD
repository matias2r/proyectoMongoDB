
## Proyecto 6 MongoDB


Este es un proyecto backend desarrollado con **JavaScript**, **Node.js**, **Express**, **JWT**, **Bycript** y **MongoDB**, diseñado para gestionar datos de manera eficiente mediante una API REST. Se incluye la implementación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y pruebas utilizando **Postman**, añadiendo la creacion de un **Token** automatico el cual es generado en el login y validado en su ruta especifica /verifyToken.

## Funcionalidades

- **Operaciones**:
  - Crear nuevos registros de usuarios y productos.
  - Encriptado de contraseñas para creacion de usuarios
  - Consulta de usuarios y productos almacenados.
  - Actualizar datos existentes.
  - Eliminar datos existentes.
  - Creacion de Token en inicio de sesion.
  - Verificacion de Token de usuario.
- **Conexión a MongoDB**:
  - Gestión eficiente de datos con esquemas flexibles.
- **Pruebas de API**:
  - Todas las rutas pueden ser probadas utilizando Postman.


## Rutas de usuarios (CRUD) /api/user

### POST `/create`
- **Descripción**: Crea un nuevo usuario.
- **Protegida**: Sí, requiere un token de autenticación.
- **Body**:
```
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
```

### POST `/login`
- **Descripción**: Permite a un usuario iniciar sesión.
- **Protegida**: No.
- **Body**:
```
  {
  "username": "string",
  "password": "string"
  }
```
### GET `/readall`
- **Descripción**: Obtiene la lista de todos los usuarios.
- **Protegida**: No.
- **Respuesta**:
```
200: Retorna un array con los usuarios.
500: Error en el servidor.
```
### PUT `/update/:id`
- **Descripción**: Actualiza un usuario específico por su ID.
- **Protegida**: Sí, requiere un token de autenticación.
- **Parametros**: id (en la URL): ID del usuario a actualizar.
- **Respuesta**:
```
200: Usuario actualizado con éxito.
404: Usuario no encontrado.
400: Error en los datos enviados.
```

### GET  `/verifytoken`
- **Descripción**: Verifica si el token de autenticación es válido.
- **Protegida**: Sí, requiere un token.
- **Respuesta**:
```
200: Token válido, acceso permitido.
401: Token inválido o no enviado.
```

### GET  `/verifytoken`
- **Descripción**: Verifica si el token de autenticación es válido.
- **Protegida**: Sí, requiere un token.
- **Respuesta**:
```
200: Token válido, acceso permitido.
401: Token inválido o no enviado.
```

## Rutas de productos (CRUD) /api/product

### POST `/create`
- **Descripción**: Crea un nuevo producto.
- **Protegida**: No.
- **Body**:
```
{
    "nombre": string,
    "descripcion": string,
    "precio": number,
    "stock": number,
    "categoria": string,
}
```
- **Respuesta**:
```
201: Producto creado con éxito.
400: Error en los datos enviados.
```

### GET `/readall`
- **Descripción**: Obtiene la lista de todos los productos.
- **Protegida**: No.
- **Respuesta**:
```
200: Retorna un array con los productos.
500: Error en el servidor.
```

### GET `/readone/:id`
- **Descripción**: Obtiene un producto específico por su ID.
- **Protegida**: No.
- **Parametros**: id (en la URL): ID del producto a obtener.
- **Respuesta**:
```
200: Retorna el producto con el ID especificado.
404: Producto no encontrado.
```

### PUT  `/update/:id`
- **Descripción**: Actualiza un producto específico por su ID.
- **Protegida**: No.
- **Parametros**: id (en la URL): ID del producto a actualizar.
- **Respuesta**:
```
{
  "name": "string",
  "price": "number",
  "description": "string"
}
```
```
200: Producto actualizado con éxito.
404: Producto no encontrado.
400: Error en los datos enviados.
```

### DELETE  `/delete/:id`
- **Descripción**: Elimina un producto específico por su ID.
- **Protegida**: No.
- **Parametros**: id (en la URL): ID del producto a eliminar.
- **Respuesta**:
```
200: Producto eliminado con éxito.
404: Producto no encontrado.
```


### Tecnologías Utilizadas


* [![JavaScript][JavaScript]][JavaScript-url]
* [![Node.js][Node.js-logo]][Node.js-url]
* [![Express][Express-logo]][Express-url]
* [![MongoDB][MongoDB-logo]][MongoDB-url]
* [![Postman][Postman-logo]][Postman-url]


## Primeros pasos

A continuación, te explico cómo configurar el proyecto localmente. Sigue estos sencillos pasos para tener una copia del proyecto en funcionamiento.

## Configuracion de variables de entorno
* PORT=3000
* MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net
* JWT_SECRET=<YourSecretToken>

### Requisitos previos

* Node.js v14 o superior
* npm o yarn

### Instalación

Sigue los siguientes pasos para instalar y configurar la aplicación.

1. Clona el repositorio:
   ```sh
   git clone https://github.com/matias2r/proyectoMongoDB
   ```
3. Instala los paquetes de npm:
   ```sh
   npm install
   ```
4. Inicia la aplicación en modo de desarrollo:
   ```sh
   npm run dev
   ```
5. Abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.


## Importante Leer

* Para realizar las pruebas de los endpoints es recomendable utilizar la herramienta **Postman**. Al momento de arrancar el servidor local con **node server.js** veras desplegado un console log con todos los endpoints para copiar y pegar en **Postman**. Buena suerte ❤️


## Contacto

**Matias Espinoza M.**
* **[LinkedIn](https://www.linkedin.com/in/matiasespinozamo/)**
* **[GitHub](https://github.com/matias2r)**


[Node.js-logo]: https://img.shields.io/badge/Node.js-43853d?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/

[Express-logo]: https://img.shields.io/badge/Express.js-404d59?style=for-the-badge
[Express-url]: https://expressjs.com/

[MongoDB-logo]: https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/

[Postman-logo]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Postman-url]: https://www.postman.com/

[JavaScript]: https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=yellow
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
