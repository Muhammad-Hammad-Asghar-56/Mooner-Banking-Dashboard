import React from 'react'
import ReactApexChart from 'react-apexcharts';
const SparkArea = () => {
    const data = {
        series: [
          {
            data: [10, 20, 18, 25, 15, 30, 22, 18, 12, 25, 20]
          }
        ],
        options: {
          chart: {
            type: 'line',
            sparkline: {
              enabled: true
            }
          },
          title: {
            text: 'Withdrawal',
            offsetX: 0,
            style: {
              fontSize: '24px',
            }
          },
          colors: ['#2ecc71'],
          stroke: {
            curve: 'smooth',
            width: 2
          },
          markers: {
            size: 0
          },
          tooltip: {
            enabled: false
          },
          grid: {
            show: false
          },
          xaxis: {
            labels: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            labels: {
              show: false
            }
          }
        }
      };
    
      return (
        <div id="sparkline-chart">
          <ReactApexChart options={data.options} series={data.series} type="line" height={"100%"} />
        </div>
      );
}

export default SparkArea
