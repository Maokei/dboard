package se.maokei.dboardServer.controllers;

import com.spotify.docker.client.DefaultDockerClient;
import com.spotify.docker.client.DockerCertificateException;
import com.spotify.docker.client.DockerClient;
import com.spotify.docker.client.DockerException;
import com.spotify.docker.client.messages.Container;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

import java.util.List;

public class DockerApi {
    private static final Logger LOGGER = LoggerFactory.getLogger(DockerApi.class);
    private Vertx vertx;
    private DockerClient dockerClient;

    public DockerApi(Vertx vertx) {
        this.vertx = vertx;
        try {
            dockerClient = DefaultDockerClient.fromEnv().build();
        }catch(DockerCertificateException e) {
            LOGGER.error("Unable to get Docker client!");
            e.printStackTrace();
        }
    }

    public void defaultRoute(RoutingContext rc) {
        JsonObject json = new JsonObject();
        json.put("message","Hello from docker api");
        rc.response().setStatusCode(200).end(json.encodePrettily());
    }

    public void getRunningContainers(RoutingContext rc) {
        List<Container> containers = null;
        try {
            dockerClient.listContainers();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (DockerException e) {
            e.printStackTrace();
        }
        JsonArray ja = new JsonArray(containers);
        rc.response().setStatusCode(200).end(ja.encodePrettily());
    }

    public void getAvailableImages(RoutingContext rc) {
        try {
            rc.response().setStatusCode(200).end(new JsonArray(dockerClient.listImages()).encodePrettily());
        }catch(DockerException | InterruptedException e) {
            e.printStackTrace();
            rc.response().setStatusCode(400).end("Error");
        }
    }

    public Router getApiSubrouter(Vertx vertx) {
        this.vertx = vertx;
        Router apiRoute = Router.router(vertx);
        apiRoute.route("/").handler(this::defaultRoute);
        apiRoute.route("/*").handler(BodyHandler.create());
        apiRoute.get("/containers").handler(this::getRunningContainers);
        apiRoute.get("/images").handler(this::getAvailableImages);

        //apiRoute.route("/admin*").handler(JWTAuthHandler.create(jwt));
        return apiRoute;
    }
}
