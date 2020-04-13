<?php
class Userorderdetails_model extends CI_Model{

    public $tableName;
    public function __construct()
    {
        parent::__construct();
        $this->tableName = "userorderdetails";
    }

    public function get_all(){
        return json_encode($this->db->get($this->tableName)->result());
    }

//     public function save($data = array()){
//         $insert = $this->db->insert($this->tableName, $data);
//         if($insert){
//             return json_encode(array(
//                 "insert_id" => $this->db->insert_id()
//             ));
//         }
//     }
//     public function saveBatch($data = array()){
//         $insert = $this->db->insert_batch($this->tableName, $data);
//         if($insert){
//             return json_encode(array(
//                "insert_id" => $this->db->insert_id()
//             ));
//         }
//     }

//     public function update($data = array(), $where = array()){
//         return json_encode($this->db->where($where)->update($this->tableName, $data));
//     }

//     public function delete($where = array()){
//         return json_encode($this->db->where($where)->delete($this->tableName));
//     }
}