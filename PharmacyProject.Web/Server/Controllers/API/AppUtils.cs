﻿using Microsoft.AspNetCore.Mvc;
using PharmacyProject.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyProject.Server.Controllers.API
{
    public class AppUtils
    {
        internal static IActionResult SignIn(ApplicationUser user, IList<string> roles)
        {
            var userResult = new { User = new { DisplayName = user.UserName, Roles = roles } };
            return new ObjectResult(userResult);
        }
    }
}
