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
        [HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M2(int sorszám) 
        {
            HajostesztContext context = new HajostesztContext();
            var kérdés = (from i in context.Questions
                          where i.QuestionId == sorszám
                          select i).FirstOrDefault();
            if (kérdés == null) return BadRequest("Nincs ilyen sorszámú kérdés");
            return new JsonResult(kérdés);
        
        }
    }
}
