using BaseJWTApplication819.DataAccess;
using BaseJWTApplication819.DataAccess.Entity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseJWTApplication819.Api_Angular.Helper
{
    public class SeederDatabase
    {
        public static void SeedData(IServiceProvider services,
          IWebHostEnvironment env,
          IConfiguration config)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
                var managerRole = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                var context = scope.ServiceProvider.GetRequiredService<EFContext>();
                SeedUsers(manager, managerRole, context);
            }
        }
        private static void SeedUsers(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, EFContext _context)
        {
            var roleName = "Admin";
            if (roleManager.FindByNameAsync(roleName).Result == null)
            {
                var resultAdminRole = roleManager.CreateAsync(new IdentityRole
                {
                    Name = "Admin"
                }).Result;
                var resultUserRole = roleManager.CreateAsync(new IdentityRole
                {
                    Name = "User"
                }).Result;

                string email = "a@m.com";
                var admin = new User
                {
                    Email = email,
                    UserName = email
                };
                var andrii = new User
                {
                    Email = "u@m.com",
                    UserName = "u@m.com"
                };

                var resultAdmin = userManager.CreateAsync(admin, "Qwerty1-").Result;
                resultAdmin = userManager.AddToRoleAsync(admin, "Admin").Result;

                var resultAndrii = userManager.CreateAsync(andrii, "Qwerty1-").Result;
                resultAndrii = userManager.AddToRoleAsync(andrii, "User").Result;
            }

            var creator = _context.Users.FirstOrDefault(x => x.Email == "a@m.com");
            _context.Memes.Add(new Meme
            {
                Title = "Test meme",
                Date = "20.20.2020",
                Image = "https://img-9gag-fun.9cache.com/photo/awBP97R_700bwp.webp",
                Rating = 1,
                Comments = new List<Comment>
                {
                    new Comment
                    {
                        Date = "20.20.2020",
                        Text = "Some comment just for test",
                        User = creator
                    },
                    new Comment
                    {
                        Date = "20.20.2020",
                        Text = "Some comment just for test",
                        User = creator
                    },
                    new Comment
                    {
                        Date = "20.20.2020",
                        Text = "Some comment just for test",
                        User = creator
                    },
                    new Comment
                    {
                        Date = "20.20.2020",
                        Text = "Some comment just for test",
                        User = creator
                    }
                }
            }); ;

            _context.SaveChanges();

            _context.UserAdditionalInfos.Add(new UserAdditionalInfo
            {
                User = creator,
                Image = "test",
            });
            _context.SaveChanges();
            var user = _context.UserAdditionalInfos.FirstOrDefault(x => x.User.Id == creator.Id);
            var meme = _context.Memes.FirstOrDefault();
            _context.UpvotedMemes.Add(new UpvotedMemes
            {
                User = user,
                Meme = meme
            });
            _context.SaveChanges();
        }
    }
}
