using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BaseJWTApplication819.DataAccess.Entity;
using BaseJWTApplication819.DTO.Models.Meme;

namespace BaseJWTApplication819.Api_Angular.Helper
{
    public class MemeProfile:Profile
    {
        public MemeProfile()
        {
            CreateMap<Meme, MemeDTO>();
            CreateMap<MemeDTO, Meme>();
            CreateMap<Comment, CommentDTO>()
                .ForMember(dest =>
                dest.UserName,
                opt => opt.MapFrom(src => src.User.UserName))
                .ForMember(dest =>
                dest.UserId,
                opt => opt.MapFrom(src => src.User.Id));
        }
    }
}
