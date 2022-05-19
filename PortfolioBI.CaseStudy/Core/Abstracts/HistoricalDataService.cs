using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using PortfolioBI.CaseStudy.Core.Interfaces;

namespace PortfolioBI.CaseStudy.Core.Abstracts
{
    public abstract class HistoricalDataService<T> : IHistoricalDataService<T>
    {
        protected readonly IWebHostEnvironment _webHostEnvironment;
        protected readonly ILogger _logger;
        protected List<T> _historicalData;
        private static object lockObject = new object();
        
        public HistoricalDataService(IWebHostEnvironment webHostEnvironment, ILogger logger)
        {
            _webHostEnvironment = webHostEnvironment;
            _logger = logger;
        }

        protected abstract T FromCsv(string historicDataLine);

        public abstract List<T> GetHistoricalData(string csvName);

        public void LoadHistoricalData(string csvName)
        {
            string webRootPath = _webHostEnvironment.WebRootPath;
            string fullCsvPath = Path.Combine(webRootPath, csvName);

            if (!File.Exists(fullCsvPath))
            {
                _logger.LogError($"File'{fullCsvPath}' doesn't exist!");
                return;
            }

            try
            {
                lock (lockObject)
                {
                    _historicalData = File.ReadAllLines(fullCsvPath)
                                            .Skip(1)
                                            .Select(historicDataLine => FromCsv(historicDataLine))
                                            .Where(historicDataLine => historicDataLine != null)
                                            .ToList();
                }
            }
            catch(Exception ex) 
            {
                _logger.LogError(ex, $"Could not load historical data file '{fullCsvPath}'!");
            }
        }

        
    }
}
