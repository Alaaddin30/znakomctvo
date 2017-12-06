using Backend.Models.Entities;
using Backend.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.DAL.Repos.Interfaces
{
    public interface IAppUserRepo 
    {
        int Count { get; }
        IEnumerable<AppUser> AllUsers { get; }
        IEnumerable<AppUser> GetFemaleUser();
        IEnumerable<AppUser> GetMaleUsers();
        IEnumerable<AppUser> GetRange(int skip, int take);
        UserProfile GetProfile(string id);
         UserConversation GetConversation(string id, string interlocutorId);
    }
}
