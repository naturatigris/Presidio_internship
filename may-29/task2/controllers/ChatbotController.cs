using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.IO;
namespace Bank.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GeminiController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private static bool _flaskStarted = false;

        public GeminiController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpPost("ask")]
        public async Task<IActionResult> AskQuestion([FromBody] QuestionRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Question))
                return BadRequest("Question cannot be empty.");

            if (!_flaskStarted)
            {
                StartFlaskApp();
                await Task.Delay(3000); 
            }

            var flaskUrl = "http://127.0.0.1:5001/generate";

            var requestContent = new StringContent(
                JsonSerializer.Serialize(new { prompt = request.Question }),
                Encoding.UTF8,
                "application/json"
            );

            try
            {
                var response = await _httpClient.PostAsync(flaskUrl, requestContent);
                var body = await response.Content.ReadAsStringAsync();

                if (!response.IsSuccessStatusCode)
                    return StatusCode((int)response.StatusCode, "Gemini model error");

                var geminiResponse = JsonSerializer.Deserialize<GeminiResponse>(body);
                return Ok(new { answer = geminiResponse?.text ?? "No response" });
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(500, $"Could not connect to Gemini model: {ex.Message}");
            }
        }

        private void StartFlaskApp()
        {
            var psi = new ProcessStartInfo
            {
                FileName = "python3",
                Arguments = "geminiflask.py",
                WorkingDirectory = "/Users/sandhyaanand/Documents/GitHub/Presidio_internship/may-29/task2/chatbot",
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                CreateNoWindow = true
            };

            var process = new Process { StartInfo = psi };
            process.OutputDataReceived += (sender, e) =>
            {
                if (!string.IsNullOrEmpty(e.Data))
                    Console.WriteLine("[Flask STDOUT] " + e.Data);
            };
            process.ErrorDataReceived += (sender, e) =>
            {
                if (!string.IsNullOrEmpty(e.Data))
                    Console.WriteLine("[Flask STDERR] " + e.Data);
            };

            process.Start();
            process.BeginOutputReadLine();
            process.BeginErrorReadLine();

            _flaskStarted = true;
        }

        public class QuestionRequest
        {
            public string Question { get; set; }
        }

        public class GeminiResponse
        {
            public string text { get; set; } 
        }
    }
}