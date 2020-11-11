using System;
using System.Collections.Generic;
using System.Security.Principal;
using System.Text;

namespace BaseJWTApplication819.DataAccess.Entity
{
    public class CreatedMemes
    {
        public int MemeId { get; set; }
        public string UserId { get; set; }

        public virtual Meme Meme { get; set; }
        public virtual UserAdditionalInfo User { get; set; }
    }
}
