using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Models
{
    public class SecurityModel
    {
        public string ISIN { get; private set; }

        public string SecurityName { get; private set; }

        public List<HistoricDataModel> HistoricalData { get; private set; }

        public SecurityStatisticDataModel StatisticsData { get; private set; }

        public SecurityModel(string isin, string securityName, List<HistoricDataModel> historicalData, SecurityStatisticDataModel statisticsData)
        {
            ISIN = isin;
            SecurityName = securityName;
            HistoricalData = historicalData;
            StatisticsData = statisticsData;
            
        }
    }
}
