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
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
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
            responsive: true,
            maintainAspectRatio: false,
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
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
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
            responsive: true,
            maintainAspectRatio: false,
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
                data: [15200, 13400, 16700, 11200, 12900, 17100, 10000],
                fill: true,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderColor: '#555',
                borderWidth: 3,
                pointBackgroundColor: "#333",
                tension: 0.4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
        }
    });



    let SidebarCollapse = new bootstrap.Collapse(document.getElementById('sidebar'), {
        toggle: false
    });



    function resize() {
        if (window.innerWidth <= 768) {
            SidebarCollapse.hide();
        } else {
            SidebarCollapse.show();
        }
    }
    window.addEventListener("resize", resize);

    document.getElementById("sidebar").addEventListener('hide.bs.collapse', function (e) {
        if (e.target == this) {
            document.getElementById("main").classList.remove("col-md-10");
        }
    })

    document.getElementById("sidebar").addEventListener('show.bs.collapse', function (e) {
        if (e.target == this) {
            document.getElementById("main").classList.add("col-md-10");
        }
    })




});