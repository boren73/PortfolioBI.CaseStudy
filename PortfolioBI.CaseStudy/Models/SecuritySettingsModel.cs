using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Models
{
    public class SecuritySettingsModel
    {
        public string Id { get; set; }

        public string SecurityName { get; set; }

        public string FileName { get; set; }

        public ReturnOnInvestmentOptionsModel ROI { get; set; }
    }
}
