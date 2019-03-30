package se.maokei.dboard_server.controllers;

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

    public DockerApi(Vertx vertx) {
        this.vertx = vertx;
    }

    public void defaultRoute(RoutingContext rc) {
        JsonObject json = new JsonObject();
        json.put("message","Hello from docker api");
        rc.response().setStatusCode(200).end(json.encodePrettily());
    }

    public void getRunningContainers(RoutingContext rc) {
        List<Container> containers = null;
        //TODO
        try {
            final DockerClient docker = DefaultDockerClient.fromEnv().build();
            containers = docker.listContainers();
        } catch (DockerCertificateException e) {
            LOGGER.error("Error!");
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (DockerException e) {
            e.printStackTrace();
        }
        JsonArray ja = new JsonArray(containers);
        rc.response().setStatusCode(200).end(ja.encodePrettily());
    }

    public Router getApiSubrouter(Vertx vertx) {
        this.vertx = vertx;
        Router apiRoute = Router.router(vertx);
        apiRoute.route("/").handler(this::defaultRoute);
        apiRoute.route("/*").handler(BodyHandler.create());
        apiRoute.get("/containers").handler(this::getRunningContainers);

        //apiRoute.route("/admin*").handler(JWTAuthHandler.create(jwt));
        return apiRoute;
    }
}
