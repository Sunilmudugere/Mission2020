using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using newProj.API.Data;
using newProj.API.DTO;
using newProj.API.Models;

namespace newProj.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthRepository _authRepository { get; set; }
        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(UserDto userToCreateDto)
        {
            userToCreateDto.UserName = userToCreateDto.UserName.ToLower();
            if (await _authRepository.IsUserExists(userToCreateDto.UserName))
            {
                return BadRequest("User already exists");
            }
            var userToCreate = new User(){ UserName = userToCreateDto.UserName};
            var createdUser = _authRepository.Register(userToCreate, userToCreateDto.Password);
            return Ok();
        }
    }
}