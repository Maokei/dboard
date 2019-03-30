package se.maokei.dboard_server;

import com.spotify.docker.client.DefaultDockerClient;
import com.spotify.docker.client.DockerCertificateException;
import com.spotify.docker.client.DockerClient;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

public class DockerVeriticle extends AbstractVerticle {
  private static final Logger LOGGER = LoggerFactory.getLogger(LaunchVerticle.class);
  final DockerClient docker = DefaultDockerClient.fromEnv().build();

  public DockerVeriticle() throws DockerCertificateException {
  }

  @Override
  public void start(Future<Void > future) {

  }


}
