using Backend.Models.Entities.Base;
using Backend.Models.Enums;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Backend.Models.Entities
{
    public class AppUser : IdentityUser
    {
        [DataType(DataType.Text), MaxLength(50)]
        public string Name { get; set; }
        public ORIENTATIONS Orientation { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime RegisterDate { get; set; }
        public REGIONS Region { get; set; }
        [DataType(DataType.Text), MaxLength(100)]
        public string City { get; set; }
        public int ViewCount { get; set; }
        public DateTime LastLogin { get; set; }
        public GENDERS Gender { get; set; }
        public int Rating { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        [DataType(DataType.Text), MaxLength(int.MaxValue)]
        public string Description { get; set; }
        [Timestamp]
        public byte[] TimeStamp { get; set; }

        // Navigation
        [InverseProperty(nameof(Photo.User))]
        public List<Photo> Photos { get; set; } = new List<Photo>();
        [InverseProperty(nameof(Message.User))]
        public List<Message> Messages { get; set; } = new List<Message>();
    }
}
