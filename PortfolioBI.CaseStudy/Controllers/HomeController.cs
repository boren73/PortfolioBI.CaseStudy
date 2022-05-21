using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using PortfolioBI.CaseStudy.Core.Interfaces;
using PortfolioBI.CaseStudy.Core.Services;
using PortfolioBI.CaseStudy.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IHistoricalDataService<SecurityHistoricDataModel> _securityHistoricDataService;
        private readonly IStatisticsDataService<SecurityStatisticDataModel, SecurityHistoricDataModel> _securityStatisticsDataService;
        private readonly List<SecuritySettingsModel>  _securitiesSettings;
        private readonly IHistoricalChartDataService<object, SecurityHistoricDataModel> _chartDataService;

        public HomeController(ILogger<HomeController> logger,
                              IHistoricalDataService<SecurityHistoricDataModel> securityHistoricDataService,
                              IStatisticsDataService<SecurityStatisticDataModel, SecurityHistoricDataModel> securityStatisticsDataService,
                              ISecuritySettingsService securitySettingsService,
                              IHistoricalChartDataService<object, SecurityHistoricDataModel> chartDataService)
        {
            _logger = logger;
            _securityHistoricDataService = securityHistoricDataService;
            _securityStatisticsDataService = securityStatisticsDataService;
            _securitiesSettings = securitySettingsService.GetSettingsData();
            _chartDataService = chartDataService;
        }

        public IActionResult Index()
        {
            return View("Index", GetSecuritiesModel());
        }
        [Route("Details/{id}")]
        public IActionResult Details(string id)
        {
            var securityModel = GetSecurityModel(id);

            return securityModel != null ? View("Details", securityModel) : View("ErrorSymbol");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private List<SecurityModel> GetSecuritiesModel()
        {
            List<SecurityModel>listOfSecurities = new List<SecurityModel>();
            
            foreach (var security in _securitiesSettings)
            {
                var historicalData = _securityHistoricDataService.GetHistoricalData(security.FileName);
                var statisticsData = _securityStatisticsDataService.GetStatisticsData(security.Id, historicalData);
                var chartData = _chartDataService.GetChartData(historicalData);
                listOfSecurities.Add(new SecurityModel(security.Id, security.SecurityName, historicalData, statisticsData, chartData));
            }

            return listOfSecurities;
        }

        private SecurityModel GetSecurityModel(string id)
        {
            var security = _securitiesSettings.Find(s => s.Id == id);
            if(security == null)
            {
                return null;
            }

            var historicalData = _securityHistoricDataService.GetHistoricalData(security.FileName);
            var statisticsData = _securityStatisticsDataService.GetStatisticsData(id, historicalData);
            var chartData = _chartDataService.GetChartData(historicalData);
            return new SecurityModel(security.Id, security.SecurityName, historicalData, statisticsData, chartData);
        }
    }
}
