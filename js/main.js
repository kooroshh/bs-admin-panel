document.addEventListener("DOMContentLoaded", function () {

    let RegisterUser = document.getElementById("register-user");
    let CommentUser = document.getElementById("comment-user");
    let ProductUser = document.getElementById("product-user");
    let ActiveCommentUser = document.getElementById("acomment-user");
    let View = document.getElementById("view");

    

    let RegisterUserChart = new Chart(RegisterUser, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                data: [10000, 15200, 22345, 12300, 9600, 17900],
                fill: false,
                backgroundColor: "transparent",
                borderColor: '#fff',
                borderWidth: 2,
                pointBackgroundColor: "#fff",
                tension: 0.4,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: {
                    left: 5,
                    right: 5
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
            }
        }
    });

    let CommentUserChart = new Chart(CommentUser, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                data: [10000, 15200, 22345, 12300, 9600, 17900],
                fill: false,
                backgroundColor: "#fff",
                borderColor: '#fff',
                borderWidth: 0,
                pointBackgroundColor: "#fff",

            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: {
                    left: 5,
                    right: 5
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
            }
        }
    });

    let ProductUserChart = new Chart(ProductUser, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                data: [15200, 13400, 16700, 0, 12900, 17100],
                fill: false,
                backgroundColor: "transparent",
                borderColor: '#fff',
                borderWidth: 2,
                pointBackgroundColor: "#fff",
                tension: 0.4,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: {
                    left: 5,
                    right: 5
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
            }
        }
    });

    let ActiveCommentUserChart = new Chart(ActiveCommentUser, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                data: [10000, 15200, 22345, 12300, 9600, 17900],
                fill: false,
                backgroundColor: "#fff",
                borderColor: '#fff',
                borderWidth: 0,
                pointBackgroundColor: "#fff",

            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: {
                    left: 5,
                    right: 5
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
            }
        }
    });

    let ViewChart = new Chart(View, {
        type: 'line',
        data: {
            labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', "جمعه"],
            datasets: [{
                data: [15200, 13400, 16700, 0, 12900, 17100, 10000],
                fill: true,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderColor: '#555',
                borderWidth: 3,
                pointBackgroundColor: "#333",
                tension: 0.4,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
        }
    });



});