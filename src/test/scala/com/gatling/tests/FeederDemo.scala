package com.gatling.tests
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FeederDemo extends Simulation {
  //Protocol
val httpProtocol = http.baseUrl("https://computer-database.gatling.io")
  //Scenario
  val feeder = csv("Data/Data1.csv").circular
  val scn = scenario("Feeder Demo")
    .repeat(1) {
    feed(feeder)
    .exec { session =>
      println("Name:  " + session("name").as[String])
      println("Job:  " + session("job").as[String])
      println("Page:  " + session("page").as[String])
      session
    }
      .pause(1)
      .exec(
        http("Go to Home Page")
          .get("/#{page}")
      )
}


//SetUp
setUp(scn.inject(atOnceUsers(3))).protocols(httpProtocol)
}
