using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using PortfolioBI.CaseStudy.Core.Abstracts;
using PortfolioBI.CaseStudy.Models;
using PortfolioBI.CaseStudy.Core.Enums;
using System.Globalization;
using System.Text.RegularExpressions;

namespace PortfolioBI.CaseStudy.Core.Services
{
    public class SecurityHistoricalDataService : HistoricalDataService<SecurityHistoricDataModel>
    {
        public SecurityHistoricalDataService(IWebHostEnvironment webHostEnvironment, ILogger<HistoricalDataService<SecurityHistoricDataModel>> logger)
        :base(webHostEnvironment, logger)
        { 
        }

        public override List<SecurityHistoricDataModel> GetHistoricalData(string csvName)
        {

            LoadHistoricalData(csvName);
            SetChangeAndChangePercent(); 
            return _historicalData;
        }

        protected override SecurityHistoricDataModel FromCsv(string historicDataLine)
        {
            if (string.IsNullOrEmpty(historicDataLine) || !historicDataLine.Contains(GeneralOptions.CsvSeparator))
            {
                return null;
            }

            try
            {
                var dataValues = GetFormattedHistoricalDataLine(historicDataLine).Split(GeneralOptions.CsvSeparator);

                var model = new SecurityHistoricDataModel
                {
                    Date = DateTime.Parse(dataValues[(int)HistoricDataFields.Date], new CultureInfo("en-US")),
                    Open = GetHistoricValue(dataValues, HistoricDataFields.Open),
                    High = GetHistoricValue(dataValues, HistoricDataFields.High),
                    Low = GetHistoricValue(dataValues, HistoricDataFields.Low),
                    Close = GetHistoricValue(dataValues, HistoricDataFields.Close),
                    Volume = int.Parse(dataValues[(int)HistoricDataFields.Volume])
                };
                if(dataValues.Count() > 6)
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

        private string GetFormattedHistoricalDataLine(string historicDataLine)
        {
            var volumePattern = Regex.Match(historicDataLine, "\"(.*?)\"").Value;
            if (string.IsNullOrEmpty(volumePattern))
            {
                return historicDataLine;
            }

            var formatedVolume = volumePattern.Replace("\"", "").Replace(",", "");
            return historicDataLine.Replace(volumePattern, formatedVolume);
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
                        currentData.Change = Math.Round(currentData.Close - previousClose, 2);
                        currentData.ChangePercent = Math.Round((currentData.Change.Value / previousClose) * 100, 2);
                    }
                }
            }
        }
    }
}
