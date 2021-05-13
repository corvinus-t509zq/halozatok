﻿using HajosTeszt.JokeModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/jokes")]
    [ApiController]
    public class JokeController : ControllerBase
    {
        // GET: api/jokes
        [HttpGet]
        public IEnumerable<Joke> Get()
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            return context.Jokes.ToList();
        }

        // GET api/jokes/5
        [HttpGet("{id}")]
        public Joke Get(int id)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            var keresettVicc = (from i in context.Jokes
                                where i.JokeSk == id
                                select i).FirstOrDefault();
            return keresettVicc;
        }

        // POST api/jokes
        [HttpPost]
        public void Post([FromBody] Joke ujVicc)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            context.Jokes.Add(ujVicc);
            context.SaveChanges();
        }

        // PUT api/<JokeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/jokes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            var törlendőVicc = (from i in context.Jokes
                                where i.JokeSk == id
                                select i).FirstOrDefault();
            context.Remove(törlendőVicc);
        }

        [HttpGet]
        [Route("/api/jokes/count")]
        public int M4() {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            int darab = context.Jokes.Count();
            return darab;
        }
    }
}
