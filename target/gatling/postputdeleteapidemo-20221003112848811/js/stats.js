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
        "total": "685",
        "ok": "-",
        "ko": "685"
    },
    "maxResponseTime": {
        "total": "1212",
        "ok": "-",
        "ko": "1212"
    },
    "meanResponseTime": {
        "total": "910",
        "ok": "-",
        "ko": "910"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "-",
        "ko": "197"
    },
    "percentiles1": {
        "total": "880",
        "ok": "-",
        "ko": "880"
    },
    "percentiles2": {
        "total": "1043",
        "ok": "-",
        "ko": "1043"
    },
    "percentiles3": {
        "total": "1178",
        "ok": "-",
        "ko": "1178"
    },
    "percentiles4": {
        "total": "1205",
        "ok": "-",
        "ko": "1205"
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
        "total": "0.833",
        "ok": "-",
        "ko": "0.833"
    }
},
contents: {
"req_create-user-req-49871": {
        type: "REQUEST",
        name: "Create User request",
path: "Create User request",
pathFormatted: "req_create-user-req-49871",
stats: {
    "name": "Create User request",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "685",
        "ok": "-",
        "ko": "685"
    },
    "maxResponseTime": {
        "total": "1212",
        "ok": "-",
        "ko": "1212"
    },
    "meanResponseTime": {
        "total": "910",
        "ok": "-",
        "ko": "910"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "-",
        "ko": "197"
    },
    "percentiles1": {
        "total": "880",
        "ok": "-",
        "ko": "880"
    },
    "percentiles2": {
        "total": "1043",
        "ok": "-",
        "ko": "1043"
    },
    "percentiles3": {
        "total": "1178",
        "ok": "-",
        "ko": "1178"
    },
    "percentiles4": {
        "total": "1205",
        "ok": "-",
        "ko": "1205"
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
        "total": "0.833",
        "ok": "-",
        "ko": "0.833"
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