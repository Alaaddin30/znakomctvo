using Backend.Models.Entities.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Backend.Models.Entities
{
    public class Message :EntityBase
    {
        [DataType(DataType.Text)]
        public string From { get; set; }
        [DataType(DataType.Text)]
        public string To { get; set; }
        [DataType(DataType.Text), MaxLength(int.MaxValue)]
        public string Text { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime SentDate { get; set; }

        //Navigation 
        public string UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public AppUser User { get; set; }
    }
}
