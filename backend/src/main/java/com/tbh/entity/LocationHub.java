package com.tbh.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "location_hubs")
public class LocationHub {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String address;

    private String landmark;

    private String hubType; // AIRPORT, TECH_PARK, METRO, RAILWAY, CITY_CENTER

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    @JsonIgnore
    private City city;

    public LocationHub() {}

    public LocationHub(String name, String address, String landmark, String hubType) {
        this.name = name;
        this.address = address;
        this.landmark = landmark;
        this.hubType = hubType;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getLandmark() { return landmark; }
    public void setLandmark(String landmark) { this.landmark = landmark; }

    public String getHubType() { return hubType; }
    public void setHubType(String hubType) { this.hubType = hubType; }

    public City getCity() { return city; }
    public void setCity(City city) { this.city = city; }
}
