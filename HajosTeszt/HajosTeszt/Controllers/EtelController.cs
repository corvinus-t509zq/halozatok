using HajosTeszt.EtelekModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/etel")]
    [ApiController]
    public class EtelController : Controller
    {

        [HttpGet]
        [Route("api/etel")]
        public IEnumerable<Etel> M1()
        {
            etelekContext context = new etelekContext();
            return context.Etels.ToList();
        }
        //api/etel/2
        [HttpGet]
        [Route("api/etel/{id}")]
        public Etel M2(int id)
        {
            etelekContext context = new etelekContext();
            var keresettetel = from i in context.Etels
                               where i.Sk == id
                               select i;
            return keresettetel.FirstOrDefault();
        }
        
        [HttpGet]
        [Route("api/etel/count")]
       
        public int M3() {
            etelekContext context = new etelekContext();
            int darab =  context.Etels.Count();
            return darab;
        }


        [HttpPost]
        [Route("api/etel")]
        public void Post([FromBody] Etel Ujetel)
        {
            etelekContext context = new etelekContext();
            context.Etels.Add(Ujetel);
            context.SaveChanges();
        }

        [HttpDelete]
        [Route("api/etel/{id}")]
        public void Delete(int id)
        {
            etelekContext context = new etelekContext();
            var törlendő = (from i in context.Etels
                                where i.Sk == id
                                select i).FirstOrDefault();
            context.Remove(törlendő);
            context.SaveChanges();
        }
    }
}
