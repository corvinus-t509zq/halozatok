using HajosTeszt.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    [ApiController]
    public class BoatController : ControllerBase
    {
        [HttpGet]
        [Route("questions/all")]
        public IActionResult M1()
        {
            HajostesztContext context = new HajostesztContext();
            var kérdések = from i in context.Questions
                           select i.QuestionText;

            return new JsonResult(kérdések);
        }
    }
}
