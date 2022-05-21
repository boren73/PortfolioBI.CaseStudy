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

        public StatisticSpikeValueModel MaxSpike { get; set; }

        public StatisticROIValueModel ReturnOnInvestment { get; set; }
    }
}
