using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Core.Interfaces;
using PortfolioBI.CaseStudy.Models;

namespace PortfolioBI.CaseStudy.Core.Services
{
    public class SecurityChartDataService : IHistoricalChartDataService<object, SecurityHistoricDataModel>
    {
        public List<object> GetChartData(List<SecurityHistoricDataModel> historicalData)
        {
            List<object> list = new List<object>();

            foreach (var data in historicalData)
            {
                list.Add(new {Date = data.Date, O = data.Open, H = data.High, L = data.Low, C = data.Close, CH = data.Change, CHP = data.ChangePercent, V = data.Volume });
            }
            return list;
        }
    }
}
