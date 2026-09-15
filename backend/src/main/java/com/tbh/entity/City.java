package com.tbh.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cities")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private String state;

    private String stateCode; // e.g., "TS", "KA", "TN", "MH", "DL", "WB", "GA", "RJ", "GJ", "KL"

    private boolean active = true;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<LocationHub> hubs = new ArrayList<>();

    public City() {}

    public City(String name, String state) {
        this.name = name;
        this.state = state;
    }

    public City(String name, String state, String stateCode) {
        this.name = name;
        this.state = state;
        this.stateCode = stateCode;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getStateCode() { return stateCode; }
    public void setStateCode(String stateCode) { this.stateCode = stateCode; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public List<LocationHub> getHubs() { return hubs; }
    public void setHubs(List<LocationHub> hubs) { this.hubs = hubs; }

    public void addHub(LocationHub hub) {
        hubs.add(hub);
        hub.setCity(this);
    }
}
