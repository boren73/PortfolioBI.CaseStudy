using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Core.Interfaces;
using PortfolioBI.CaseStudy.Models;
using Newtonsoft.Json;
using System.IO;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Hosting;

namespace PortfolioBI.CaseStudy.Core.Services
{
    public class SecuritySerringsService : ISecuritySettingsService
    {
        protected readonly IWebHostEnvironment _webHostEnvironment;
        protected readonly ILogger<SecuritySerringsService> _logger;
        private List<SecuritySettingsModel> _dataSources;

        public SecuritySerringsService(IWebHostEnvironment webHostEnvironment, ILogger<SecuritySerringsService> logger)
        {
            _webHostEnvironment = webHostEnvironment;
            _logger = logger;
        }

        public List<SecuritySettingsModel> GetSettingsData()
        { 
            if(_dataSources == null)
            {
                LoadData();
            }
            return _dataSources;
        }

        private void LoadData()
        { 
            string webRootPath = _webHostEnvironment.ContentRootPath;
            var securitiesFile = Path.Combine(webRootPath, "Configuration", "securities.json");
            try
            {
                _dataSources  = JsonConvert.DeserializeObject<List<SecuritySettingsModel>>(File.ReadAllText(securitiesFile));
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, $"Could not load file '{securitiesFile}'!");
            }

        }
    }
}
