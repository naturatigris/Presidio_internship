using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace task3.Migrations
{
    /// <inheritdoc />
    public partial class AddHREmployeeAndUploadedFiles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "UploadedFiles",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_UploadedFiles_Email",
                table: "UploadedFiles",
                column: "Email");

            migrationBuilder.AddForeignKey(
                name: "FK_UploadedFiles_Employees_Email",
                table: "UploadedFiles",
                column: "Email",
                principalTable: "Employees",
                principalColumn: "Email",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UploadedFiles_Employees_Email",
                table: "UploadedFiles");

            migrationBuilder.DropIndex(
                name: "IX_UploadedFiles_Email",
                table: "UploadedFiles");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "UploadedFiles");
        }
    }
}
