using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Core.Interfaces;
using PortfolioBI.CaseStudy.Models;

namespace PortfolioBI.CaseStudy.Core.Services
{
    public class SecurityChartDataService : IHistoricalChartDataService<ChartData, SecurityHistoricDataModel>
    {
        public List<ChartData> GetChartData(List<SecurityHistoricDataModel> historicalData)
        {
            List<ChartData> list = new List<ChartData>();

            foreach (var data in historicalData)
            {
                list.Add(new ChartData { Open = data.Open, High = data.High, Low = data.Low, Close = data.Close, Volume = data.Volume });
            }
            return list;
        }
    }
}
