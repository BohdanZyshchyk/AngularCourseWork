using System;
using System.Collections.Generic;
using System.Text;

namespace BaseJWTApplication819.DTO.Models.Meme
{
    public class CommentDTO
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Date { get; set; }
        public string UserName { get; set; }
        public string UserId{ get; set; }
        public string MemeId{ get; set; }
    }
}
