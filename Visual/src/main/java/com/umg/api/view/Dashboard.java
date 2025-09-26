/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package com.umg.api.view;
import java.awt.Color;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;
import javax.swing.JInternalFrame;
import javax.swing.JPanel;

import com.umg.api.view.*;

/**
 * @author MK
 * @Partner Eimy
 * @Partner Gab
 */

public class Dashboard extends javax.swing.JFrame {

/**
* Creates new form Dash
*/
    
    int xmouse, ymouse;
    private JPanel[] paneles;
    public Dashboard() {
        initComponents();
        this.setLocationRelativeTo(null);
//-----------------------------------------------
// <editor-fold defaultstate="collapsed" desc="Fecha">
LocalDate actualdate = LocalDate.now();
    String dayweek = capitalize(actualdate.getDayOfWeek().getDisplayName(TextStyle.FULL, new Locale("es", "ES")));
        int daymonth = actualdate.getDayOfMonth();
        String month = capitalize(actualdate.getMonth().getDisplayName(TextStyle.FULL, new Locale("es", "ES")));
        int year = actualdate.getYear();
        String mensaje = "Hoy es " + dayweek + " " + daymonth + " de " + month + " de " + year;
    fecha.setText(mensaje);
// </editor-fold>
//-----------------------------------------------     
// <editor-fold defaultstate="collapsed" desc="Configuraciones de Botones">
paneles = new JPanel[] { btn_Student, btn_Grado, btn_Teacher, btn_Cursos, btn_Asignacion }; 
    Color colorNormal = new Color(0,0,153);  
    Color colorHover = new Color(65,65,246);   
    Color colorSeleccionado = new Color(39,45,179);

    for (JPanel panel : paneles) {
        panel.addMouseListener(new java.awt.event.MouseAdapter() {
            @Override
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                if (panel.getBackground() != colorSeleccionado) { panel.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR)); panel.setBackground(colorHover); }
            }

            @Override
            public void mouseExited(java.awt.event.MouseEvent evt) {
                if (panel.getBackground() != colorSeleccionado) { panel.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR)); panel.setBackground(colorNormal); }
            }

            @Override
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                for (JPanel p : paneles) { p.setBackground(colorNormal); } panel.setBackground(colorSeleccionado);
            }
        });

    }// </editor-fold>
//-----------------------------------------------    
// <editor-fold defaultstate="collapsed" desc="Pantalla de inicio Dashboard">
Initial_Internal_Frame Init= new Initial_Internal_Frame();
desktop.add(Init);
Init.setVisible(true);
    try{
        
        Init.setSelected(true);
        }catch (java.beans.PropertyVetoException e){
            e.printStackTrace();
        }
// </editor-fold>
//-----------------------------------------------    
}
    
    public static String capitalize(String texto) {
        if (
            texto == null || texto.isEmpty()
            ) return texto; 
            return texto.substring(0, 1).toUpperCase() + texto.substring(1);
    }

    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Background = new javax.swing.JPanel();
        exit_cube = new javax.swing.JPanel();
        exit_txt = new javax.swing.JLabel();
        bar = new javax.swing.JPanel();
        Header = new javax.swing.JPanel();
        mini_message = new javax.swing.JLabel();
        Menu = new javax.swing.JPanel();
        Title1 = new javax.swing.JLabel();
        Title = new javax.swing.JLabel();
        Title_Separator = new javax.swing.JSeparator();
        btn_Teacher = new javax.swing.JPanel();
        btb_emp_txt1 = new javax.swing.JLabel();
        btn_Student = new javax.swing.JPanel();
        jLabel3 = new javax.swing.JLabel();
        btn_Grado = new javax.swing.JPanel();
        btb_emp_txt = new javax.swing.JLabel();
        btn_Cursos = new javax.swing.JPanel();
        btb_emp_txt2 = new javax.swing.JLabel();
        btn_Asignacion = new javax.swing.JPanel();
        btb_emp_txt3 = new javax.swing.JLabel();
        Sub_Header = new javax.swing.JPanel();
        fecha = new javax.swing.JLabel();
        desktop = new javax.swing.JDesktopPane();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setLocation(new java.awt.Point(0, 0));
        setMaximumSize(new java.awt.Dimension(1291, 904));
        setMinimumSize(new java.awt.Dimension(1291, 904));
        setUndecorated(true);
        setSize(new java.awt.Dimension(1291, 904));
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        Background.setBackground(new java.awt.Color(255, 255, 255));
        Background.setMaximumSize(new java.awt.Dimension(1291, 904));
        Background.setMinimumSize(new java.awt.Dimension(1291, 904));
        Background.setPreferredSize(new java.awt.Dimension(1291, 904));
        Background.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        exit_cube.setBackground(new java.awt.Color(0, 0, 153));
        exit_cube.setMinimumSize(new java.awt.Dimension(50, 50));

        exit_txt.setBackground(new java.awt.Color(0, 0, 153));
        exit_txt.setFont(new java.awt.Font("Roboto Light", 0, 36)); // NOI18N
        exit_txt.setForeground(new java.awt.Color(255, 255, 255));
        exit_txt.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        exit_txt.setText("x");
        exit_txt.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        exit_txt.setPreferredSize(new java.awt.Dimension(18, 44));
        exit_txt.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                exit_txtMouseClicked(evt);
            }
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                exit_txtMouseEntered(evt);
            }
            public void mouseExited(java.awt.event.MouseEvent evt) {
                exit_txtMouseExited(evt);
            }
        });

        javax.swing.GroupLayout exit_cubeLayout = new javax.swing.GroupLayout(exit_cube);
        exit_cube.setLayout(exit_cubeLayout);
        exit_cubeLayout.setHorizontalGroup(
            exit_cubeLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(exit_txt, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        exit_cubeLayout.setVerticalGroup(
            exit_cubeLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(exit_txt, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        Background.add(exit_cube, new org.netbeans.lib.awtextra.AbsoluteConstraints(1247, 0, 44, -1));

        bar.setBackground(new java.awt.Color(255, 255, 255));
        bar.setMaximumSize(new java.awt.Dimension(1280, 44));
        bar.setMinimumSize(new java.awt.Dimension(1280, 44));
        bar.setOpaque(false);
        bar.addMouseMotionListener(new java.awt.event.MouseMotionAdapter() {
            public void mouseDragged(java.awt.event.MouseEvent evt) {
                barMouseDragged(evt);
            }
        });
        bar.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mousePressed(java.awt.event.MouseEvent evt) {
                barMousePressed(evt);
            }
        });

        javax.swing.GroupLayout barLayout = new javax.swing.GroupLayout(bar);
        bar.setLayout(barLayout);
        barLayout.setHorizontalGroup(
            barLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );
        barLayout.setVerticalGroup(
            barLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 50, Short.MAX_VALUE)
        );

        Background.add(bar, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1290, 50));

        Header.setBackground(new java.awt.Color(255, 255, 255));
        Header.setMaximumSize(new java.awt.Dimension(1030, 80));
        Header.setMinimumSize(new java.awt.Dimension(1030, 80));
        Header.setPreferredSize(new java.awt.Dimension(1040, 77));

        mini_message.setBackground(new java.awt.Color(204, 204, 204));
        mini_message.setFont(new java.awt.Font("Roboto Black", 0, 14)); // NOI18N
        mini_message.setForeground(new java.awt.Color(153, 153, 153));
        mini_message.setHorizontalAlignment(javax.swing.SwingConstants.RIGHT);
        mini_message.setText("Por el futuro de la Sociedad!!");

        javax.swing.GroupLayout HeaderLayout = new javax.swing.GroupLayout(Header);
        Header.setLayout(HeaderLayout);
        HeaderLayout.setHorizontalGroup(
            HeaderLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, HeaderLayout.createSequentialGroup()
                .addContainerGap(835, Short.MAX_VALUE)
                .addComponent(mini_message)
                .addGap(16, 16, 16))
        );
        HeaderLayout.setVerticalGroup(
            HeaderLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, HeaderLayout.createSequentialGroup()
                .addContainerGap(54, Short.MAX_VALUE)
                .addComponent(mini_message)
                .addContainerGap())
        );

        Background.add(Header, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1030, -1));

        Menu.setBackground(new java.awt.Color(0, 0, 153));
        Menu.setMaximumSize(new java.awt.Dimension(250, 920));
        Menu.setMinimumSize(new java.awt.Dimension(250, 920));
        Menu.setPreferredSize(new java.awt.Dimension(250, 920));
        Menu.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        Title1.setFont(new java.awt.Font("Roboto Black", 0, 24)); // NOI18N
        Title1.setForeground(new java.awt.Color(255, 255, 255));
        Title1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Title1.setText("Nexus");
        Menu.add(Title1, new org.netbeans.lib.awtextra.AbsoluteConstraints(90, 95, -1, -1));

        Title.setFont(new java.awt.Font("Roboto Black", 0, 36)); // NOI18N
        Title.setForeground(new java.awt.Color(255, 255, 255));
        Title.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Title.setText("Escuela");
        Menu.add(Title, new org.netbeans.lib.awtextra.AbsoluteConstraints(66, 46, -1, -1));

        Title_Separator.setBackground(new java.awt.Color(255, 255, 255));
        Menu.add(Title_Separator, new org.netbeans.lib.awtextra.AbsoluteConstraints(15, 136, 220, 10));

        btn_Teacher.setBackground(new java.awt.Color(0, 0, 153));
        btn_Teacher.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                btn_TeacherMouseClicked(evt);
            }
        });

        btb_emp_txt1.setFont(new java.awt.Font("Roboto Black", 0, 14)); // NOI18N
        btb_emp_txt1.setForeground(new java.awt.Color(255, 255, 255));
        btb_emp_txt1.setText("Maestros");

        javax.swing.GroupLayout btn_TeacherLayout = new javax.swing.GroupLayout(btn_Teacher);
        btn_Teacher.setLayout(btn_TeacherLayout);
        btn_TeacherLayout.setHorizontalGroup(
            btn_TeacherLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_TeacherLayout.createSequentialGroup()
                .addGap(35, 35, 35)
                .addComponent(btb_emp_txt1)
                .addGap(167, 167, 167))
        );
        btn_TeacherLayout.setVerticalGroup(
            btn_TeacherLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_TeacherLayout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addComponent(btb_emp_txt1)
                .addGap(18, 18, 18))
        );

        Menu.add(btn_Teacher, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 195, 260, -1));

        btn_Student.setBackground(new java.awt.Color(0, 0, 153));
        btn_Student.setPreferredSize(new java.awt.Dimension(0, 60));
        btn_Student.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                btn_StudentMouseClicked(evt);
            }
        });

        jLabel3.setFont(new java.awt.Font("Roboto Black", 0, 14)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(255, 255, 255));
        jLabel3.setText("Estudiantes");

        javax.swing.GroupLayout btn_StudentLayout = new javax.swing.GroupLayout(btn_Student);
        btn_Student.setLayout(btn_StudentLayout);
        btn_StudentLayout.setHorizontalGroup(
            btn_StudentLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_StudentLayout.createSequentialGroup()
                .addGap(35, 35, 35)
                .addComponent(jLabel3)
                .addGap(152, 152, 152))
        );
        btn_StudentLayout.setVerticalGroup(
            btn_StudentLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_StudentLayout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addComponent(jLabel3)
                .addGap(18, 18, 18))
        );

        Menu.add(btn_Student, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 245, 260, -1));

        btn_Grado.setBackground(new java.awt.Color(0, 0, 153));
        btn_Grado.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                btn_GradoMouseClicked(evt);
            }
        });

        btb_emp_txt.setFont(new java.awt.Font("Roboto Black", 0, 14)); // NOI18N
        btb_emp_txt.setForeground(new java.awt.Color(255, 255, 255));
        btb_emp_txt.setText("Grado");

        javax.swing.GroupLayout btn_GradoLayout = new javax.swing.GroupLayout(btn_Grado);
        btn_Grado.setLayout(btn_GradoLayout);
        btn_GradoLayout.setHorizontalGroup(
            btn_GradoLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_GradoLayout.createSequentialGroup()
                .addGap(35, 35, 35)
                .addComponent(btb_emp_txt)
                .addGap(189, 189, 189))
        );
        btn_GradoLayout.setVerticalGroup(
            btn_GradoLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_GradoLayout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addComponent(btb_emp_txt)
                .addGap(18, 18, 18))
        );

        Menu.add(btn_Grado, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 404, 260, -1));

        btn_Cursos.setBackground(new java.awt.Color(0, 0, 153));
        btn_Cursos.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                btn_CursosMouseClicked(evt);
            }
        });

        btb_emp_txt2.setFont(new java.awt.Font("Roboto Black", 0, 14)); // NOI18N
        btb_emp_txt2.setForeground(new java.awt.Color(255, 255, 255));
        btb_emp_txt2.setText("Cursos");

        javax.swing.GroupLayout btn_CursosLayout = new javax.swing.GroupLayout(btn_Cursos);
        btn_Cursos.setLayout(btn_CursosLayout);
        btn_CursosLayout.setHorizontalGroup(
            btn_CursosLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_CursosLayout.createSequentialGroup()
                .addGap(35, 35, 35)
                .addComponent(btb_emp_txt2)
                .addGap(181, 181, 181))
        );
        btn_CursosLayout.setVerticalGroup(
            btn_CursosLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_CursosLayout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addComponent(btb_emp_txt2)
                .addGap(18, 18, 18))
        );

        Menu.add(btn_Cursos, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 298, 260, -1));

        btn_Asignacion.setBackground(new java.awt.Color(0, 0, 153));
        btn_Asignacion.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                btn_AsignacionMouseClicked(evt);
            }
        });

        btb_emp_txt3.setFont(new java.awt.Font("Roboto Black", 0, 14)); // NOI18N
        btb_emp_txt3.setForeground(new java.awt.Color(255, 255, 255));
        btb_emp_txt3.setText("Asignación");

        javax.swing.GroupLayout btn_AsignacionLayout = new javax.swing.GroupLayout(btn_Asignacion);
        btn_Asignacion.setLayout(btn_AsignacionLayout);
        btn_AsignacionLayout.setHorizontalGroup(
            btn_AsignacionLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_AsignacionLayout.createSequentialGroup()
                .addGap(35, 35, 35)
                .addComponent(btb_emp_txt3)
                .addGap(152, 152, 152))
        );
        btn_AsignacionLayout.setVerticalGroup(
            btn_AsignacionLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(btn_AsignacionLayout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addComponent(btb_emp_txt3)
                .addGap(18, 18, 18))
        );

        Menu.add(btn_Asignacion, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 351, 260, -1));

        Background.add(Menu, new org.netbeans.lib.awtextra.AbsoluteConstraints(1031, 0, 260, 909));

        Sub_Header.setBackground(new java.awt.Color(57, 57, 185));
        Sub_Header.setMaximumSize(new java.awt.Dimension(1031, 90));
        Sub_Header.setMinimumSize(new java.awt.Dimension(1031, 90));
        Sub_Header.setPreferredSize(new java.awt.Dimension(1031, 90));

        fecha.setFont(new java.awt.Font("Roboto Light", 0, 36)); // NOI18N
        fecha.setForeground(new java.awt.Color(255, 255, 255));
        fecha.setText("Hoy es Domingo 25 de Mayo de 2025");

        javax.swing.GroupLayout Sub_HeaderLayout = new javax.swing.GroupLayout(Sub_Header);
        Sub_Header.setLayout(Sub_HeaderLayout);
        Sub_HeaderLayout.setHorizontalGroup(
            Sub_HeaderLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(Sub_HeaderLayout.createSequentialGroup()
                .addGap(26, 26, 26)
                .addComponent(fecha)
                .addContainerGap(412, Short.MAX_VALUE))
        );
        Sub_HeaderLayout.setVerticalGroup(
            Sub_HeaderLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(Sub_HeaderLayout.createSequentialGroup()
                .addGap(29, 29, 29)
                .addComponent(fecha)
                .addContainerGap(18, Short.MAX_VALUE))
        );

        Background.add(Sub_Header, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 78, -1, -1));

        desktop.setBackground(new java.awt.Color(255, 255, 255));
        desktop.setMaximumSize(new java.awt.Dimension(1030, 740));
        desktop.setMinimumSize(new java.awt.Dimension(1030, 740));
        Background.add(desktop, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 168, 1030, 740));

        getContentPane().add(Background, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, -1, -1));

        pack();
    }// </editor-fold>//GEN-END:initComponents

// <editor-fold defaultstate="collapsed" desc="Configuraciones Btn Exit">    
    private void exit_txtMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_exit_txtMouseClicked
        System.exit(0);
    }//GEN-LAST:event_exit_txtMouseClicked

    private void exit_txtMouseEntered(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_exit_txtMouseEntered
        exit_cube.setBackground(Color.red);
        exit_txt.setForeground(Color.white);
    }//GEN-LAST:event_exit_txtMouseEntered

    private void exit_txtMouseExited(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_exit_txtMouseExited
        exit_cube.setBackground(new Color(0,0,153));
        exit_txt.setForeground(Color.white);
    }//GEN-LAST:event_exit_txtMouseExited
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="Configuraciones Barra">
    private void barMouseDragged(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_barMouseDragged
        int x = evt.getXOnScreen();
        int y = evt.getYOnScreen();
        this.setLocation(x - xmouse,y - ymouse);
    }//GEN-LAST:event_barMouseDragged

    private void barMousePressed(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_barMousePressed
        xmouse= evt.getX();
        ymouse= evt.getY();
    }//GEN-LAST:event_barMousePressed
// </editor-fold>

    private void btn_GradoMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_btn_GradoMouseClicked

        CloseOtherInternalFrames();
        GradoView Init= new GradoView();
        desktop.add(Init);
        Init.setVisible(true);
        
        try{
            Init.setSelected(true);
        }catch (java.beans.PropertyVetoException e){ e.printStackTrace(); }
     
    }//GEN-LAST:event_btn_GradoMouseClicked

    private void btn_StudentMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_btn_StudentMouseClicked

        CloseOtherInternalFrames();
        StudentView Init= new StudentView();
        desktop.add(Init);
        Init.setVisible(true);
        
        try{
            Init.setSelected(true);
        }catch (java.beans.PropertyVetoException e){ e.printStackTrace(); }
     
    }//GEN-LAST:event_btn_StudentMouseClicked

    private void btn_TeacherMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_btn_TeacherMouseClicked

        CloseOtherInternalFrames();
        TeacherView Init= new TeacherView();
        desktop.add(Init);
        Init.setVisible(true);
        
        try{
            Init.setSelected(true);
        }catch (java.beans.PropertyVetoException e){ e.printStackTrace(); }
     
    }//GEN-LAST:event_btn_TeacherMouseClicked

    private void btn_CursosMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_btn_CursosMouseClicked

        CloseOtherInternalFrames();
        CursosView Init= new CursosView();
        desktop.add(Init);
        Init.setVisible(true);
        
        try{
            Init.setSelected(true);
        }catch (java.beans.PropertyVetoException e){ e.printStackTrace(); }
     
    }//GEN-LAST:event_btn_CursosMouseClicked

    private void btn_AsignacionMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_btn_AsignacionMouseClicked

        CloseOtherInternalFrames();
        AsignacionView Init= new AsignacionView();
        desktop.add(Init);
        Init.setVisible(true);
        
        try{
            Init.setSelected(true);
        }catch (java.beans.PropertyVetoException e){ e.printStackTrace(); }
     
    }//GEN-LAST:event_btn_AsignacionMouseClicked

private void CloseOtherInternalFrames() {
    for (JInternalFrame frame : desktop.getAllFrames()) {
        frame.dispose(); // Cierra el frame
    }
}

    
    /**
     * @param args the command line arguments
     */

    public static void main(String args[]) {        
        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Dashboard().setVisible(true);
            }
        });
    }



// <editor-fold defaultstate="collapsed" desc="Declaracion de Variables">
    
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JPanel Background;
    private javax.swing.JPanel Header;
    private javax.swing.JPanel Menu;
    private javax.swing.JPanel Sub_Header;
    private javax.swing.JLabel Title;
    private javax.swing.JLabel Title1;
    private javax.swing.JSeparator Title_Separator;
    private javax.swing.JPanel bar;
    private javax.swing.JLabel btb_emp_txt;
    private javax.swing.JLabel btb_emp_txt1;
    private javax.swing.JLabel btb_emp_txt2;
    private javax.swing.JLabel btb_emp_txt3;
    private javax.swing.JPanel btn_Asignacion;
    private javax.swing.JPanel btn_Cursos;
    private javax.swing.JPanel btn_Grado;
    private javax.swing.JPanel btn_Student;
    private javax.swing.JPanel btn_Teacher;
    private javax.swing.JDesktopPane desktop;
    private javax.swing.JPanel exit_cube;
    private javax.swing.JLabel exit_txt;
    private javax.swing.JLabel fecha;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel mini_message;
    // End of variables declaration//GEN-END:variables
// </editor-fold>
}
