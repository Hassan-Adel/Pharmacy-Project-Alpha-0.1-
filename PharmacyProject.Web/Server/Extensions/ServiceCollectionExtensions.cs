using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.DependencyInjection;
using System.Net;
using System.Threading.Tasks;
using PharmacyProject.DAL.Models;
using PharmacyProject.DAL;
using Microsoft.EntityFrameworkCore;

namespace PharmacyProject.Server.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCustomIdentity(this IServiceCollection services)
        {
            // For api unauthorised calls return 401 with no body
            services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
            {
                options.Password.RequiredLength = 4;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Cookies.ApplicationCookie.AutomaticChallenge = false;
                options.Cookies.ApplicationCookie.LoginPath = "/login";
                options.Cookies.ApplicationCookie.Events = new CookieAuthenticationEvents
                {
                    OnRedirectToLogin = ctx =>
                    {
                        if (ctx.Request.Path.StartsWithSegments("/api") &&
                            ctx.Response.StatusCode == (int)HttpStatusCode.OK)
                        {
                            ctx.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                        }
                        else if (ctx.Response.StatusCode == (int)HttpStatusCode.Forbidden)
                        {
                            ctx.Response.StatusCode = (int)HttpStatusCode.Forbidden;
                        }
                        else
                        {
                            ctx.Response.Redirect(ctx.RedirectUri);
                        }
                        return Task.FromResult(0);
                    }
                };
            })
            .AddEntityFrameworkStores<ApplicationDbContext, int>()
            .AddDefaultTokenProviders();

            return services;
        }

        //public static IServiceCollection AddCustomDbContext(this IServiceCollection services)
        //{
        //    // Add framework services.
        //    string useSqLite = Startup.Configuration["Data:useSqLite"];
        //    string SqlLiteConnectionString = Startup.Configuration["Data:SqlLiteConnectionString"];
        //    string SqlServerConnectionString = Startup.Configuration["Data:SqlServerConnectionString"];
        //    //DbContextOptionsBuilder<ApplicationDbContext> options2 = ApplicationDbContext.ReturnOptions(useSqLite, SqlLiteConnectionString, SqlServerConnectionString);
        //    services.AddDbContext<ApplicationDbContext>(ApplicationDbContext.ReturnOptions(useSqLite, SqlLiteConnectionString, SqlServerConnectionString));
        //    return services;
        //}

        public static IServiceCollection AddCustomDbContext(this IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                string useSqLite = Startup.Configuration["Data:useSqLite"];
                if (useSqLite.ToLower() == "true")
                {
                    options.UseSqlite(Startup.Configuration["Data:SqlLiteConnectionString"]);
                }
                else
                {
                    options.UseSqlServer(Startup.Configuration["Data:SqlServerConnectionString"], b => b.MigrationsAssembly("PharmacyProject"));
                }
                options.UseOpenIddict();
            });
            return services;
        }
    }
}
