using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HajosTeszt.EtelekModels
{
    public partial class etelekContext : DbContext
    {
        public etelekContext()
        {
        }

        public etelekContext(DbContextOptions<etelekContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Etel> Etels { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=t509zq.database.windows.net;Initial Catalog=etelek;User ID=t509zq;Password=EdwardTeller1908");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Etel>(entity =>
            {
                entity.HasKey(e => e.Sk);

                entity.ToTable("Etel");

                entity.Property(e => e.Sk).HasColumnName("SK");

                entity.Property(e => e.Nev)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
