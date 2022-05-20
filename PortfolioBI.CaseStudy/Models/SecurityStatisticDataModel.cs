using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Models
{
    public class SecurityStatisticDataModel
    {
        public StatisticValueModel MinClose { get; set; }

        public StatisticValueModel MaxClose { get; set; }

        public StatisticValueModel MaxSpike { get; set; }

        public double InvestmentReturn { get; set; }
    }
}
