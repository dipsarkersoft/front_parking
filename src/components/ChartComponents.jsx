// import React, { useEffect, useRef } from 'react';
// import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// // Register the required components
// ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

//  export const ChartComponents = () => {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);  

//   useEffect(() => {
   
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }


//     const ctx = chartRef.current.getContext('2d');
//     chartInstance.current = new ChartJS(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','Jul','Aug','Sep','Oct','Nov','Dec'],
//         datasets: [{
//           label: 'Income',
//           data: [123, 129, 100, 300, 112, 56,56,345,234,676,883,454],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });

    
//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []);  

//   return (
//     < div className='mt-5'> 
    
//     <h4>Mounthly Reveneu Charts</h4>
//     <div className="card m-4">

//     <canvas ref={chartRef} ></canvas>;

//     </div>
//     </div>
//   )
  
// };



import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export const ChartComponents = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Income',
          data: [123, 129, 100, 300, 112, 56, 56, 345, 234, 676, 883, 454],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)', 
            'rgba(54, 162, 235, 0.5)', 
            'rgba(255, 206, 86, 0.5)', 
            'rgba(75, 192, 192, 0.5)', 
            'rgba(153, 102, 255, 0.5)', 
            'rgba(255, 159, 64, 0.5)',
            'rgba(199, 199, 199, 0.5)', 
            'rgba(83, 102, 255, 0.5)', 
            'rgba(255, 99, 71, 0.5)', 
            'rgba(60, 179, 113, 0.5)', 
            'rgba(218, 165, 32, 0.5)', 
            'rgba(128, 0, 128, 0.5)' 
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(199, 199, 199, 1)',
            'rgba(83, 102, 255, 1)',
            'rgba(255, 99, 71, 1)',
            'rgba(60, 179, 113, 1)',
            'rgba(218, 165, 32, 1)',
            'rgba(128, 0, 128, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className=''>

    <h4 className='mt-2 mb-4'>Monthly Revenue Chart</h4>
      
      <div className="card">

      
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};
