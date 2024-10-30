using System;
using System.Collections.Generic;
using System.Linq;

namespace UserRegister
{
    class Program
    {
        private static List<User> users = new List<User>();

        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("Selecciona una opción: 1. Registro, 2. Iniciar Sesión, 3. Salir");
                var option = Console.ReadLine();

                if (option == "1")
                {
                    Register();
                }
                else if (option == "2")
                {
                    Login();
                }
                else if (option == "3")
                {
                    break;
                }
            }
        }

        private static void Register()
        {
            Console.WriteLine("Ingrese su nombre de usuario:");
            string username = Console.ReadLine();

            Console.WriteLine("Ingrese su correo electrónico:");
            string email = Console.ReadLine();

            Console.WriteLine("Ingrese su contraseña:");
            string password = Console.ReadLine();

            if (users.Any(u => u.Username == username || u.Email == email))
            {
                Console.WriteLine("Usuario o correo ya registrado");
            }
            else
            {
                users.Add(new User { Username = username, Email = email, Password = password });
                Console.WriteLine("Registro exitoso");
            }
        }

        private static void Login()
        {
            Console.WriteLine("Ingrese su nombre de usuario:");
            string username = Console.ReadLine();

            Console.WriteLine("Ingrese su contraseña:");
            string password = Console.ReadLine();

            var user = users.FirstOrDefault(u => u.Username == username && u.Password == password);

            if (user != null)
            {
                Console.WriteLine("Inicio de sesión exitoso");
            }
            else
            {
                Console.WriteLine("Usuario o contraseña incorrecta");
            }
        }
    }

    public class User
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
