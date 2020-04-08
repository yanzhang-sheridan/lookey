<?php  
 class Register_model extends CI_Model  
 {  
      
      function insert($data)  
      {  
           $this->db->insert("user", $data);  
           return $this->db->insert_id();
      }  

       function enable_email($key) //if SMTP works, using folloeing instead
      {
        $this->db->where('verification_key', $key);
        //$this->db->where('is_email_verified', 'no');
        $query = $this->db->get('user');
        if($query->num_rows() > 0)
        {
         $data = array(
          'is_email_verified'  => 'yes'
         );
         $this->db->where('verification_key', $key);
         $this->db->update('user', $data);
         return true;
        }
        else
        {
         return true; //false;
        }
      }

      function verify_email($key)
      {
        $this->db->where('verification_key', $key);
        $this->db->where('is_email_verified', 'no');
        $query = $this->db->get('user');
        if($query->num_rows() > 0)
        {
         $data = array(
          'is_email_verified'  => 'yes'
         );
         $this->db->where('verification_key', $key);
         $this->db->update('user', $data);
         return true;
        }
        else
        {
         return true; //false;
        }
      }
}

?>
