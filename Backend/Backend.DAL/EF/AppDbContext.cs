using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.DAL.EF
{
    public class AppDbContext:IdentityDbContext
    {
        public AppDbContext() { }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=(localdb)\\mssqllocaldb;Database=Dating;Trusted_Connection=True;MultipleActiveResultSets=true;",options=>options.EnableRetryOnFailure());
            }
        }
    }
}
