using Backend.DAL.EF;
using Backend.Models.Entities;
using Backend.Models.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Znakomctvo.Models
{
    public class SeedData
    {
        public static void SeedDatabase(AppDbContext context)
        {
            context.Database.Migrate();
            if (context.Users.Count() == 0)
            {
                context.Users.AddRange(new List<AppUser> {
                    new AppUser{Name="User-1", Email="user-1@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25) ,City= "Stockholm"},
                    new AppUser{Name="User-2", Email="user-2@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25),City= "Stockholm" },
                    new AppUser{Name="User-3", Email="user-3@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Stockholm"},
                    new AppUser{Name="User-4", Email="user-4@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Stockholm"},
                    new AppUser{Name="User-5", Email="user-5@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Stockholm"},
                    new AppUser{Name="User-6", Email="user-6@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Stockholm"},
                    new AppUser{Name="User-7", Email="user-7@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Stockholm"},
                    new AppUser{Name="User-8", Email="user-8@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Stockholm"},
                    new AppUser{Name="User-9", Email="user-9@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Stockholm"},
                    new AppUser{Name="User-10", Email="user-10@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Stockholm"},
                    new AppUser{Name="User-11", Email="user-11@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Stockholm"},
                    new AppUser{Name="User-12", Email="user-12@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Stockholm"},
                    new AppUser{Name="User-13", Email="user-13@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Stockholm"},
                    new AppUser{Name="User-14", Email="user-14@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Stockholm"},
                    new AppUser{Name="User-15", Email="user-15@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Stockholm"},
                    new AppUser{Name="User-16", Email="user-16@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Stockholm"},
                    new AppUser{Name="User-17", Email="user-17@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Stockholm"},
                    new AppUser{Name="User-18", Email="user-18@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Stockholm"},
                    new AppUser{Name="User-19", Email="user-19@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Stockholm"},
                    new AppUser{Name="User-20", Email="user-20@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Stockholm"},
                    new AppUser{Name="User-21", Email="user-21@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Stockholm"},
                    new AppUser{Name="User-22", Email="user-22@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Stockholm"},
                    new AppUser{Name="User-23", Email="user-23@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Stockholm"},
                    new AppUser{Name="User-24", Email="user-24@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Stockholm"},
                    new AppUser{Name="User-25", Email="user-25@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Stockholm"},
                    new AppUser{Name="User-26", Email="user-26@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Stockholm"},
                    new AppUser{Name="User-27", Email="user-27@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Stockholm"},
                    new AppUser{Name="User-28", Email="user-28@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Stockholm"},
                    new AppUser{Name="User-29", Email="user-29@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Göteborg"},
                    new AppUser{Name="User-30", Email="user-30@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Göteborg"},
                    new AppUser{Name="User-31", Email="user-31@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Göteborg"},
                    new AppUser{Name="User-32", Email="user-32@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Göteborg"},
                    new AppUser{Name="User-33", Email="user-33@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Göteborg"},
                    new AppUser{Name="User-34", Email="user-34@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Göteborg"},
                    new AppUser{Name="User-35", Email="user-35@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Göteborg"},
                    new AppUser{Name="User-36", Email="user-36@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Göteborg"},
                    new AppUser{Name="User-37", Email="user-37@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Göteborg"},
                    new AppUser{Name="User-38", Email="user-38@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Göteborg"},
                    new AppUser{Name="User-39", Email="user-39@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "GGöteborgte"},
                    new AppUser{Name="User-40", Email="user-40@example.com",Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Göteborg"},
                    new AppUser{Name="User-41", Email="user-41@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25) ,City= "Stockholm"},
                    new AppUser{Name="User-42", Email="user-42@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25),City= "Stockholm" },
                    new AppUser{Name="User-43", Email="user-43@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Stockholm"},
                    new AppUser{Name="User-44", Email="user-44@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Stockholm"},
                    new AppUser{Name="User-45", Email="user-45@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Stockholm"},
                    new AppUser{Name="User-46", Email="user-46@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Stockholm"},
                    new AppUser{Name="User-47", Email="user-47@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Stockholm"},
                    new AppUser{Name="User-48", Email="user-48@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1988,10,25), City= "Stockholm"},
                    new AppUser{Name="User-49", Email="user-49@example.com",Gender=GENDERS.Female,BirthDate=new DateTime(1985,10,25), City= "Stockholm"},
                    new AppUser{Name="User-50", Email="user-50@example.com", Gender=GENDERS.Male,BirthDate=new DateTime(1975,10,25), City= "Stockholm"},
                    new AppUser{Name="User-51", Email="user-51@example.com",Gender=GENDERS.Male, BirthDate=new DateTime(1990,10,25), City= "Stockholm"},
                    new AppUser{Name="User-52", Email="user-52@example.com",Gender=GENDERS.Female, BirthDate=new DateTime(1980,10,25), City= "Stockholm"},

                });
                context.SaveChanges();
            }
        }
    }
}
