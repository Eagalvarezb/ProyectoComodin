/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.umg.api.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.classic.methods.HttpDelete;
import org.apache.hc.client5.http.classic.methods.HttpPut;
import org.apache.hc.client5.http.entity.EntityBuilder;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.ClassicHttpResponse;
import org.apache.hc.core5.http.ContentType;
import java.io.InputStream;
import java.util.List;

import com.umg.api.model.CursosModel;

/**
 * @author mk
 */
public class CursosService {
   private static final String BASE_URL = "http://localhost:8083/api/cursos";
   private static final ObjectMapper mapper = new ObjectMapper();
   
   
   
   //GET
    public List <CursosModel> getAll() throws Exception{
        try (CloseableHttpClient client = HttpClients.createDefault()){
           HttpGet request = new HttpGet(BASE_URL + "/");
           ClassicHttpResponse response = (ClassicHttpResponse) client.execute(request);
           InputStream is = response.getEntity().getContent();
           return mapper.readValue(is, new TypeReference<List<CursosModel>>(){});
       }
   }  
    public CursosModel getOne(int id) throws Exception {
        try (CloseableHttpClient client = HttpClients.createDefault()) {
            HttpGet request = new HttpGet(BASE_URL + "/" + id);
            ClassicHttpResponse response = (ClassicHttpResponse) client.execute(request);
            InputStream is = response.getEntity().getContent();
            JsonNode node = mapper.readTree(is);
            if (node.has("data") && !node.get("data").isNull()) {
                return mapper.treeToValue(node.get("data"), CursosModel.class);
            } else {
                return null;
            }
        }
    }

    
   
   //POST
    public CursosModel create(CursosModel c) throws Exception{
        try (CloseableHttpClient client = HttpClients.createDefault()){
            HttpPost request = new HttpPost(BASE_URL+ "/create/");
            
            String json = mapper.writeValueAsString(c);
            request.setEntity(EntityBuilder.create()
            .setText(json)
            .setContentType(ContentType.APPLICATION_JSON)
            .build()
            );
            
            ClassicHttpResponse response = (ClassicHttpResponse) client.execute(request);
            InputStream is = response.getEntity().getContent();
            return mapper.readValue(is, CursosModel.class);
       }
   }    
   
   //PUT
    public CursosModel update(int id_curso, CursosModel c) throws Exception{
        try (CloseableHttpClient client = HttpClients.createDefault()){
            HttpPut request = new HttpPut(BASE_URL + "/update/" + id_curso);
            String json = mapper.writeValueAsString(c);
           
            request.setEntity(EntityBuilder.create()
                .setText(json)
                .setContentType(ContentType.APPLICATION_JSON)
                .build()
            );
            
            ClassicHttpResponse response = (ClassicHttpResponse) client.execute(request);
            InputStream is = response.getEntity().getContent();
            return mapper.readValue(is, CursosModel.class);
       }
   }
    
    //DELETE
    public void delete (int id_curso) throws Exception{
        try(CloseableHttpClient client = HttpClients.createDefault()) {
            HttpDelete request = new HttpDelete(BASE_URL +"/delete/" + id_curso);
            client.execute(request).close();
        }
    }
   
}
