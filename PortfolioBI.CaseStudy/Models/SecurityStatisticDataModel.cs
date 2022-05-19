using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Models
{
    public class SecurityStatisticDataModel
    {
        public double MinClose { get; set; }

        public double MaxClose { get; set; }

        public double MaxSpike { get; set; }
    }
}
