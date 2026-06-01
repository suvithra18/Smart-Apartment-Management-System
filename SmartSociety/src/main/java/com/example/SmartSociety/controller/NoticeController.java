package com.example.SmartSociety.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.SmartSociety.dto.NoticeDTO;
import com.example.SmartSociety.entity.Notice;
import com.example.SmartSociety.service.NoticeService;

import java.util.List;

@RestController
@RequestMapping("/api/notices")
@CrossOrigin("*")
public class NoticeController {

    @Autowired
    private NoticeService service;

    @PostMapping
    public Notice createNotice(
            @RequestBody NoticeDTO dto
    ) {

        return service.createNotice(dto);
    }

    @GetMapping
    public List<Notice> getAllNotices() {

        return service.getAllNotices();
    }

    @PutMapping("/{id}")
    public Notice updateNotice(
            @PathVariable Long id,
            @RequestBody NoticeDTO dto
    ) {

        return service.updateNotice(id, dto);
    }

    @DeleteMapping("/{id}")
    public String deleteNotice(
            @PathVariable Long id
    ) {

        service.deleteNotice(id);

        return "Notice deleted successfully";
    }
}
