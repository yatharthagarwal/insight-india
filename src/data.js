
// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top'
//         },
//         title: {
//             display: true,
//             text: "Average Tree Loss"
//         }
//     },
//     scales: {
//         y: {
//             ticks: {
//                 color: '#ffffff',  // Color for x-axis tick labels
//                 font: {
//                     size: 12,     // Font size for x-axis tick labels
//                 }
//             },
//             beginAtZero: false,
//         },
//         x: {
//             ticks: {
//                 color: '#ffffff',  // Color for x-axis tick labels
//                 font: {
//                     size: 12,     // Font size for x-axis tick labels
//                 }
//             },
//             title: {
//                 display: true,
//                 text: 'Years'
//             }
//         }
//     }
// };

export const mapper = {
    "Flood": {
        "India": [
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Crops in India"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Crops in India",
                            data: [42.08,40.52,77.8,44.44,14.12,38.28,56.76,42.55,24.04,83.18,30.17,56.87,5.87,80.15,133.31,144.61,281.9,162.78,423.13,98.56,428.03,411.64,271.49,595.03,720.61,911.09,169.97,366.37,524.56,589.4,1285.85,906.09,1425.37,1231.58,1154.64,2510.9,956.74,695.61,579.015,1027.578,1308.627,888.622,1714.787,1124.491,692.743,2594.167,1850.873,4246.622,688.481,913.092,7307.23,778.694,2370.923,2850.668,3121.532,3401.563,4232.609,5887.38,1393.847,1534.108,6378.078,7255.151,17043.948,4052.723,6923.8],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }, 
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Houses in India"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Houses in India",
                            data: [7.42,6.561,20.945,8.047,4.979,3.896,9.418,14.309,0.889,10.655,3.701,4.588,0.195,2.544,14.264,41.112,54.423,48.606,80.241,12.46,52.482,72.434,34.097,92.16,152.29,167.574,210.606,170.851,159.63,383.869,332.327,181.308,583.855,534.41,464.49,741.6,149.82,213.733,180.421,306.284,528.324,165.206,1307.894,176.589,152.504,1108.783,1299.057,680.943,816.474,599.368,756.481,879.601,380.531,3636.848,2113.108,1141.891,10809.795,875.952,410.475,240.572,2032.83,581.978,8046.969,114.676,9176.48],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }, 
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Public Utilities in India"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Public Utilities in India",
                            data: [2.9,10.15,3.98,1.14,4.27,1.79,20.02,6.31,6.44,1.05,2.74,5.149,1.07,5.736,7.857,25.373,68.112,76.441,129.113,47.174,88.489,84.942,166.05,201.495,328.948,376.1,233.627,303.283,512.314,671.607,873.429,818.164,2050.043,1982.535,950.59,1377.8,1298.77,455.266,728.893,2010.67,1445.534,740.762,679.627,861.393,1985.934,5157.771,462.83,3936.979,5604.461,1062.083,3262.154,1656.09,4688.219,13303.926,8049.037,5046.481,17509.353,12757.253,6053.57,9169.968,38937.843,7710.948,32200.182,1507.926,2179.35],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }
        ],
        "Uttar Pradesh": [
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Crops in Uttar Pradesh"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Crops in Uttar Pradesh",
                            data: [10.82,6.82,26.38,21.48,10.67,0,0,0,0,19.351,18.306,11.208,0.11,6.909,55.55,8.31,34.601,43,108.12,2.842,67.45,57.517,30.78,186,75,382,51.769,190.118,365,330.87,624.69,260.37,967.53,258,128.33,685.76,0,481.758,116.4,181.28,368.06,295.201,0,678,0,224.523,10.277,17.389,44.745,2.583,448.574,0,0,0,0,189.018,42.102,0,199.94,6.979,0,0,-1,123.776,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            },
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Houses in Uttar Pradesh"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Houses in Uttar Pradesh",
                            data: [1.11,0.19,2.82,6.6,4.62,0,0,0,0.027,1.172,2.741,0.32,0.01,0.708,5.003,0.393,2.765,20.8,20.257,1.01,10.768,12.785,2.908,22.5,5,90,1.722,100.124,122.776,254.55,129.13,21.49,248.08,20.564,38.94,148.42,0,60.52,31.35,55.58,118.63,37.121,0,70,0,59.346,3.005,13.539,17.85,1.202,99.859,0,1.33,0,0,213.054,4.277,0,79.368,11.199,0,0,-1,-1,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            },
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Public Utilities in Uttar Pradesh"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Public Utilities in Uttar Pradesh",
                            data: [1,1.5,0.6,0.5,0,0,0.014,0,0.27,0.103,0.456,0.004,0.01,-1,1.053,0.128,1.087,5.28,46.1,0,3.49,35,5.08,38.68,16.6,89.36,0,75.95,117.2,177.41,255.51,182.2,1185.33,191.65,120.98,0,0,23.987,0,298.73,211.22,311.4,0,0,0,340.9,0,0.24,3252.83,0.01,127.444,0,2.44,0,0,322.488,63.722,0,1159.13,99.699,0,0,-1,-1,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }
        ],
        "Madhya Pradesh": [
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Crops in Madhya Pradesh"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Crops in Madhya Pradesh",
                            data: [0.07,-1,3,-1,-1,-1,0.072,-1,-1,0.032,-1,0.005,-1,-1,0.43,-1,0.006,-1,0.313,-1,58.828,0.488,0.06,0.48,-1,3.404,0.022,-1,-1,25.23,7.112,1.139,-1,11.16,0.01,-1,-1,0,0.053,0,0,31.55,0,0,0,19.677,10.608,-1,-1,1.987,22.717,-1,5.98,0,0,0,0,0,0.004,0,0,0,-1,-1,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            },
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Houses in Madhya Pradesh"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Houses in Madhya Pradesh",
                            data: [-1,-1,4,1.1,0.012,0.009,0.145,-1,-1,0.099,-1,0.08,-1,-1,0.11,-1,0.128,-1,0.117,-1,6.829,0.32,0.047,0.081,-1,2.234,0.005,-1,-1,2.8,3.91,0.262,0.03,3.345,0.02,-1,-1,0,0.846,0,0,0,0,0,0,4.741,8.75,0.05,0.02,1.12,7.367,-1,173.88,0,0,0,0,0.068,6.514,0,0,0,-1,-1,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            },
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Public Utilities in Madhya Pradesh"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Public Utilities in Madhya Pradesh",
                            data: [0.05,1,0.01,1.015,0.08,-1,-1,-1,0.692,0.006,-1,0.099,1,-1,0.01,-1,0.016,1.57,0.54,0.017,3.751,0.086,0.012,0.031,-1,0.146,0.007,-1,-1,2.61,9.883,11.171,7.363,2.407,-1,-1,-1,1.674,0.004,0,0,0,0,0,0,0.438,-1,-1,-1,-1,51.6,-1,232.01,0,0,0,0,0.001,2.449,0,35.23,464.06,69.01,207.86,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }
        ],
        "Bihar": [
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Crops in Bihar"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Crops in Bihar",
                            data: [29,15,20.3,5.22,-1,3.198,-1,-1,13.25,9.57,0.758,11.088,1.804,39,19.34,10.14,28.8,14.74,143.912,1.62,19.706,294.95,136.553,94.639,11.788,94.603,19.015,-1,72.132,97.004,23.434,185.439,30.342,103.66,501.32,49.87,7.05,18.17,23.61,0.581,66.825,45.068,195.143,70.315,57.377,366.967,242.039,75.534,267.218,511.495,62.66,522.056,11.64,7.06,768.378,34.196,21.83,3.119,59.87,1.638,105.72,176.4,-1,443.53,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            },
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Houses in Bihar"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Houses in Bihar",
                            data: [6,5,1.12,0.51,-1,-1,-1,-1,-1,0.516,0.006,0.475,-1,-1,0.27,0.01,-1,0.32,29.305,0.072,0.346,52.876,9.692,30.035,0.454,9.122,1.034,3.723,3.957,6.865,1.182,22.915,4.327,4.387,217.74,2.11,1.61,1.6,6.138,0.161,5.742,2.178,75.104,14.005,30.567,55.037,53.85,148.563,173.584,526.215,20.32,758.095,3.828,12.26,831.445,84.514,5.282,7.049,17.792,1.312,24.02,10.78,0.694,44.262,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            },
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Damage to Public Utilities in Bihar"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Value in Crores', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                    datasets: [
                        {
                            label: "Damage to Public Utilities in Bihar",
                            data: [1.5,1.5,0.205,-1,-1,0.01,-1,0.006,-1,0.045,-1,1.71,-1,-1,0.06,0.01,7.2,0.017,44.22,0.01,0.009,34.01,119.518,81.32,0.044,75.13,0.14,54.01,2.986,9.553,1.669,27.177,1.871,200,490.55,1.51,0.84,1.82,1.399,0.008,0.441,1.313,21.836,8.462,20.381,92.84,54.1,28.547,183.538,408.922,1035.16,1030.496,3.05,84.562,642.415,97.71,5.301,1.592,25.786,1.622,16.61,5.4,62,40.97,-1],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }
        ]
    },
    "Earthquake": {
        "India": [
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Share of GDP %"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'GDP %', // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1966,1967,1970,1975,1980,1984,1986,1988,1991,1993,1997,1999,2001,2002,2004,2005,2011,2013,2015,2016,2021],
                    datasets: [
                        {
                            label: "Damage to Public Utilities in Bihar",
                            data: [0,0.000797847,0,0,0,0,0.002008145,0.02410738,0.022213556,0.10025219,0.008897063,0.0004359,0.54033345,0,0.14422931,0.12189449,0,0.006463005,0,0.003268263,0],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            },
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Total Damage in '000 US $"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: "'000 US $", // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [2001,2004,2005,2013,2016],
                    datasets: [
                        {
                            label: "Total Damage in '000 US $",
                            data: [2623000,1022800,1000000,120000,75000],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }
        ]
    },
    "Drought": {
        "India": [
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Total Damage in '000 US $"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: "Damage in '000 US $", // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1965,1972,1979,1996,2000,2002,2015,2018],
                    datasets: [
                        {
                            label: "Total Damage due to Droughts",
                            data: [100000,100000,200000,542400,588000,910722,3000000,1100000],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }
        ]
    },
    "Cyclone": {
        "India": [
            {
                "options": {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: "Total Damage ('000 US$)"
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: "Damage in '000 US $", // Label for the y-axis
                                color: '#000000', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the y-axis title
                                    weight: 'bold',
                                },
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',  // Color for x-axis tick labels
                                font: {
                                    size: 12,     // Font size for x-axis tick labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Years', // Label for the x-axis
                                color: '#000000f', // Set to black for better visibility
                                font: {
                                    size: 14, // Font size for the x-axis title
                                    weight: 'bold',
                                },
                            }
                        }
                    }
                },
                "data": {
                    labels: [1966,1969,1971,1976,1976,1976,1977,1979,1982,1982,1983,1983,1984,1986,1988,1990,1990,1993,1994,1995,1995,1996,1998,1999,1999,1999,2002,2003,2009,2011,2013,2013,2014,2016,2018,2018,2018,2019,2020,2020,2020,2021,2021,2023],
                    datasets: [
                        {
                            label: "Total Damage due to Cyclones",
                            data: [4200,8330,30000,260000,3378,3378,498535,12800,625420,120000,56000,510000,35000,272943,13000,580000,112800,100000,19100,46300,2000,1500300,469000,20000,470000,2500000,416,28000,300000,375625,633471,262000,7000000,1000000,920000,775000,100000,1810000,13500000,820000,600000,1400000,3000000,125000],
                            fill: false,
                            backgroundColor: "#ff4500",
                            borderColor: "#ff4500",
                            tension: 0.3,
                        }
                    ]
                }
            }
        ]
    }
};

// export const floodDamageCropsIndia = {
//     labels: [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
//     datasets: [
//         {
//             label: "Damage to Crops in India",
//             data: [42.08,40.52,77.8,44.44,14.12,38.28,56.76,42.55,24.04,83.18,30.17,56.87,5.87,80.15,133.31,144.61,281.9,162.78,423.13,98.56,428.03,411.64,271.49,595.03,720.61,911.09,169.97,366.37,524.56,589.4,1285.85,906.09,1425.37,1231.58,1154.64,2510.9,956.74,695.61,579.015,1027.578,1308.627,888.622,1714.787,1124.491,692.743,2594.167,1850.873,4246.622,688.481,913.092,7307.23,778.694,2370.923,2850.668,3121.532,3401.563,4232.609,5887.38,1393.847,1534.108,6378.078,7255.151,17043.948,4052.723,6923.8],
//             fill: false,
//             backgroundColor: "#ff4500",
//             borderColor: "#ff4500",
//             tension: 0.3,
//         }
//     ]
// };

export const floods = [
    {
        "title": "Damage to Crops in India",
        "xlabel": "Year",
        "ylabel": "Value in Rs.Crore",
        "xaxis": [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        "yaxis": [42.08,40.52,77.8,44.44,14.12,38.28,56.76,42.55,24.04,83.18,30.17,56.87,5.87,80.15,133.31,144.61,281.9,162.78,423.13,98.56,428.03,411.64,271.49,595.03,720.61,911.09,169.97,366.37,524.56,589.4,1285.85,906.09,1425.37,1231.58,1154.64,2510.9,956.74,695.61,579.015,1027.578,1308.627,888.622,1714.787,1124.491,692.743,2594.167,1850.873,4246.622,688.481,913.092,7307.23,778.694,2370.923,2850.668,3121.532,3401.563,4232.609,5887.38,1393.847,1534.108,6378.078,7255.151,17043.948,4052.723,6923.8]
    },
    {
        "title": "Damage to Houses in India",
        "xlabel": "Year",
        "ylabel": "Value in Rs.Crore",
        "xaxis": [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        "yaxis": [7.42,6.561,20.945,8.047,4.979,3.896,9.418,14.309,0.889,10.655,3.701,4.588,0.195,2.544,14.264,41.112,54.423,48.606,80.241,12.46,52.482,72.434,34.097,92.16,152.29,167.574,210.606,170.851,159.63,383.869,332.327,181.308,583.855,534.41,464.49,741.6,149.82,213.733,180.421,306.284,528.324,165.206,1307.894,176.589,152.504,1108.783,1299.057,680.943,816.474,599.368,756.481,879.601,380.531,3636.848,2113.108,1141.891,10809.795,875.952,410.475,240.572,2032.83,581.978,8046.969,114.676,9176.48]
    },
    {
        "title": "Damage to Public Utilities in India",
        "xlabel": "Year",
        "ylabel": "Value in Rs.Crore",
        "xaxis": [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        "yaxis": [2.9,10.15,3.98,1.14,4.27,1.79,20.02,6.31,6.44,1.05,2.74,5.149,1.07,5.736,7.857,25.373,68.112,76.441,129.113,47.174,88.489,84.942,166.05,201.495,328.948,376.1,233.627,303.283,512.314,671.607,873.429,818.164,2050.043,1982.535,950.59,1377.8,1298.77,455.266,728.893,2010.67,1445.534,740.762,679.627,861.393,1985.934,5157.771,462.83,3936.979,5604.461,1062.083,3262.154,1656.09,4688.219,13303.926,8049.037,5046.481,17509.353,12757.253,6053.57,9169.968,38937.843,7710.948,32200.182,1507.926,2179.35]
    },

    {
        "title": "Damage to Crops in UP",
        "xlabel": "Year",
        "ylabel": "Value in Rs.Crore",
        "xaxis": [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        "yaxis": [10.82,6.82,26.38,21.48,10.67,0,0,0,0,19.351,18.306,11.208,0.11,6.909,55.55,8.31,34.601,43,108.12,2.842,67.45,57.517,30.78,186,75,382,51.769,190.118,365,330.87,624.69,260.37,967.53,258,128.33,685.76,0,481.758,116.4,181.28,368.06,295.201,0,678,0,224.523,10.277,17.389,44.745,2.583,448.574,0,0,0,0,189.018,42.102,0,199.94,6.979,0,0,-1,123.776,-1]
    },
    {
        "title": "Damage to Houses in UP",
        "xlabel": "Year",
        "ylabel": "Value in Rs.Crore",
        "xaxis": [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        "yaxis": [1.11,0.19,2.82,6.6,4.62,0,0,0,0.027,1.172,2.741,0.32,0.01,0.708,5.003,0.393,2.765,20.8,20.257,1.01,10.768,12.785,2.908,22.5,5,90,1.722,100.124,122.776,254.55,129.13,21.49,248.08,20.564,38.94,148.42,0,60.52,31.35,55.58,118.63,37.121,0,70,0,59.346,3.005,13.539,17.85,1.202,99.859,0,1.33,0,0,213.054,4.277,0,79.368,11.199,0,0,-1, -1, -1]
    },
    {
        "title": "Damage to Public Utilities in UP",
        "xlabel": "Year",
        "ylabel": "Value in Rs.Crore",
        "xaxis": [1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        "yaxis": [1,1.5,0.6,0.5,0,0,0.014,0,0.27,0.103,0.456,0.004,0.01,-1,1.053,0.128,1.087,5.28,46.1,0,3.49,35,5.08,38.68,16.6,89.36,0,75.95,117.2,177.41,255.51,182.2,1185.33,191.65,120.98,0,0,23.987,0,298.73,211.22,311.4,0,0,0,340.9,0,0.24,3252.83,0.01,127.444,0,2.44,0,0,322.488,63.722,0,1159.13,99.699,0,0,-1, -1,-1]
    }
]