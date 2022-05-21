using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Models
{
    public class ReturnOnInvestmentOptionsModel
    {
       // [JsonConverter(typeof(DateTime), "MM/dd/yyyy")]
        public DateTime Invested { get; set; }

        //[JsonConverter(typeof(int))]
        public int NumberOfShares { get; set; }
    }
}
