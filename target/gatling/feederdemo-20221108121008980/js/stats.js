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
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1456",
        "ok": "1456",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "513",
        "ok": "513",
        "ko": "-"
    },
    "percentiles1": {
        "total": "758",
        "ok": "758",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1323",
        "ok": "1323",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1436",
        "ok": "1436",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
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
        "total": "1163",
        "ok": "1163",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1456",
        "ok": "1456",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1376",
        "ok": "1376",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1416",
        "ok": "1416",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1448",
        "ok": "1448",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1454",
        "ok": "1454",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
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
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles1": {
        "total": "336",
        "ok": "336",
        "ko": "-"
    },
    "percentiles2": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "percentiles3": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "percentiles4": {
        "total": "352",
        "ok": "352",
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
        "total": "1",
        "ok": "1",
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
