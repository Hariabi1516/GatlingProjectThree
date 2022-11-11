package com.gatling.tests.api
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class APITest1 extends Simulation{
//Protocol
val httpProtocol = http
  .baseUrl("https://reqres.in/api/users")

//Scenario
val scn = scenario("Get User")
  .exec(http("Get Single user")
    .get("/2")
    .check(status.is("200"))
    .check(jsonPath("$.data.first_name").is("Janet"))
  )
  .pause(1)
//Setup

setUp(
  scn.inject(rampUsers(10).during(5))
    .protocols(httpProtocol)
)
}
