# TRENDY STORE :handbag:
<p align="center"><img src="/public/images/2-sinfondo.png" width="400"></a></p>
</p>


## **_Autores_**


- [Dilia](https://github.com/Andhalaya) :trophy:
  <br>
  -BackEnd
  
- [Mayra](https://github.com/MayVarela16) :gem:
  <br>
  -FrontEnd
  
- [Edu](https://github.com/FSEduP) :zap:
  <br>
  -Swagger
  <br>
  -FrontEnd 


## **_Colaboradores_**
- GitHub: [Data](https://github.com/CarlosDiazGirol)
- GitHub: [Sofía](https://github.com/SofiaPinilla)
- GitHub: [Reyes](https://github.com/Reyeslim)
- GitHub: [Yolanda](https://github.com/yolovi)


## **TABLA DE CONTENIDOS** 📖


> 1. Descripción general del proyecto
> 2. Objetivo del proyecto
> 3. Dependencias
> 4. Tecnologías
> 5. Imágenes y videos
> 6. La API


### **_1. Descripción general del proyecto_**
Nuestro equipo se ha centrado en crear una página de e-commerce para vender artículos de ropa.




### **_2. Objetivo del proyecto_**
Crear una tienda de ropa básica que contenga las siguientes funcionalidades:


* Ver todos los productos
* Ver productos en base a su ID
* Ver productos en base a su categoría
* Ver todos los productos como usuario (Admin)
* Ver productos en base a su ID como usuario (Admin)
* Crear nuevos productos
* Editar productos existentes
* Eliminar productos existentes




### **_3. Dependencias_** :computer:
<table>
  <tr>
    <td>

#### Backend:
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://www.npmjs.com/package/express)
* [express-session](https://www.npmjs.com/package/express-session)

    </td>
    <td>

#### Base de datos:
* [mongoose](https://www.npmjs.com/package/mongoose)

    </td>
    <td>

#### Almacenamiento de archivos:
* [multer](https://www.npmjs.com/package/multer)

    </td>
  </tr>
  <tr>
    <td>

#### Template Engine:
* [pug](https://www.npmjs.com/package/pug)

    </td>
    <td>

#### Documentación de API:
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

    </td>
    <td>

#### Pruebas:
* [jest](https://www.npmjs.com/package/jest)
* [supertest](https://www.npmjs.com/package/supertest)
* [cheerio](https://cheerio.js.org/)
    </td>
  </tr>
  <tr>
    <td colspan="3">

#### Otros:
* [firebase](https://firebase.google.com/)

    </td>
  </tr>
</table>

<br>

### **_4. Tecnologías_**: :wrench:
<table>
  <tr>
    <td>

#### Herramientas de gestión de proyectos:
* [Trello](https://trello.com/b/0MuVNJnl/project-backend)
* [Github](https://github.com/)

    </td>
    <td>

#### Control de versiones y desarrollo colaborativo:
* [Git](https://git-scm.com/)
* [Visual Studio Code](https://code.visualstudio.com/)

    </td>
  </tr>
  <tr>
    <td>

#### Bases de datos:
* [mongodb](https://www.mongodb.com/es)
* [Postman](https://www.postman.com/)

    </td>
    <td>

#### Herramientas de deploy:
* [Fl0](https://www.fl0.com/)
* [GitHub Pages](https://pages.github.com/)

    </td>
  </tr>
  <tr>
    <td>

#### Comunicación y colaboración:
* [Zoom](https://zoom.us/es)
* [Slack](https://slack.com/intl/es-la)

    </td>
    <td>
    
#### Otras:
* [Monosnap](https://monosnap.com/)
* [CSS Analyzer](https://www.projectwallace.com/analyze-css)
  
    </td>
  </tr>
</table>

<br>

##### Guía de instalación:
* Forkear el proyecto
* Abrir git y Clonar el repositorio:
```
1- git clone https://github.com/Andhalaya/project-backend.git
```
* Abrir en Visual Studio Code
* Instalar las dependencias


```
npm init -y
```


* Conectarse a un servidor
<img src="https://user-images.githubusercontent.com/88779731/163977767-669553a4-108e-42ed-bccb-e07309466b22.jpg"  width="350" >







*  O utilizar el siguiente link para visualizar la página web:

https://project-backend-dev-send.1.ie-1.fl0.io/products




### **_5. Imágenes_** :video_camera:
##### Conjunto de imágenes y videos de la página de nuestra tienda:

<br>

<details>
  <summary>Ver imágenes como Cliente</summary>
  
  ### Vista productos
  ![Vista productos](/public/images/products.jpg)
  <p>Pantalla inicial de nuestra tienda, incluye nuestro logo, menú de navegación por categorías, el botón para hacer login, un botón para activar el modo oscuro y la vista de los productos</p>

  <br>

  ### Vista footer
  ![Vista footer](/public/images/productsFooter.jpg)
  <p>Pantalla inicial de nuestra tienda vista desde el footer, incluye la vista de los productos, así como enlaces de interés, contacto y redes sociales; así como el botón para volver a la parte superior de la página</p>

  <br>

  ### Registro
  ![Registro](/public/images/register.jpg)
  <p>Pantalla de registro en nuestra tienda donde se muestra el formulario de registro, junto al botón de registro y vuelta atrás</p> 

  <br>

  ### Login
  ![Login](/public/images/login.jpg)
  <p>Formulario para acceder al /dashboard e incluye el botón de registro</p>

  <br>

  ### Detalles del producto
  ![Detalles del producto](/public/images/productDetail.jpg)
  <p>Al hacer click en un producto se muestran los detalles de este, que incluye la disponibilidad, descripción, categoría, talla, precio, guía de tallas, entrega y devoluciones, cambios y reembolsos, así como métodos de pago seguro</p>

  ![Detalles del producto](/public/images/productDetail2.jpg)
  <p>Más detalles al abrir el desplegable de entrega y devoluciones y el desplegable de cambios y reembolsos</p>

  ![Detalles del producto](/public/images/productDetailSizes.jpg)
  <p>Más detalles al abrir la guía de tallas, donde podemos ver el tallaje de todos los productos de nuestra web</p>

  <br>

  ### nav
  ![nav](/public/images/nav.jpg)
  <p>Menú de navegación</p> 

  ![nav](/public/images/nav2.jpg)
</details>

<br>

<details>
  <summary>Ver imágenes como Admin</summary>
  
  ### Vista productos en el Dashboard
  ![Vista productos en el Dashboard](/public/images/dashboard.jpg)
  <p>Pantalla inicial de nuestra tienda desde el punto de vista del Admin y con el modo oscuro activado, incluye nuestro logo, menú de navegación por categorías, el botón para hacer login, un botón para activar el modo oscuro y la vista de los productos</p>

  <br>

  ### Vista dashboard footer
  ![Vista dashboard footer](/public/images/dashboardFooter.jpg)
  <p>Pantalla inicial de nuestra tienda vista desde el footer como Admin, incluye la vista de los productos, así como enlaces de interés, contacto y redes sociales; así como el botón para volver a la parte superior de la página</p>

  <br>

  ### Crear un nuevo producto
  ![Crear un nuevo producto](/public/images/createProduct.jpg)
  <p>Formulario para crear y añadir un nuevo producto con todos los requisitos necesarios</p> 

  <br>

  ### Detalles del producto como Admin
  ![Detalles del producto como Admin](/public/images/dashboardProductDetail.jpg)
  <p>Al hacer click en un producto se muestran los detalles de este, que incluye la disponibilidad, descripción, categoría, talla, precio, guía de tallas, entrega y devoluciones, cambios y reembolsos, así como métodos de pago seguro. Además de todo esto incluye los botones para editar un producto y para borrar uno</p>

  ![Detalles del producto como Admin](/public/images/dashboardProductDetail2.jpg)
  <p>Más detalles al abrir la guía de tallas, donde podemos ver el tallaje de todos los productos de nuestra web, así como la información de entregas y cambios de fondo</p>

  <br>

  ### Vista para borrar un producto
  ![Vista para borrar un producto](/public/images/dashboardDelete.jpg)
  <p>Vista para borrar un producto de la página de la tienda</p> 
</details>

<br>

<details>
  <summary>Ver imágenes documentación en Swagger</summary>

  ### Vista general de la documentación
  ![Vista general de la documentación](/public/images/apiDocs.jpg)
  <p>Vista general de la documentación en swagger con todas las rutas utilizadas, aquellas que necesitan autenticación aparecen con un candado</p> 

  <br>

  ### Vista de la ruta /api/dashboard
  ![Vista de la ruta /api/dashboard](/public/images/apiDocsDashboard.jpg)
  <p>Vista de la ruta /api/dashboard, que muestra todos los productos de la página tras estar logado en la página</p> 
</details>

<br>

<details>
  <summary>Ver videos de la página web</summary>

  ### Vista general de la página como cliente 
  https://github.com/FSEduP/project-backend/assets/148755901/9e444692-c75e-43cc-99c8-e0277b93a6b8
  <p>Vista de toda la página como cliente, viendo todas las funcionalidades, la barra de navegación, los productos, el footer, el botón para volver arriba, los detalles de los productos y el modo noche</p> 

  <br>

  ### Vista del registro y login
  https://github.com/FSEduP/project-backend/assets/148755901/bb91d358-d907-4f01-b00c-8da2b2a41b56
  <p>Vista de como es el registro y login en la página de la tienda</p> 
  
  <br>

  ### Vista de dashboard como Admin y sus funcionalidades
  https://github.com/FSEduP/project-backend/assets/148755901/9fd0335c-dc7f-44cd-9153-2635f432a5df
  <p>Vista de toda la página como Admin, viendo las mismas funcionalidades que el cliente más la edición, creación y borrado de un producto</p> 
</details>

<br><br>

### **_6. API_**: :page_with_curl:
Para acceder a la documentación con swagger hay que acceder a través de la siguiente ruta:

```
https://project-backend-dev-send.1.ie-1.fl0.io/products/api-docs
```
:lock: Para que las rutas del /dashboard funcionen hay que estar logado en la página con un usuario y contraseña válidos

### Client
| Route Name                  | Request Type | RequestBody                                             | Request Path                        |
|-----------------------------|--------------|---------------------------------------------------------|-------------------------------------|
| `showProductsAPI`           | GET          | null                                                    | `/products`                     |
| `showProductByIdAPI`        | GET          | null                                                    | `/products/:productId`          |
| `showProductsByCategoryAPI` | GET          | null                                                    | `/category/:category`           |

### Admin
| Route Name                  | Request Type | RequestBody                                             | Request Path                        |
|-----------------------------|--------------|---------------------------------------------------------|-------------------------------------|
| `showProductByIdAPI`        | PUT          | null                                                    | `/dashboard/:productId `        |
| `createProductAPI`          | POST         | (nombre, descripción, categoría, talla, precio, imagen) | `/dashboard/new`                |
| `editProductAPI`            | POST         | (nombre, descripción, categoría, talla, precio, imagen) | `/dashboard/:productId/edit`    |
| `deleteProductAPI`          | POST         | null                                                    | `/dashboard/:productId/delete`  |
