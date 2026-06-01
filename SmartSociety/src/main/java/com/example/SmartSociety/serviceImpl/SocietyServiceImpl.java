package com.example.SmartSociety.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.Society;
import com.example.SmartSociety.repository.SocietyRepository;
import com.example.SmartSociety.service.SocietyService;

@Service
public class SocietyServiceImpl implements SocietyService {

    @Autowired
    private SocietyRepository repository;

    @Override
    public Society createSociety(Society society) {
        return repository.save(society);
    }

    @Override
    public List<Society> getAllSocieties() {
        return repository.findAll();
    }

    @Override
    public Society updateSociety(Long id, Society society) {

        Society existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Society not found"));

        existing.setSocietyName(society.getSocietyName());
        existing.setAddress(society.getAddress());
        existing.setTotalBlocks(society.getTotalBlocks());

        return repository.save(existing);
    }

    @Override
    public void deleteSociety(Long id) {
        repository.deleteById(id);
    }
}