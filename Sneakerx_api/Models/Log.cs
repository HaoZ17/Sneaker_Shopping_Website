using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Sneakerx_api.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class Log
    {
        public int userID { get; private set; }
        public string record { get; private set; }

        public Log(int userID, string record)
        {
            this.userID = userID;
            this.record = record;
        }
    }
}
