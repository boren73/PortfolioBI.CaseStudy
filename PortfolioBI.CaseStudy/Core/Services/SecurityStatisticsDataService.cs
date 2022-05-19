using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Core.Interfaces;
using PortfolioBI.CaseStudy.Models;

namespace PortfolioBI.CaseStudy.Core.Services
{
    public class SecurityStatisticsDataService : IStatisticsDataService<SecurityStatisticDataModel>
    {
        private readonly List<SecurityHistoricDataModel> _historicalData;

        public SecurityStatisticsDataService(List<SecurityHistoricDataModel> historicalData)
        {
            _historicalData = historicalData;
        }

        public SecurityStatisticDataModel GetStatisticsData()
        {
            
            var model = new SecurityStatisticDataModel();

            var maxClose = _historicalData.Max(data => data.Close);
            model.MaxClose = new StatisticValueModel { Value = maxClose, Date = _historicalData.Find(data => data.Close == maxClose).Date };

            var minClose = _historicalData.Min(data => data.Close);
            model.MinClose = new StatisticValueModel { Value = minClose, Date = _historicalData.Find(data => data.Close == minClose).Date };

            var maxSpike = _historicalData.Max(data => data.ChangePercent).Value;
            model.MaxSpike = new StatisticValueModel { Value = maxSpike, Date = _historicalData.Find(data => data.ChangePercent == maxSpike).Date };

            return model;
        }
    }
}
