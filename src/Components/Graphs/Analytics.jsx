import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Analytics = () => {
  const data={
    options: {
      chart: {
        id: "double-area"
      },
      title: {
        text: '$ 135,965',
        offsetY: 20,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: 'Transactions',
        offsetY:50,
        style: {
          fontSize: '16px',
        }
      },
      xaxis: {
        categories: [2009,2010,2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,2020,2021,2022,2023]
      },
      fill: {
        opacity: 1.0
      },dataLabels: {
        enabled: false // Set to false to hide labels
      }
    },
    series: [
      {
        name: "Series A",
        data: [300, 400, 450, 500, 490, 600, 700, 910,300, 400, 450, 500, 490, 600, 700, 910]
      },
      {
        name: "Series B",
        data: [500, 350, 450, 320, 550, 650, 750, 850, 450, 320, 550, 650, 750, 850,650,580]
      }
    ]
  };

  return (
    <div className=''>
      <div className="row">
        <div className="double-area-chart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="area"
            height={"300px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
