package com.example.SmartSociety.serviceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.dto.NoticeDTO;
import com.example.SmartSociety.entity.Notice;
import com.example.SmartSociety.repository.NoticeRepository;
import com.example.SmartSociety.service.NoticeService;

import java.util.List;

@Service
public class NoticeServiceImpl
        implements NoticeService {

    @Autowired
    private NoticeRepository repository;

    
    public Notice createNotice(
            NoticeDTO dto
    ) {

        Notice notice = new Notice();

        notice.setTitle(dto.getTitle());

        notice.setDescription(
                dto.getDescription()
        );

        notice.setCategory(
                dto.getCategory()
        );

        notice.setPostedBy(
                dto.getPostedBy()
        );

        return repository.save(notice);
    }

   
    public List<Notice> getAllNotices() {

        return repository.findAll();
    }

    
    public Notice updateNotice(
            Long id,
            NoticeDTO dto
    ) {

        Notice notice =
                repository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Notice not found"
                                ));

        notice.setTitle(dto.getTitle());

        notice.setDescription(
                dto.getDescription()
        );

        notice.setCategory(
                dto.getCategory()
        );

        notice.setPostedBy(
                dto.getPostedBy()
        );

        return repository.save(notice);
    }

    
    public void deleteNotice(Long id) {

        repository.deleteById(id);
    }
}