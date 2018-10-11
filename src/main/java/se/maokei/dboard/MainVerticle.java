package se.maokei.dboard;

import io.vertx.config.ConfigRetriever;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Future;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;

public class MainVerticle extends AbstractVerticle {
  private static final Logger LOGGER = LoggerFactory.getLogger(MainVerticle.class);
  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    ConfigRetriever configRetriever = ConfigRetriever.create(vertx);
    configRetriever.getConfig(config -> {
      if(config.succeeded()) {

        JsonObject jsonConf = new JsonObject();

        System.out.println(jsonConf);
        DeploymentOptions options = new DeploymentOptions().setConfig(jsonConf);

        vertx.deployVerticle(new MainVerticle(), options);
      }
    });
  }

  @Override
  public void start(Future<Void> startFuture) throws Exception {

    Router router = Router.router(vertx);

    vertx.createHttpServer().requestHandler(req -> {
      req.response()
        .putHeader("content-type", "text/plain")
        .end("Hello from Vert.x!");
    }).listen(8589, http -> {
      if (http.succeeded()) {
        startFuture.complete();
        System.out.println("HTTP server started on http://localhost:8080");
      } else {
        startFuture.fail(http.cause());
      }
    });

    router.route().handler(StaticHandler.create().setCachingEnabled(false));
    vertx.createHttpServer().requestHandler(router::accept).listen(config().getInteger("http_port"));
  }
}
