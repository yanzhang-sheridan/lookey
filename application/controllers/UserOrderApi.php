<?php
class Userorderapi extends CI_Controller {
    public $JSON_DATA;
    public function __construct()
    {
        parent::__construct();
        $this->load->model("userorder_model");
        $this->output->set_content_type("application/json");
        $this->output->set_header("Access-Control-Allow-Origin: *");
        $this->output->set_header("Access-Control-Allow-Methods: GET, OPTIONS");
        $this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

        $this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
    }
    public function get_all_data(){
        echo $this->userorder_model->get_all();
    }
    public function save(){
        echo $this->userorder_model->save(
            $this->JSON_DATA
        );
    }
    public function saveBatch(){
        $this->userorder_model->saveBatch(
            $this->JSON_DATA);
        echo true; //$this->JSON_DATA;
        // var_dump($this->JSON_DATA);die();
        // echo('hello');
       // var_dump()
       //  );
    }
    public function update(){
        $id = $this->JSON_DATA["id"];
        unset($this->JSON_DATA["id"]);

        echo $this->userorder_model->update(
            $this->JSON_DATA,
            array(
                "id"        => $id
            )
        );
    }
    public function delete(){
        echo $this->userorder_model->delete(
            $this->JSON_DATA
        );
    }

}