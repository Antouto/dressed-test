import { createMessage, type CommandInteraction } from "dressed";
 
export default async function (interaction: CommandInteraction) {
  await interaction.deferReply({ ephemeral: true })

  await createMessage(interaction.channel.id, "1")
  await createMessage(interaction.channel.id, "2")
  await createMessage(interaction.channel.id, "3")

  await interaction.editReply({
    content: "test"
  });
}