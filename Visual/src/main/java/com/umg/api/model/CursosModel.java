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

public class CursosModel {
    
    private int id_curso;
    private int teacherId;
    private String nombre;
    private String codigo;
    private String modalidad;
    private float credito;
    
    public int getId_curso() {return id_curso;}
    public void setId_curso(int id_curso) {this.id_curso = id_curso;}
    
    public int getTeacherId() {return teacherId;}
    public void setTeacherId(int teacherId) {this.teacherId = teacherId;}
    
    public String getNombre() {return nombre;}
    public void setNombre(String nombre) {this.nombre = nombre;}
    
    public String getCodigo() {return codigo;}
    public void setCodigo(String codigo) {this.codigo = codigo;}
    
    public String getModalidad() {return modalidad;}
    public void setModalidad(String modalidad) {this.modalidad = modalidad;}
    
    public float getCredito() {return credito;}
    public void setCredito(float credito) {this.credito = credito;}



}
