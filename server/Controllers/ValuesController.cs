using System;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class ServerData
    {
        public string Name {get;set;}
    }

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private static String name = "testing";

        [HttpGet]
        public ServerData Get()
        {
            return new ServerData
            {
              Name = name
            };
        }

        [HttpPut]
        public void Put([FromBody]string newName)
        {
            name = newName;
        }
    }
}
