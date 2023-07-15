import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';


const RadialAnalytics = () => {
    const data = {
        series: [90, 65, 80, 45],
        options: {
            chart: {
                height: 350,    
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        enabled:false,
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                    }
                }
            },
            labels: ['Danish', 'Abdr', 'Talha', 'John'],
        },


    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type={data.options.chart.type} height={300} />
            </div>
        </div>
    )
}



export default RadialAnalytics
