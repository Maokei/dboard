package se.maokei.dboard_server;

import io.vertx.config.ConfigRetriever;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

public class LaunchVerticle extends AbstractVerticle {
  private static final Logger LOGGER = LoggerFactory.getLogger(LaunchVerticle.class);

  public static void main(String[] args) {
    Vertx vertx  = Vertx.vertx();
    ConfigRetriever cr = ConfigRetriever.create(vertx);
    cr.getConfig(config -> {
      if(config.succeeded()) {
        JsonObject conf = config.result();
        DeploymentOptions options = new DeploymentOptions().setConfig(conf);
        vertx.deployVerticle(new LaunchVerticle(), options);
      }
    });
  }
}
