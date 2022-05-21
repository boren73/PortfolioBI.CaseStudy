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
using PortfolioBI.CaseStudy.Core.Enums;

namespace PortfolioBI.CaseStudy.Core.Services
{
    public class SecuritySerringsService : ISecuritySettingsService
    {
        protected readonly IWebHostEnvironment _webHostEnvironment;
        protected readonly ILogger<SecuritySerringsService> _logger;
        private List<SecuritySettingsModel> _securitySettings;

        public SecuritySerringsService(IWebHostEnvironment webHostEnvironment, ILogger<SecuritySerringsService> logger)
        {
            _webHostEnvironment = webHostEnvironment;
            _logger = logger;
        }

        public List<SecuritySettingsModel> GetSettingsData()
        { 
            if(_securitySettings == null)
            {
                LoadData();
            }
            return _securitySettings;
        }

        private void LoadData()
        { 
            string webRootPath = _webHostEnvironment.ContentRootPath;
            var securitiesFile = Path.Combine(webRootPath, "Configuration", GeneralOptions.SecuritySettingsFileName);
            try
            {
                _securitySettings  = JsonConvert.DeserializeObject<List<SecuritySettingsModel>>(File.ReadAllText(securitiesFile));
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, $"Could not load file '{securitiesFile}'!");
            }

        }
    }
}
