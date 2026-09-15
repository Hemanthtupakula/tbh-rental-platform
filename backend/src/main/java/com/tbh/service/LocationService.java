package com.tbh.service;

import com.tbh.entity.City;
import com.tbh.repository.CityRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class LocationService {

    private final CityRepository cityRepository;

    public LocationService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

    public Optional<City> getCityByName(String name) {
        return cityRepository.findByNameIgnoreCase(name);
    }
}
