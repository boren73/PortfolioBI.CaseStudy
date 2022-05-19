using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using PortfolioBI.CaseStudy.Core.Abstracts;
using PortfolioBI.CaseStudy.Models;
using PortfolioBI.CaseStudy.Core.Enums;

namespace PortfolioBI.CaseStudy.Core.Services
{
    public class HistoricalDataCsvService : HistoricalDataCsvSource<HistoricDataModel>
    {
        public HistoricalDataCsvService(IWebHostEnvironment webHostEnvironment, ILogger logger)
        :base(webHostEnvironment, logger)
        { 
        }

        public override List<HistoricDataModel> GetHistoricalData(string csvName)
        {
            if(_historicalData == null)
            {
                LoadHistoricalData(csvName);
                SetChangeAndChangePercent();
            }

            
            return _historicalData;
        }

        protected override HistoricDataModel FromCsv(string historicDataLine)
        {
            if (string.IsNullOrEmpty(historicDataLine) || !historicDataLine.Contains(GeneralOptions.CsvSeparator))
            {
                return null;
            }

            try
            {
                var dataValues = historicDataLine.Split(GeneralOptions.CsvSeparator);
                var model =  new HistoricDataModel
                {
                    Date = DateTime.Parse(dataValues[(int)HistoricDataFields.Date]),
                    Open = GetHistoricValue(dataValues, HistoricDataFields.Open),
                    High = GetHistoricValue(dataValues, HistoricDataFields.High),
                    Low = GetHistoricValue(dataValues, HistoricDataFields.Low),
                    Close = GetHistoricValue(dataValues, HistoricDataFields.Close)

                };
                if(dataValues.Count() > 5)
                {
                    model.Change = GetHistoricValue(dataValues, HistoricDataFields.Change);
                    model.ChangePercent = GetHistoricValue(dataValues, HistoricDataFields.ChangePercent);
                }

                return model;
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, $"Problem with convertig csv line '{historicDataLine}' into HistoricDataModel");
                return null;
            }
        }
       
        private double GetHistoricValue(string[] dataValues, HistoricDataFields field)
        {
            return double.Parse(dataValues[(int)field]);
        }

        private void SetChangeAndChangePercent()
        {
            for (int i = 0; i < _historicalData.Count; i++)
            {
                var currentData = _historicalData[i];
                if (!currentData.Change.HasValue)
                {
                    if (i == 0)
                    {
                        currentData.Change = 0;
                        currentData.ChangePercent = 0;
                    }
                    else
                    {
                        double previousClose = _historicalData[i - 1].Close;
                        currentData.Change = currentData.Close - previousClose;
                        currentData.ChangePercent = (currentData.Change / previousClose) * 100;
                    }
                }
            }
        }
    }
}
