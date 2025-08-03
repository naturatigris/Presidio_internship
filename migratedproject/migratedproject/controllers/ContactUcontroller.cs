using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ChienVHShopOnline.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactUsController : ControllerBase
    {
        private readonly IContactUsService _service;
        private readonly ILogger<ContactUsController> _logger;

        public ContactUsController(IContactUsService service, ILogger<ContactUsController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> PostContact([FromBody] ContactUsCreateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var result = await _service.SubmitContactAsync(dto);

                if (result == "Submitted successfully!")
                    return Ok(new { message = result });

                return BadRequest(new { error = result });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while submitting contact info.");
                return StatusCode(500, new { error = "An internal server error occurred. Please try again later." });
            }
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactU>>> GetAllContacts()
        {
            try
            {
                var contacts = await _service.GetAllAsync();
                return Ok(contacts);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching contact list.");
                return StatusCode(500, "Failed to retrieve contact data.");
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactU>> GetContactById(int id)
        {
            try
            {
                var contact = await _service.GetByIdAsync(id);
                if (contact == null)
                    return NotFound(new { message = "Contact not found." });

                return Ok(contact);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error retrieving contact with ID {id}.");
                return StatusCode(500, "Failed to retrieve contact.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            try
            {
                var contact = await _service.GetByIdAsync(id);
                if (contact == null)
                    return NotFound(new { message = "Contact not found." });

                await _service.DeleteAsync(id);
                return Ok(new { message = "Contact deleted successfully." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error deleting contact with ID {id}.");
                return StatusCode(500, "Failed to delete contact.");
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContact(int id, [FromBody] ContactUsUpdateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var existingContact = await _service.GetByIdAsync(id);
                if (existingContact == null)
                    return NotFound(new { message = "Contact not found." });

                existingContact.name = dto.FullName;
                existingContact.email = dto.Email;
                existingContact.phone = dto.Phone;
                existingContact.content = dto.Content;

                await _service.UpdateContact(existingContact);

                return Ok(new { message = "Contact updated successfully." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error updating contact with ID {id}.");
                return StatusCode(500, "Failed to update contact.");
            }
        }

            
    }
}
