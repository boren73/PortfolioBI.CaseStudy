using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Core.Interfaces;
using PortfolioBI.CaseStudy.Models;

namespace PortfolioBI.CaseStudy.Core.Services
{
    public class SecurityStatisticsDataService : IStatisticsDataService<SecurityStatisticDataModel, SecurityHistoricDataModel>
    {
       
        public SecurityStatisticDataModel GetStatisticsData(List<SecurityHistoricDataModel> historicalData)
        {
            
            var model = new SecurityStatisticDataModel();

            var maxClose = historicalData.Max(data => data.Close);
            model.MaxClose = new StatisticValueModel { Value = maxClose, Date = historicalData.Find(data => data.Close == maxClose).Date };

            var minClose = historicalData.Min(data => data.Close);
            model.MinClose = new StatisticValueModel { Value = minClose, Date = historicalData.Find(data => data.Close == minClose).Date };

            var maxSpike = historicalData.Max(data => data.ChangePercent).Value;
            model.MaxSpike = new StatisticValueModel { Value = maxSpike, Date = historicalData.Find(data => data.ChangePercent == maxSpike).Date };

            //investment return
            int numberOfShares = 1000;
            double closeFromMaxSpike = historicalData.Find(data => data.Date == model.MaxSpike.Date).Close;
            double closeFromTheFirstDay = historicalData.Last().Close;
            model.InvestmentReturn = Math.Round((closeFromMaxSpike - closeFromTheFirstDay) * numberOfShares, 2);
            
            return model;
        }
    }
}
