using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Models
{
    public class StatisticROIValueModel : StatisticValueModel
    {
        public DateTime InvestedDate { get; set; }

        public int NumberOfShares { get; set; }
    }
}
