using Backend.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Backend.Models.Helpers
{
    public class Location
    {
        public REGIONS Region { get; set; }
        public List<string> Cities { get; set; }

        public static List<string> Locate(REGIONS region)
        {
            List<string> Cities = new List<string>();
            switch (region)
            {
                case REGIONS.Stockholm:
                    Cities = Enum.GetNames(typeof(STOCKHOLMS)).ToList<string>();
                    break;
                case REGIONS.Gothenburg:
                    Cities = Enum.GetNames(typeof(GOTHENBURGS)).ToList<string>();
                    break;
                default:
                    Cities = new List<string>();
                    break;

            }
            return Cities;
        }
    }
}
