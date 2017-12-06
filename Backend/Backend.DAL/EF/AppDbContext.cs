using Backend.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.DAL.EF
{
    public class AppDbContext:IdentityDbContext<AppUser>
    {
        public DbSet<Message> Messages { get; set; }
        public DbSet<Photo> Photos { get; set; }

        public AppDbContext() { }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Dating;Trusted_Connection=True;MultipleActiveResultSets=true;",options=>options.EnableRetryOnFailure());
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<AppUser>(entity => {
                entity.HasIndex(user => user.Email).IsUnique();
                entity.Property(user => user.RegisterDate).HasColumnType("datetime")
                .HasDefaultValueSql("getdate()");
            });
            builder.Entity<Message>(entity => {
                entity.Property(message => message.SentDate)
                .HasColumnType("datetime")
                .HasDefaultValueSql("getdate()");
                entity.HasIndex(message => message.SentDate);
            });

        }
    }
}
