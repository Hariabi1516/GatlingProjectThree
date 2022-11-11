package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class SearchAndEditAcer extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36")

	val Search = exec(
		http("Computer List")
	.get("/computers")
	)
		.pause(1)
		.exec(http("Enter Computer name")
			.get("/computers?f=Acer+Extensa+5220")
		)
		.pause(2)
		.exec(http("Filter by Name")
			.get("/computers/331")
		)
		.pause(3)

	val Edit = exec(http("Update Acer Extensa 5220")
		.post("/computers/331")
		.formParam("name", "Acer Extensa 5220")
		.formParam("introduced", "2010-01-01")
		.formParam("discontinued", "2020-01-01")
		.formParam("company", "2"))
		.pause(3)

	val scn = scenario("SearchAndEditAcer").exec(Search,Edit)

	val users = scenario(scenarioName = "Users").exec(Search)
	val Admin = scenario(scenarioName = "Admin").exec(Edit)
	setUp(
		users.inject(rampUsers(10).during(10)),
		Admin.inject(rampUsers(15).during(10))
	).protocols(httpProtocol)

	//setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}