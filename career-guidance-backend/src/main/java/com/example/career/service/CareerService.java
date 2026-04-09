package com.example.career.service;

import com.example.career.model.Career;
import com.example.career.repository.CareerRepository;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class CareerService {

    private final CareerRepository careerRepository;

    public CareerService(CareerRepository careerRepository) {
        this.careerRepository = careerRepository;
    }

    public List<Career> getAllCareers() {
        return careerRepository.findAll();
    }

    public void addCareer(Career career) {
        careerRepository.save(career);
    }

    public Career updateCareer(Long id, Career career) {
        Career existing = careerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Career not found: " + id));
        existing.setName(career.getName());
        existing.setDescription(career.getDescription());
        existing.setSalary(career.getSalary());
        existing.setSkills(career.getSkills());
        return careerRepository.save(existing);
    }

    public void deleteCareer(Long id) {
        if (!careerRepository.existsById(id)) {
            throw new EntityNotFoundException("Career not found: " + id);
        }
        careerRepository.deleteById(id);
    }
}
