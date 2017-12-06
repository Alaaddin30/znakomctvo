using Backend.Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Models.ViewModels
{
    public class UserConversation
    {
        public AppUser Interlocutor { get; set; }
        public IList<Message> Messages { get; set; }
    }
}
