using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace bloggingplatform.Migrations
{
    /// <inheritdoc />
    public partial class AddPostCategoryTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CategoryPost_Categories_CategoriesId",
                table: "CategoryPost");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryPost_Posts_PostsId",
                table: "CategoryPost");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryPost",
                table: "CategoryPost");

            migrationBuilder.RenameTable(
                name: "CategoryPost",
                newName: "PostCategories");

            migrationBuilder.RenameIndex(
                name: "IX_CategoryPost_PostsId",
                table: "PostCategories",
                newName: "IX_PostCategories_PostsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PostCategories",
                table: "PostCategories",
                columns: new[] { "CategoriesId", "PostsId" });

            migrationBuilder.AddForeignKey(
                name: "FK_PostCategories_Categories_CategoriesId",
                table: "PostCategories",
                column: "CategoriesId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PostCategories_Posts_PostsId",
                table: "PostCategories",
                column: "PostsId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PostCategories_Categories_CategoriesId",
                table: "PostCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_PostCategories_Posts_PostsId",
                table: "PostCategories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PostCategories",
                table: "PostCategories");

            migrationBuilder.RenameTable(
                name: "PostCategories",
                newName: "CategoryPost");

            migrationBuilder.RenameIndex(
                name: "IX_PostCategories_PostsId",
                table: "CategoryPost",
                newName: "IX_CategoryPost_PostsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryPost",
                table: "CategoryPost",
                columns: new[] { "CategoriesId", "PostsId" });

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryPost_Categories_CategoriesId",
                table: "CategoryPost",
                column: "CategoriesId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryPost_Posts_PostsId",
                table: "CategoryPost",
                column: "PostsId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
