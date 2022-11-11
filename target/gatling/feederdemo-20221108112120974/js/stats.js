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
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "percentiles1": {
        "total": "854",
        "ok": "854",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1636",
        "ok": "1636",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.083",
        "ok": "0.083",
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
        "total": "1334",
        "ok": "1334",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1603",
        "ok": "1603",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1737",
        "ok": "1737",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
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
    "count": 3,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.042",
        "ok": "0.042",
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
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "374",
        "ok": "374",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles1": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles2": {
        "total": "358",
        "ok": "358",
        "ko": "-"
    },
    "percentiles3": {
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "percentiles4": {
        "total": "373",
        "ok": "373",
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
        "total": "0.042",
        "ok": "0.042",
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
