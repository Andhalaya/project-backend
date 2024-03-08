const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('../config/firebase');

// Controlador para iniciar sesión
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { uid } = userCredential.user;
    req.session.uid = uid; 
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    res.redirect('/products');
  }
};

const logout = async (req, res) => {
    try {
      await new Promise((resolve, reject) => {
        req.session.destroy(err => {
          if (err) {
            console.error('Error al cerrar sesión:', err);
            reject(err);
          } else {
            resolve();
          }
        });
      });
      res.redirect('/products');
    } catch (error) {
      res.status(500).send('Error al cerrar sesión');
    }
};

async function registerUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
      return res.status(422).json({
      error: "Email and password are required",
      });
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    res.send(`
        <h1>Registro exitoso</h1>
        <p>Usuario registrado correctamente.</p>
        <p><a href="/products">Volver a Inicio</a></p>
      `);
  } catch (error) {
    res.status(500).render('register', { errorMessage: "Error durante el registro. Datos de usuario no válidos" });
  }
};

// Función para mostrar el formulario de registro
function showRegistrationForm(req, res) {
  res.render('register');
};

module.exports = {
    login,
    logout,
    registerUser,
    showRegistrationForm
};