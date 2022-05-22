using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Core.Interfaces;
using PortfolioBI.CaseStudy.Core.Services;
using PortfolioBI.CaseStudy.Models;
using PortfolioBI.CaseStudy.Repositories.Interfaces;
using PortfolioBI.CaseStudy.Repositiories;

namespace PortfolioBI.CaseStudy
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
   //         services.AddSingleton<Microsoft.Extensions.Logging.ILogger>(provider =>
   //provider.GetRequiredService<Microsoft.Extensions.Logging.ILogger<DataSourceService>>());
   //         services.AddSingleton<Microsoft.Extensions.Logging.ILogger>(provider =>
   //provider.GetRequiredService<Microsoft.Extensions.Logging.ILogger<HistoricalDataService<SecurityHistoricDataModel>>>());

            services.AddSingleton<ISecuritySettings, SecuritySettings>();
            services.AddScoped<IHistoricalData<SecurityHistoricDataModel>, SecurityHistoricalData>();
            services.AddScoped<IStatisticsDataService<SecurityStatisticDataModel, SecurityHistoricDataModel>, SecurityStatisticsDataService>();
            services.AddScoped<IHistoricalChartDataService<object, SecurityHistoricDataModel>, SecurityChartDataService>();

            //for chart
            services.AddServerSideBlazor();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
          
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
