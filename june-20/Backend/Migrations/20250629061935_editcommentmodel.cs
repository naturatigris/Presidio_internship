using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace bloggingplatform.Migrations
{
    /// <inheritdoc />
    public partial class editcommentmodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "iseditied",
                table: "Comments",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "iseditied",
                table: "Comments");
        }
    }
}
