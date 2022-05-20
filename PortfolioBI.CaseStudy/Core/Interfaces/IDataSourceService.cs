using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioBI.CaseStudy.Models;

namespace PortfolioBI.CaseStudy.Core.Interfaces
{
    public interface IDataSourceService
    {
        List<DataSourceModel> GetData();
    }
}
