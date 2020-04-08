<!DOCTYPE html>  
 <html>  
 <head>  
      <title>User login/ Register</title>  
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
 </head>  
 <body>  
      <div class="container">  
         <br />
         <h3 align="center"> Lookey Registration and Login</h3>
         <br /> 
         <div class="panel penel-default">
            <div class="panel-heading">
               <div class="alert alert-secondary" role="alert"> Register   </div>
            </div>
            <div class="panel-body">
             <?php
                if($this->session->flashdata('message'))
                {
                    echo '
                    <div class="alert alert-success">
                        '.$this->session->flashdata("message").'
                    </div>
                    ';
                }
               ?>
                
               <form method="post" action="<?php echo base_url(); ?>register/validation">  
                  <div class="form-group">  
                     <label>Enter Your Name</label>  
                     <input type="text" name="user_name" class="form-control" 
                      value="<?php echo set_value('user_name'); ?>"/>  
                     <span class="text-danger"><?php echo form_error('user_name'); ?></span>                 
                  </div>
                  <div class="form-group">  
                     <label>Enter Your Email</label>  
                     <input type="text" name="user_email" class="form-control" 
                      value="<?php echo set_value('user_email'); ?>"/>  
                     <span class="text-danger"><?php echo form_error('user_email'); ?></span>                 
                  </div>
                  <div class="form-group">  
                     <label>Enter Password</label>  
                     <input type="password" name="user_password" class="form-control"  value="<?php echo set_value('user_password'); ?>"/>  
                     <span class="text-danger"><?php echo form_error('user_password'); ?></span>                 
                  </div>        
              
                  <div class="form-group">  
                       <input type="submit" name="register" value="Register" class="btn btn-info" />  
                  </div>  
           </form>  
      </div>  
 </body>  
 </html>  
