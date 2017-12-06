using Backend.Models.Entities.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Backend.Models.Entities
{
    [Table("Photos")]
    public class Photo : EntityBase
    {
        public byte[] UserPhoto { get; set; }
        public bool PrimaryPhoto { get; set; }

        // Navigation
        public string UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public AppUser User { get; set; }
             
    }
}
