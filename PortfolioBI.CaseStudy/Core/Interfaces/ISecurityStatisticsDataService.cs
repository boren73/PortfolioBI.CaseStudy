using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Core.Interfaces
{
    public interface ISecurityStatisticsDataService<T>
    {
        T GetStatisticsData();
    }
}
