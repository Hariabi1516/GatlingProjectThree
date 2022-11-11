package com.gatling.tests.api
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PostPutDeleteAPIDemo extends Simulation {
  //Protocol
  val httpProtocol = http
    .baseUrl("https://reqres.in/api")

  //Scenario
val CreateUserScenario = scenario("Create User")
  .exec(
  http("Create user request")
    .post("/users")
    .header("Content-type", value = "application/json")
    .asJson
    .body(RawFileBody("Data/user.json")).asJson

    .check(
      status is 201,
      jsonPath("$.name") is "Nilan"
    )

  )
  .pause(2)

  val UpdateUserScenario = scenario("Update Scenario")
    .exec(
     http("Update User")
       .put("/users/2")
       .body(RawFileBody("Data/user.json")).asJson
      .check(
       status is 200,
        jsonPath("$.name") is "Nilan"
     )
    )
val DeleteUserScenario = scenario("Delete Scenario")
  .exec(
    http("Delect User")
      .delete("users/2")
      .check(
        status is 204
      )
  )
  //Setup
  setUp(
    CreateUserScenario.inject(rampUsers(10).during(5)),
    UpdateUserScenario.inject(rampUsers(8).during(4)),
    DeleteUserScenario.inject(rampUsers(5).during(2))
  ).protocols(httpProtocol)
}