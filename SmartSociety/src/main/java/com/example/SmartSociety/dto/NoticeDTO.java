package com.example.SmartSociety.dto;



public class NoticeDTO {

    private String title;

    private String description;

    private String category;

    private String postedBy;

    public NoticeDTO() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(
            String description
    ) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(
            String category
    ) {
        this.category = category;
    }

    public String getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(
            String postedBy
    ) {
        this.postedBy = postedBy;
    }
}
