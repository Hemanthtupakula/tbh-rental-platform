package com.tbh.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ImageKitConfig {

    @Value("${tbh.imagekit.endpoint:https://ik.imagekit.io/hemanthhkt}")
    private String endpoint;

    @Value("${tbh.imagekit.public-key:public_NS0dUSt2SSRtcWhuLkyPHEKUjz0=}")
    private String publicKey;

    @Value("${tbh.imagekit.private-key:}")
    private String privateKey;

    @Value("${tbh.imagekit.id:hemanthhkt}")
    private String imageKitId;

    public String getEndpoint() { return endpoint; }
    public String getPublicKey() { return publicKey; }
    public String getPrivateKey() { return privateKey; }
    public String getImageKitId() { return imageKitId; }
}