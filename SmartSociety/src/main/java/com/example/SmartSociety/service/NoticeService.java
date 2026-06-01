package com.example.SmartSociety.service;



import java.util.List;

import com.example.SmartSociety.dto.NoticeDTO;
import com.example.SmartSociety.entity.Notice;

public interface NoticeService {

    Notice createNotice(
            NoticeDTO dto
    );

    List<Notice> getAllNotices();

    Notice updateNotice(
            Long id,
            NoticeDTO dto
    );

    void deleteNotice(Long id);
}
