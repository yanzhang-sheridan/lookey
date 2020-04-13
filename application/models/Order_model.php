<?php
class Order_model extends CI_Model{

    public $tableName;
    public function __construct()
    {
        parent::__construct();
        $this->tableName = "orders";
    }

    public function get_all(){
        return json_encode($this->db->get($this->tableName)->result());
    }

    public function save($data = array()){
         echo  $this->db->get_compiled_select();

          // $data = array(
          //   'userid' => $this->input->post('userid'),
          //   'productid' => $this->input->post('productid'),
          //   'name' => $this->input->post('name'),
          //   'quantity' => $this->input->post('quantity'),
          //   'status' => $this->input->post('status')
            
          //   );

    $this->db->set($data);





        $insert = $this->db->insert($this->tableName, $data);
        echo $this->db->last_query();
        if($insert){
            return json_encode(array(
                "insert_id" => $this->db->insert_id()
            ));
        }
    }

   public function saveBatch($data = array()){
        $insert = $this->db->insert_batch($this->tableName, $data);
        if($insert){
            return json_encode(array(
               "insert_id" => $this->db->insert_id()
            ));
        }
    }


    public function update($data = array(), $where = array()){
        return json_encode($this->db->where($where)->update($this->tableName, $data));
    }

    public function delete($where = array()){
        return json_encode($this->db->where($where)->delete($this->tableName));
    }
}