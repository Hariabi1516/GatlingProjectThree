var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1276",
        "ok": "1276",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "777",
        "ok": "777",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "429",
        "ok": "429",
        "ko": "-"
    },
    "percentiles1": {
        "total": "762",
        "ok": "762",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1164",
        "ok": "1164",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1253",
        "ok": "1253",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1271",
        "ok": "1271",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 25
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.667",
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
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1276",
        "ok": "1276",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "791",
        "ok": "791",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "percentiles1": {
        "total": "791",
        "ok": "791",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1034",
        "ok": "1034",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1228",
        "ok": "1228",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1266",
        "ok": "1266",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
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
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "398",
        "ok": "398",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1126",
        "ok": "1126",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "762",
        "ok": "762",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "percentiles1": {
        "total": "762",
        "ok": "762",
        "ko": "-"
    },
    "percentiles2": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1090",
        "ok": "1090",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1119",
        "ok": "1119",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
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
        "total": "0.333",
        "ok": "0.333",
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
