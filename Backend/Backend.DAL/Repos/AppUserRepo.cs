using Backend.DAL.Repos.Base;
using Backend.DAL.Repos.Interfaces;
using Backend.Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Backend.Models.ViewModels;
using Backend.DAL.EF;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Backend.Models.Enums;

namespace Backend.DAL.Repos
{
    public class AppUserRepo : IAppUserRepo
    {
        public readonly AppDbContext Context;
        public DbSet<AppUser> Table;
        public AppUserRepo()
        {
            Context = new AppDbContext();
            Table = Context.Users;
        }
        public AppUserRepo(DbContextOptions<AppDbContext> options)
        {
            Context = new AppDbContext(options);
            Table = Context.Users;
        }
        public int Count => Table.Count();

        public IEnumerable<AppUser> AllUsers => Table;

        public IEnumerable<AppUser> GetFemaleUser() => Table.Where(x => x.Gender == GENDERS.Female).ToList();

        public IEnumerable<AppUser> GetMaleUsers() => Table.Where(x => x.Gender == GENDERS.Male).ToList();

        public IEnumerable<AppUser> GetRange(int skip, int take) => GetRange(Table, skip, take);

        private IEnumerable<AppUser> GetRange(IQueryable<AppUser> query, int skip, int take) => query.Skip(skip).Take(take);

        public AppUser GetProfile(string id) => Table.Where(x => x.Id == id).Include(y => y.Photos).FirstOrDefault();

        public UserConversation GetConversation(string id, string interlocutorId)
        {
            return new UserConversation
            {
                Interlocutor = Table.Single(x => x.Id == id),
                Messages = Table
                .Where(x => x.Id == id)
                .Include(y => y.Messages)
                .SelectMany(z => z.Messages)
                .Where(m=>m.To==interlocutorId)
                .ToList()
            };
        }

        UserProfile IAppUserRepo.GetProfile(string id)
        {
            throw new NotImplementedException();
        }
    }
}
