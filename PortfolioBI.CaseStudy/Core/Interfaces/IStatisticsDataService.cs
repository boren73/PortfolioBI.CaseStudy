using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Core.Interfaces
{
    public interface IStatisticsDataService<T1, T2>
    {
        T1 GetStatisticsData(string id, List<T2> historicalData);
    }
}
