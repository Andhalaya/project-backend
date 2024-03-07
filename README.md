<p align="center"><img src="/public/images/2-sinfondo.png" width="400"></a></p>
</p>




# TRENDY STORE


## **_Autores_**


- GitHub: [Dilia](https://github.com/Andhalaya)
- GitHub: [Mayra](https://github.com/MayVarela16)
- GitHub: [Edu](https://github.com/FSEduP)


## **_Colaboradores_**
- GitHub: [Data](https://github.com/CarlosDiazGirol)
- GitHub: [Sofía](https://github.com/SofiaPinilla)
- GitHub: [Reyes](https://github.com/Reyeslim)
- GitHub: [Yolanda](https://github.com/yolovi)


## **TABLA DE CONTENIDOS** 📖


> 1. Descripción general del proyecto
> 2. Objetivo del proyecto
> 3. Tecnologías
> 4. Dependencias
> 5. Diagramas
> 6. La API


### **_1. Descripción general del proyecto_**
Nuestro equipo se ha centrado en crear una pagina de e-commerce para vender articulos de ropa.




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




### **_3. Dependencias_**
* [body-parser](https://www.npmjs.com/package/body-parser)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://expressjs.com/en/starter/installing.html)
* [express-session](https://www.npmjs.com/package/express-session)
* [firebase](https://www.npmjs.com/package/firebase)
* [jest](https://www.npmjs.com/package/jest)
* [method-override](https://www.npmjs.com/package/method-override)
* [mongodb](https://www.npmjs.com/package/mongodb)
* [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [multer](https://www.npmjs.com/package/multer)
* [pug](https://www.npmjs.com/package/pug)
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)






### **_4. Tecnologías_**:
* [Visual Studio Code](https://code.visualstudio.com/)
* [Github](https://github.com/)
* [Git](https://git-scm.com/)
* [Postman](https://www.postman.com/)
* [Zoom](https://zoom.us/es)
* [Fl0](https://www.fl0.com/)


##### Guía de instalación:
* Forkear el proyecto
* Abrir git y Clonar el respositorio:
```
1- git clone https://github.com/Andhalaya/project-private.git


```
* Abrir en Visual Studio Code
* Instalar las dependencias


```
npm init -y


```


* Conectarse a un servidor
<img src="https://user-images.githubusercontent.com/88779731/163977767-669553a4-108e-42ed-bccb-e07309466b22.jpg"  width="350" >







*  O utilizar el siguiente link para visualizar la pagina web:


Link de fl0




### **_5. Imágenes_**
    INCLUIR FOTOS O/Y VIDEOS DE LA PAGINA


### **_6. API_**:


### Client
| Route Name                  | Request Type | RequestBody                                             | Request Path                        |
|-----------------------------|--------------|---------------------------------------------------------|-------------------------------------|
| `showProductsAPI`           | GET          | null                                                    | `/api/products`                     |
| `showProductByIdAPI`        | GET          | null                                                    | `/api/products/:productId`          |
| `showProductsByCategoryAPI` | GET          | null                                                    | `/api/category/:category`           |

### Admin
| Route Name                  | Request Type | RequestBody                                             | Request Path                        |
|-----------------------------|--------------|---------------------------------------------------------|-------------------------------------|
| `showProductByIdAPI`        | PUT          | null                                                    | `/api/dashboard/:productId `        |
| `showDashboardAPI`          | GET          | null                                                    | `/api/dashboard`                    |
| `createProductAPI`          | POST         | (nombre, descripción, categoría, talla, precio, imagen) | `/api/dashboard/new`                |
| `showEditProductAPI`        | GET          | null                                                    | `/api/dashboard/:productId/edit`    |
| `editProductAPI`            | POST         | (nombre, descripción, categoría, talla, precio, imagen) | `/api/dashboard/:productId/edit`    |
| `deleteProductAPI`          | POST         | null                                                    | `/api/dashboard/:productId/delete`  |
