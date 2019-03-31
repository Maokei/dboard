package se.maokei.dboardServer;

import com.spotify.docker.client.DefaultDockerClient;
import com.spotify.docker.client.DockerCertificateException;
import com.spotify.docker.client.DockerClient;
import com.spotify.docker.client.DockerException;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

public class DockerVerticle extends AbstractVerticle {
  private static final Logger LOGGER = LoggerFactory.getLogger(LaunchVerticle.class);
  final DockerClient docker = DefaultDockerClient.fromEnv().build();


  public DockerVerticle() throws DockerCertificateException {

  }

  @Override
  public void start(Future<Void > future) {
    System.out.println("Docker verticle started " + docker.getHost());

    try {
      docker.listContainers().forEach(elem -> System.out.println("container " + elem));
    } catch (DockerException e) {
      e.printStackTrace();
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }
}
