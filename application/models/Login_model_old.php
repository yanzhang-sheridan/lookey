<?php  
 class Login_model extends CI_Model  
 {  
      
      function can_login($email,$password)  
      {  
          $this->db->where("email", $email);  
          $query = $this->db->get('user');
          if ($query->num_rows()>0){
            foreach ($query->result() as $row) {
              if ($row->is_email_verified == "yes"){
                 $store_password = $row->password; 
                 //$this->encrypt->decode($row->password);
                 if($password == $store_password){
                  $this->session->set_userdata('id', $row->id);
                  $this->session->set_userdata('username', $row->name);
                 }else {
                  return 'Wrong Password';
                 }
              } else{
                return "First verified your email address";
              }


            }
      
          } else {
            return "Wrong Email";

          }

      }  

      
}

?>
