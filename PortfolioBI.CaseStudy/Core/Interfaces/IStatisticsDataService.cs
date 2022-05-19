using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Core.Interfaces
{
    public interface IStatisticsDataService<T>
    {
        T GetStatisticsData();
    }
}
