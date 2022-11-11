var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "544",
        "ok": "-",
        "ko": "544"
    },
    "maxResponseTime": {
        "total": "637",
        "ok": "-",
        "ko": "637"
    },
    "meanResponseTime": {
        "total": "583",
        "ok": "-",
        "ko": "583"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "-",
        "ko": "34"
    },
    "percentiles1": {
        "total": "563",
        "ok": "-",
        "ko": "563"
    },
    "percentiles2": {
        "total": "606",
        "ok": "-",
        "ko": "606"
    },
    "percentiles3": {
        "total": "631",
        "ok": "-",
        "ko": "631"
    },
    "percentiles4": {
        "total": "636",
        "ok": "-",
        "ko": "636"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "-",
        "ko": "0.714"
    }
},
contents: {
"req_update-user-dd8f8": {
        type: "REQUEST",
        name: "Update user",
path: "Update user",
pathFormatted: "req_update-user-dd8f8",
stats: {
    "name": "Update user",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "544",
        "ok": "-",
        "ko": "544"
    },
    "maxResponseTime": {
        "total": "637",
        "ok": "-",
        "ko": "637"
    },
    "meanResponseTime": {
        "total": "583",
        "ok": "-",
        "ko": "583"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "-",
        "ko": "34"
    },
    "percentiles1": {
        "total": "563",
        "ok": "-",
        "ko": "563"
    },
    "percentiles2": {
        "total": "606",
        "ok": "-",
        "ko": "606"
    },
    "percentiles3": {
        "total": "631",
        "ok": "-",
        "ko": "631"
    },
    "percentiles4": {
        "total": "636",
        "ok": "-",
        "ko": "636"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "-",
        "ko": "0.714"
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
