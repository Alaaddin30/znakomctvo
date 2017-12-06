using Backend.Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Models.ViewModels
{
    public class UserProfile
    {
        public AppUser AppUser { get; }
        public IList<Photo> Photos { get; }
    }
}
