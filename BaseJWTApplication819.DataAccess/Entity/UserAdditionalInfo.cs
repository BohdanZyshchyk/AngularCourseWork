using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BaseJWTApplication819.DataAccess.Entity
{
    [Table("tblUserAdditionalInfo")]
    public class UserAdditionalInfo
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string Image { get; set; }

        public virtual List<CreatedMemes> CreatedMemes { get; set; }
        public virtual List<UpvotedMemes> UpvotedMemes { get; set; }
        //public virtual List<Meme> UpvotedMemes { get; set; }
        public virtual List<Comment> Comments { get; set; }
        public virtual User User { get; set; }
        public UserAdditionalInfo()
        {
            CreatedMemes = new List<CreatedMemes>();
        }
    }
}
