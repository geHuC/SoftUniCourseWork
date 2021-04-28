namespace _04.BorderControl
{
    class Robot : Interfaces.IIDAble
    {
        public Robot(string model, string id)
        {
            ID = id;
            Model = model;
        }
        public string ID { get; private set; }
        public string Model { get; private set; }
    }
}
