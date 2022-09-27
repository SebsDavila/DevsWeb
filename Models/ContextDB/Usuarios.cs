using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace VasRecords.Models.ContextDB
{
    [Table("Usuarios", Schema = "dbo")]
    public partial class Usuarios
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Nombre de usuario")]
        public string Users { get; set; }

        [Display(Name = "Clave de usuario")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public DateTime FechaCreación { get; set; }
    }
}
