using Backend.DAL.Repos.Base;
using Backend.DAL.Repos.Interfaces;
using Backend.Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.DAL.Repos
{
    public class MessageRepo: RepoBase<Message>, IMessageRepo
    {
    }
}
