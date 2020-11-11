using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using AutoMapper;
using BaseJWTApplication819.DataAccess;
using BaseJWTApplication819.DataAccess.Entity;
using BaseJWTApplication819.DTO.Models.Meme;
using BaseJWTApplication819.DTO.Models.Results;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BaseJWTApplication819.Api_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly IMapper _mapper;
        public CommentsController(EFContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpGet("commentslist/{id}")]
        public List<CommentDTO> getAllComments([FromRoute] int id)
        {
            var comments = _context.Comments.Include(x=> x.Meme).Include(x=> x.User).Where(x=> x.Meme.Id == id).ToList(); 
            var data = _mapper.Map<ICollection<CommentDTO>>(comments);
            return data.ToList();
        }

        [HttpPost("addcomment")]
        public ResultDTO AddComment([FromBody] CommentDTO model)
        {
            var meme = _context.Memes.FirstOrDefault(x => x.Id == Int32.Parse(model.MemeId));
            var user = _context.Users.FirstOrDefault(x => x.Id == model.UserId);
            var comment = new Comment
            {
                Date = model.Date,
                Text = model.Text,
                Meme = meme,
                User = user
            };
            _context.Comments.Add(comment);
            _context.SaveChanges();
            return new ResultDTO
            {
                Message = "Ok",
                Status = 200
            };
        }

    }
}