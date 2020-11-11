using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseJWTApplication819.Api_Angular.Migrations
{
    public partial class addtitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Memes",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Memes");
        }
    }
}
