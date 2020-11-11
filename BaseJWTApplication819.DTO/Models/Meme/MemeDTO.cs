using System;
using System.Collections.Generic;
using System.Text;

namespace BaseJWTApplication819.DTO.Models.Meme
{
    public class MemeDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Date { get; set; }
        public int Rating { get; set; }
    }
}
