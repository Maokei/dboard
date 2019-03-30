package se.maokei.dboard_server;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.http.HttpServerOptions;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.CorsHandler;
import io.vertx.ext.web.handler.StaticHandler;
import se.maokei.dboard_server.controllers.DockerApi;

import java.util.HashSet;

public class MainVerticle extends AbstractVerticle {
  private static final Logger LOGGER = LoggerFactory.getLogger(MainVerticle.class);

  public HashSet<String> getAllowedHeaders() {
    HashSet<String> set = new HashSet<>();
    set.add("x-requested-with");
    set.add("Access-Control-Allow-Origin");
    set.add("Access-Control-Allow-Headers");
    set.add("Access-Control-Request-Method");
    set.add("Authorization");
    set.add("X-PINGARUNER");
    set.add("origin");
    set.add("Content-Type");
    set.add("accept");
    return set;
  }

  public HashSet<HttpMethod> getAllowedMethods() {
    HashSet<HttpMethod> set = new HashSet<>();
    set.add(HttpMethod.POST);
    set.add(HttpMethod.GET);
    set.add(HttpMethod.DELETE);
    set.add(HttpMethod.PATCH);
    set.add(HttpMethod.OPTIONS);
    set.add(HttpMethod.PUT);
    return set;
  }

  @Override
  public void start(Future<Void> startFuture) throws Exception {
    Router router = Router.router(vertx);
    router.route().handler(CorsHandler.create("*")
            .allowedHeaders(getAllowedHeaders())
            .allowedMethods(getAllowedMethods()));

    DockerApi api = new DockerApi(vertx);
    router.mountSubRouter("/api/", api.getApiSubrouter(vertx));
    router.route().handler(StaticHandler.create().setCachingEnabled(false));
    router.route("/static/*").handler(StaticHandler.create());

    vertx.createHttpServer(new HttpServerOptions().setCompressionSupported(true)).requestHandler(router).listen(config().getInteger("http.port"), http -> {
      if (http.succeeded()) {
        startFuture.complete();
        LOGGER.info("Http server is running on port: " + config().getInteger("http.port"));
      } else {
        startFuture.fail(http.cause());
      }
    });
  }
}