using BaseJWTApplication819.DataAccess.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace BaseJWTApplication819.DataAccess
{
    public class EFContext : IdentityDbContext<User>
    {
        public EFContext(DbContextOptions<EFContext> options) : base(options) { }

        public DbSet<UserAdditionalInfo> UserAdditionalInfos { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Meme> Memes { get; set; }
        public DbSet<CreatedMemes> CreatedMemes { get; set; }
        public DbSet<UpvotedMemes> UpvotedMemes { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasOne(u => u.UserAdditionalInfo)
                .WithOne(t => t.User)
                .HasForeignKey<UserAdditionalInfo>(r => r.Id);

            builder.Entity<CreatedMemes>()
                .HasKey(k => new { k.MemeId, k.UserId });
            builder.Entity<CreatedMemes>()
                .HasOne(u => u.User)
                .WithMany(k => k.CreatedMemes)
                .HasForeignKey(u => u.UserId);
            builder.Entity<CreatedMemes>()
              .HasOne(u => u.Meme)
              .WithMany(k => k.CreatedMemes)
              .HasForeignKey(u => u.MemeId);
            builder.Entity<UpvotedMemes>()
                .HasKey(k => new { k.MemeId, k.UserId });
            builder.Entity<UpvotedMemes>()
                .HasOne(u => u.User)
                .WithMany(k => k.UpvotedMemes)
                .HasForeignKey(u => u.UserId);
            builder.Entity<UpvotedMemes>()
              .HasOne(u => u.Meme)
              .WithMany(k => k.UpvotedMemes)
              .HasForeignKey(u => u.MemeId);
            base.OnModelCreating(builder);
        }

    }
}
