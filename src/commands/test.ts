import type { CommandInteraction } from "dressed";
 
export default async function (interaction: CommandInteraction) {
  await interaction.reply({
    content: "test",
    ephemeral: true
  });
}