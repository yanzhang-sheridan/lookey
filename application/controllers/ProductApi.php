<?php
class Productapi extends CI_Controller {
    public $JSON_DATA;
    public function __construct()
    {
        parent::__construct();
        $this->load->model("product_model");
        $this->output->set_content_type("application/json");
        $this->output->set_header("Access-Control-Allow-Origin: *");
        $this->output->set_header("Access-Control-Allow-Methods: GET, OPTIONS");
        $this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

        $this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
        //echo $this->JSON_DATA;
    }
    public function get_all_data(){
        echo $this->product_model->get_all();
    }
    public function save(){
        echo $this->product_model->save(
            $this->JSON_DATA
        );
    }
    public function update(){
        //$id = isset($id) ? $id : '7';
        //set($id);
        $id = $this->JSON_DATA["id"];
        //echo ('hello');
        unset($this->JSON_DATA["id"]);
        echo $this->product_model->update(
            $this->JSON_DATA,
            array(
                "id"        => $id
            )
        );

    }
    public function delete(){
        echo $this->product_model->delete(
            $this->JSON_DATA
        );
    }

}