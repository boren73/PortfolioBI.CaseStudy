using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Models
{
    public class SecurityModel
    {
        public string Id { get; private set; }

        public string SecurityName { get; private set; }

        public List<SecurityHistoricDataModel> HistoricalData { get; private set; }

        public SecurityStatisticDataModel StatisticsData { get; private set; }

        public List<object> HistoricalChartData { get; private set; }

        public SecurityModel(string id, 
                             string securityName, 
                             List<SecurityHistoricDataModel> historicalData, 
                             SecurityStatisticDataModel statisticsData,
                             List<object> historicalChartData)
        {
            Id = id;
            SecurityName = securityName;
            HistoricalData = historicalData;
            StatisticsData = statisticsData;
            HistoricalChartData = historicalChartData;
            
        }
    }
}
