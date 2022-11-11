var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1312",
        "ok": "1312",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "491",
        "ok": "491",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "370",
        "ok": "370",
        "ko": "-"
    },
    "percentiles1": {
        "total": "336",
        "ok": "336",
        "ko": "-"
    },
    "percentiles2": {
        "total": "384",
        "ok": "384",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1082",
        "ok": "1082",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1266",
        "ok": "1266",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.857",
        "ok": "0.857",
        "ko": "-"
    }
},
contents: {
"req_go-to-home-page-3116e": {
        type: "REQUEST",
        name: "Go to Home Page",
path: "Go to Home Page",
pathFormatted: "req_go-to-home-page-3116e",
stats: {
    "name": "Go to Home Page",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1312",
        "ok": "1312",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "percentiles1": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "percentiles2": {
        "total": "838",
        "ok": "838",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1217",
        "ok": "1217",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1293",
        "ok": "1293",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.429",
        "ok": "0.429",
        "ko": "-"
    }
}
    },"req_go-to-home-page-bba4e": {
        type: "REQUEST",
        name: "Go to Home Page Redirect 1",
path: "Go to Home Page Redirect 1",
pathFormatted: "req_go-to-home-page-bba4e",
stats: {
    "name": "Go to Home Page Redirect 1",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "391",
        "ok": "391",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "308",
        "ok": "308",
        "ko": "-"
    },
    "percentiles2": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "percentiles3": {
        "total": "383",
        "ok": "383",
        "ko": "-"
    },
    "percentiles4": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.429",
        "ok": "0.429",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
