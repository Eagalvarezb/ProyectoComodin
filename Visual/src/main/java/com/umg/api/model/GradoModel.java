/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.umg.api.model;

import java.util.Date;

/**
 *
 * @author mk
 */
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public class GradoModel {
    
    private int id;
    private int courseId;
    private int studentId;
    private float nota;
    private String tipoEvaluacion;
    private Date fecha;

    public int getId() {return id;}
    public void setId(int id) {this.id = id;}
 
    public int getCourseId() {return courseId;}
    public void setCourseId(int courseId) {this.courseId = courseId;}
    
    public int getStudentId() {return studentId;}
    public void setStudentId(int studentId) {this.studentId = studentId;}

    public float getNota() {return nota;}
    public void setNota(float nota) {this.nota = nota;}

    public String getTipoEvaluacion() {return tipoEvaluacion;}
    public void setTipoEvaluacion(String tipoEvaluacion) {this.tipoEvaluacion = tipoEvaluacion;}

    public Date getFecha() {return fecha;}
    public void setFecha(Date fecha) {this.fecha = fecha;}
    
    

}
