using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BaseJWTApplication819.DataAccess.Entity
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public string Date { get; set; }
        [Required]
        public virtual User User { get; set; }
        [Required]
        public virtual Meme Meme { get; set; }
    }
}
