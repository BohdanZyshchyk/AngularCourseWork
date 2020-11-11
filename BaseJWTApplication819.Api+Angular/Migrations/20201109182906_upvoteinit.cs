using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseJWTApplication819.Api_Angular.Migrations
{
    public partial class upvoteinit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UpvotedMemes",
                columns: table => new
                {
                    MemeId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UpvotedMemes", x => new { x.MemeId, x.UserId });
                    table.ForeignKey(
                        name: "FK_UpvotedMemes_Memes_MemeId",
                        column: x => x.MemeId,
                        principalTable: "Memes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UpvotedMemes_tblUserAdditionalInfo_UserId",
                        column: x => x.UserId,
                        principalTable: "tblUserAdditionalInfo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UpvotedMemes_UserId",
                table: "UpvotedMemes",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UpvotedMemes");
        }
    }
}
