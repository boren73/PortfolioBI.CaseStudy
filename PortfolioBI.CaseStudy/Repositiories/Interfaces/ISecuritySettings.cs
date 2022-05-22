using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Models;

namespace PortfolioBI.CaseStudy.Repositories.Interfaces
{
    public interface ISecuritySettings
    {
        List<SecuritySettingsModel> GetSettingsData();
    }
}
