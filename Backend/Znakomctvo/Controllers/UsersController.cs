using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Znakomctvo.Models;
using Backend.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Backend.Models.Enums;
using Microsoft.EntityFrameworkCore;

namespace Znakomctvo.Controllers
{
    [Route("/api/users")]
    public class UsersController : Controller
    {
        private UserManager<AppUser> userManager;

        public UsersController(UserManager<AppUser> userMgr)
        {
            userManager = userMgr;
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public IEnumerable<AppUser> GetAll()
        {
            System.Threading.Thread.Sleep(1000);
            return userManager.Users;
        }

        [HttpGet("filter")]
        public IEnumerable<AppUser> Filter(string gender="all", string region="all" , string city="all", int fromAge = 18, int toAge = 99, bool photo= false, bool online= false)
        {
            IQueryable<AppUser> query = userManager.Users;
            if (!string.IsNullOrWhiteSpace(gender) && !gender.Equals("all"))
            {
                query = query.Where(x => x.Gender == (GENDERS)Enum.Parse(typeof(GENDERS), gender));
            }
            if (!string.IsNullOrWhiteSpace(city) && !city.Equals("all"))
            {
                query = query.Where(x => x.City == city);
            }
            if (fromAge>18)
            {
                query = query.Where(x => CalculateAge(x.BirthDate) > fromAge);
            }
            if (toAge < 99)
            {
                query = query.Where(x => CalculateAge(x.BirthDate) < toAge);
            }
            if (photo==true)
            {
                query = query.Include(x => x.Photos).Where(y => y.Photos.Count > 0);
            }
            if (online==true)
            {
                //query = query.Where(x => x.Gender == (GENDERS)Enum.Parse(typeof(GENDERS), gender));
            }
            System.Threading.Thread.Sleep(1000);
            return query;
        }

        [HttpGet("{id}")]
        public AppUser GetOneAsync(string id)
        {
            return userManager.Users.Include(x => x.Photos).FirstOrDefault(y => y.Id == id);
        }

        [HttpGet("men")]
        public IEnumerable<AppUser> GetMen()
        {
            System.Threading.Thread.Sleep(1000);
            return  userManager.Users.Where(x=>x.Gender==GENDERS.Male);
        }
        [HttpGet("women")]
        public IEnumerable<AppUser> GetWomen()
        {
            System.Threading.Thread.Sleep(1000);
            return userManager.Users.Where(x=>x.Gender== GENDERS.Female);
        }


        private int CalculateAge(DateTime birthdate)
        {
            int currentYear = DateTime.Now.Year;
            return currentYear - birthdate.Year;

        }

        //public IActionResult About()
        //{
        //    ViewData["Message"] = "Your application description page.";

        //    return View();
        //}

        //public IActionResult Contact()
        //{
        //    ViewData["Message"] = "Your contact page.";

        //    return View();
        //}

        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}
    }
}
