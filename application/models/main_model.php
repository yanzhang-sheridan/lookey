<?php  
 class Main_model extends CI_Model  
 {  
      function test_main()  
      {  
           echo "This is model function";  
      }  
      function insert_data($data)  
      {  
           $this->db->insert("user", $data);  
      }  
      function fetch_data()  
      {  
           //$query = $this->db->get("tbl_user");  
           //select * from tbl_user  
           //$query = $this->db->query("SELECT * FROM tbl_user ORDER BY id DESC");  
           $this->db->select("*");  
           $this->db->from("user");  
           $query = $this->db->get();  
           return $query;  
      }  
      function delete_data($id){  
           $this->db->where("id", $id);  
           $this->db->delete("user");  
           //DELETE FROM tbl_user WHERE id = $id  
      }  
      function fetch_single_data($id)  
      {  
           $this->db->where("id", $id);  
           $query = $this->db->get("user");  
           return $query;  
           //Select * FROM tbl_user where id = '$id'  
      }  
      function update_data($data, $id)  
      {  
           $this->db->where("id", $id);  
           $this->db->update("user", $data);  
           //UPDATE tbl_user SET first_name = '$first_name', last_name = '$last_name' WHERE id = '$id'  
      }  
      function can_login($username,$password)
      {

        $this->db->where('username',$username);
        $this->db->where('password',$password);
        $query = $this->db->get('user');

        if ($query->num_rows()>0){

          return true;

        } else {

          return false;
        }

      }
 }  

//databse operration function write here

?>
