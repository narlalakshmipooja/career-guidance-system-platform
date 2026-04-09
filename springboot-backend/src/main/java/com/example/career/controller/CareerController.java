package com.example.career.controller;

import com.example.career.model.Career;
import com.example.career.service.CareerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/careers")
public class CareerController {

    @Autowired
    private CareerService careerService;

    @GetMapping
    public List<Career> getAllCareers() {
        return careerService.getAllCareers();
    }

    @PostMapping
    public Career addCareer(@RequestBody Career career) {
        return careerService.addCareer(career);
    }

    @PutMapping("/{id}")
    public Career updateCareer(@PathVariable Long id, @RequestBody Career career) {
        return careerService.updateCareer(id, career);
    }

    @DeleteMapping("/{id}")
    public void deleteCareer(@PathVariable Long id) {
        careerService.deleteCareer(id);
    }
}