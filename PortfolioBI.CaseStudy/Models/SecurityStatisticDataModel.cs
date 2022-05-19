using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Models
{
    public class SecurityStatisticDataModel
    {
        public StatisticModel MinClose { get; set; }

        public StatisticModel MaxClose { get; set; }

        public StatisticModel MaxSpike { get; set; }
    }


    public class StatisticModel
    {
        public DateTime Date { get; set; }

        public double Value { get; set; }
    }
}
