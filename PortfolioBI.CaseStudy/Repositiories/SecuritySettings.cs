using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Models;
using Newtonsoft.Json;
using System.IO;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Hosting;
using PortfolioBI.CaseStudy.Enums;
using PortfolioBI.CaseStudy.Repositories.Interfaces;

namespace PortfolioBI.CaseStudy.Repositiories
{
    public class SecuritySettings : ISecuritySettings
    {
        protected readonly IWebHostEnvironment _webHostEnvironment;
        protected readonly ILogger<SecuritySettings> _logger;
        private List<SecuritySettingsModel> _securitySettings;

        public SecuritySettings(IWebHostEnvironment webHostEnvironment, ILogger<SecuritySettings> logger)
        {
            _webHostEnvironment = webHostEnvironment;
            _logger = logger;
        }

        public List<SecuritySettingsModel> GetSettingsData()
        {
            if (_securitySettings == null)
            {
                LoadData();
            }
            return _securitySettings;
        }

        private void LoadData()
        {
            string webRootPath = _webHostEnvironment.ContentRootPath;
            var securitiesFile = Path.Combine(webRootPath, GeneralOptions.DataSourceFolder, GeneralOptions.SecuritySettingsFileName);
            try
            {
                _securitySettings = JsonConvert.DeserializeObject<List<SecuritySettingsModel>>(File.ReadAllText(securitiesFile));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Could not load file '{securitiesFile}'!");
            }

        }
    }
}
