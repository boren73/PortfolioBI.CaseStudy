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
        private readonly ISecuritySettingsService _dataSourceService;
        public SecurityStatisticsDataService(ISecuritySettingsService dataSourceService)
        {
            _dataSourceService = dataSourceService;
        }

        public SecurityStatisticDataModel GetStatisticsData(string id, List<SecurityHistoricDataModel> historicalData)
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
            var securitySettings = _dataSourceService.GetSettingsData().Find(s => s.Id == id);
            if (securitySettings != null)
            { 
                int numberOfShares = securitySettings.ROI.NumberOfShares;
                double currentInvestment = historicalData.Find(data => data.Date == model.MaxSpike.Date).Close * numberOfShares;
                double invested = historicalData.FindLast(data => data.Date >= securitySettings.ROI.Invested).Close * numberOfShares;
                double roi = ((currentInvestment - invested) / invested) * 100;
                model.ReturnOnInvestment = new StatisticROIValueModel { Value = Math.Round(roi, 2), Date = maxSpike.Date, InvestedDate = securitySettings.ROI.Invested, NumberOfShares = numberOfShares };
            }
            return model;
        }
    }
}
