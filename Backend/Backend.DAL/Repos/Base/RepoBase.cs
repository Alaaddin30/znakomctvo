using Backend.DAL.EF;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Backend.DAL.Repos.Base
{
    public abstract class RepoBase<T> :IDisposable , IRepo<T> where T:class
    {
        protected readonly AppDbContext Db;
        protected DbSet<T> Table;
        public AppDbContext Context => Db;

        public int Count => Table.Count();

        public bool HasChanges => Db.ChangeTracker.HasChanges();

        protected RepoBase()
        {
            Db = new AppDbContext();
            Table = Db.Set<T>();
        }
        protected RepoBase(DbContextOptions<AppDbContext> options)
        {
            Db = new AppDbContext(options);
            Table = Db.Set<T>();
        }

        public T Find(int? id) => Table.Find(id);

        public T GetFirst() => Table.FirstOrDefault();

        public virtual IEnumerable<T> GetAll() => Table;

        public virtual IEnumerable<T> GetRange(int skip, int take) => GetRange(Table, skip, take);

        internal IEnumerable<T> GetRange(IQueryable<T> query, int skip, int take) => query.Skip(skip).Take(take);

        public virtual int Add(T entity, bool persist = true)
        {
            Table.Add(entity);
            return persist ? SaveChanges() : 0;
        }

        public virtual int AddRange(IEnumerable<T> entities, bool persist = true)
        {
            Table.AddRange(entities);
            return persist ? SaveChanges() : 0;
        }

        public virtual int Update(T entity, bool persist = true)
        {
            Table.Update(entity);
            return persist ? SaveChanges() : 0;
        }

        public virtual  int UpdateRange(IEnumerable<T> entities, bool persist = true)
        {
            Table.UpdateRange(entities);
            return persist ? SaveChanges() : 0;
        }

        public int Delete(T entity, bool persist = true)
        {
            Table.Remove(entity);
            return persist ? SaveChanges() : 0;
        }

        public int DeleteRange(IEnumerable<T> entities, bool persist = true)
        {
            Table.RemoveRange(entities);
            return persist ? SaveChanges() : 0;
        }

        public virtual int Delete(int id, byte[] timeStamp, bool persist = true)
        {
            throw new NotImplementedException();
        }

        public int SaveChanges()
        {
            try
            {
                return Db.SaveChanges();
            }
            catch(DbUpdateConcurrencyException ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
        }


        bool _disposed = false;

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (_disposed)
                return;

            if (disposing)
            {
                // Free any other managed objects here. 
                //
            }
            Db.Dispose();
            _disposed = true;
        }
    }
}
