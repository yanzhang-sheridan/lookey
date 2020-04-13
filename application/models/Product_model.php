<?php
class Product_model extends CI_Model{

    public $tableName;
    public function __construct()
    {
        parent::__construct();
        $this->tableName = "products";
    }

    public function get_all(){
        return json_encode($this->db->get($this->tableName)->result());
    }

    public function save($data = array()){
	// echo $this->db->last_query();
 //         $this->db->set($data);
	   
        $insert = $this->db->insert($this->tableName, $data);
	// print_r($this->db->last_query()); 
	// echo $this->db->last_query();
        if($insert){
            return json_encode(array(
                "insert_id" => $this->db->insert_id()
            ));
        }
    }

    public function update($data = array(), $where = array()){
           echo  $this->db->get_compiled_select();
        return json_encode($this->db->where($where)->update($this->tableName, $data));
           print_r($this->db->last_query()); 
    }

    public function delete($where = array()){
        return json_encode($this->db->where($where)->delete($this->tableName));
    }
}