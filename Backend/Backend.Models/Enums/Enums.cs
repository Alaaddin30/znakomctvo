using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace Backend.Models.Enums
{
    public enum GENDERS
    {
        Male,
        Female
    };

    public enum ORIENTATIONS
    {
        Heterosexual,
        Homosexual,
        Bisexual
    };

    public enum REGIONS
    {
        Stockholm,
        Gothenburg
    };

    public enum STOCKHOLMS
    {
        Botkyrka,
        Danderyd,
        Ekerö,
        Haninge,
        Huddinge,
        Järfälla,
        Lidingö,
        Nacka,
        Norrtälje,
        Nykvarn,
        Nynäshamn,
        Salem,
        Sigtuna,
        Sollentuna,
        Solna,
        Stockholm,
        Sundbyberg,
        Södertälje,
        Tyresö,
        Täby,
        [Display(Name ="Upplands Bro")]
        UpplandsBro,
        [Display(Name = "Upplands Väsby")]
        UpplandsVäsby,
        Vallentuna,
        Vaxholm,
        Värmdö,
        Österåker,
    }

    public enum GOTHENBURGS
    {
        Ale,
        Alingsås,
        Bengtsfors,
        Bollebygd,
        Borås,
        [Display(Name= "Dals Ed")]
        DalsEd,
        Essunga,
        Falköping,
        Färgelanda,
        Grästorp,
        Gullspång,
        Göteborg,
        Götene,
        Herrljunga,
        Hjo,
        Härryda,
        Karlsborg,
        Kungälv,
        Lerum,
        Lidköping,
        [Display(Name = "Lilla Edet")]
        LillaEdet,
        Lysekil,
        Mariestad,
        Mark,
        Mellerud,
        Munkedal,
        Mölndal,
        Orust,
        Partille,
        Skara,
        Skövde,
        Sotenäs,
        Stenungsund,
        Strömstad,
        Svenljunga,
        Tanum,
        Tibro,
        Tidaholm,
        Tjörn,
        Tranemo,
        Trollhättan,
        Töreboda,
        Uddevalla,
        Ulricehamn,
        Vara,
        Vårgårda,
        Vänersborg,
        Åmål,
        Öckerö,
    }
}
