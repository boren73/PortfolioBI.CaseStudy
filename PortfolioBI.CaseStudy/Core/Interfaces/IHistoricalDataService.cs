﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioBI.CaseStudy.Core.Interfaces
{
    interface IHistoricalDataService<T>
    {
        List<T> GetHistoricalData(string csvName);
    }
}