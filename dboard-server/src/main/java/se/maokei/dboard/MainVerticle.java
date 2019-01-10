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
    Vertx vertx  = Vertx.vertx();
    ConfigRetriever cr = ConfigRetriever.create(vertx);
    cr.getConfig(config -> {
      if (config.succeeded()) {
        JsonObject conf = config.result();
        DeploymentOptions options = new DeploymentOptions().setConfig(conf);
        vertx.deployVerticle(new MainVerticle(), options);
      }
    });
  }

  private Future<Void> deployHelper(Vertx vertx, String name) {
    final Future<Void> future = Future.future();
    ConfigRetriever cr = ConfigRetriever.create(vertx);
    cr.getConfig(config -> {
      if (config.succeeded()) {
        JsonObject conf = config.result();
        System.out.println("Starting server with configuration: \n" + conf.encodePrettily());
        DeploymentOptions options = new DeploymentOptions().setConfig(conf);
        vertx.deployVerticle(name, options, result -> {
          if (result.failed()) {
            LOGGER.error("Failed to deploy verticle " + name);
            future.fail(result.cause());
          } else {
            LOGGER.info("Deployed verticle " + name);
            future.complete();
          }
        });
      }
    });
    return future;
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
