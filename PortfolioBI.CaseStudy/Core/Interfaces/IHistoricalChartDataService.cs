using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Core.Interfaces
{
    public interface IHistoricalChartDataService<T1, T2>
    {
        List<T1> GetChartData(List<T2> historicalData);
    }
}
