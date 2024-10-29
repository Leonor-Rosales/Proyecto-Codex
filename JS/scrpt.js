document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('registerPassword').value;

    // Obtener usuarios del localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario o el correo ya están registrados
    if (users.some(user => user.username === name || user.email === email)) {
        alert('Usuario o correo ya registrado');
    } else {
        // Agregar el nuevo usuario
        users.push({ username: name, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users)); // Guardar en localStorage
        alert('Registro exitoso');
        
        // Redirigir a menu.html después del registro
        window.location.href = 'menu.html'; 
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Obtener usuarios del localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si existe el usuario
    var user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'menu.html';
    } else {
        alert('Usuario o contraseña incorrecta');
    }
});
