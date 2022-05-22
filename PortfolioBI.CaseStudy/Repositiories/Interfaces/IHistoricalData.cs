using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Repositories.Interfaces
{
    public interface IHistoricalData<T>
    {
        List<T> GetHistoricalData(string csvName);
    }
}
