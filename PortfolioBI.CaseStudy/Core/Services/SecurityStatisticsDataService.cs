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

            var maxChangePercent = historicalData.Max(data => data.ChangePercent).Value;
            var maxSpike = historicalData.Find(data => data.ChangePercent == maxChangePercent);
            model.MaxSpike = new StatisticSpikeValueModel { PercentValue = maxSpike.ChangePercent.Value, Value = maxSpike.Change.Value, Date = maxSpike.Date };

            //Return on Investment(ROI)
            int numberOfShares = 1000;
            double currentInvestment = historicalData.Find(data => data.Date == model.MaxSpike.Date).Close * numberOfShares;
            double invested = historicalData.Last().Close * numberOfShares;
            double roi = ((currentInvestment - invested) / invested) * 100;
            model.ROI = Math.Round(roi, 2);
            
            return model;
        }
    }
}
