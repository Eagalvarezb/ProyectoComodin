/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.umg.api.model;

/**
 *
 * @author mk
 */
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public class AsignacionModel {
    
    private int id;
    private int studentId;
    private int courseId;


    
    public int getId() {return id;}
    public void setId(int id) {this.id = id;}
    
    public int getStudentId() {return studentId;}
    public void setStudentId(int studentId) {this.studentId = studentId;}
    
    public int getCourseId() {return courseId;}
    public void setCourseId(int courseId) {this.courseId = courseId;}


}
