import type { CommandInteraction } from "dressed";

export default async function panel(interaction: CommandInteraction) {
  await interaction.reply({
    components: [{
      type: 1,
      components: [{
        type: 2,
        label: 'test',
        style: 1,
        custom_id: 'test'   
      }]
    }]
  })
}
