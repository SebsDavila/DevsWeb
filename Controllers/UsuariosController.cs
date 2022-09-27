using Microsoft.AspNetCore.Mvc;
using System.Linq;
using VasRecords.Models.ContextDB;

namespace VasRecords.Controllers
{
    public class UsuariosController : Controller
    {

        public angieContext _context;
        public UsuariosController(angieContext master)
        {
            this._context = master;
        }

        [HttpPost]
        public IActionResult GetUser(string usuario, string contraseña)
        {
            var user = _context.Usuarios.Where(x => x.Users == usuario && x.Password == contraseña);
            if (user.Any())
            {
                if (user.Where(x => x.Users == usuario && x.Password == contraseña).Any())
                {
                    return Json(new { status = true, message = "Bienvenido" });
                }
                else
                {
                    return Json(new { status = false, message = "Clave incorrecta" });
                }
            }
            else
            {
                return Json(new { status = false, message = "Usuario incorecto" });
            }
        }
    }
}